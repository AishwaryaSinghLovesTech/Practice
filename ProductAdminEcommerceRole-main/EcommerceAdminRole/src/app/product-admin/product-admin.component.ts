import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.css']
})
export class ProductAdminComponent implements OnInit, AfterContentChecked {
  productForm!: FormGroup;
  productNames:any[]=[]
  myControlName: FormControl = new FormControl('', [Validators.required])
  myControlPrice:FormControl = new FormControl('',[Validators.required, Validators.pattern('[0-9]+')])
  myControlDesc:FormControl = new FormControl('',[Validators.required])
  filteredOptions!: Observable<string[]>;
  constructor(private formBuilder: FormBuilder, public _productService:ProductService) { }
  
  ngOnInit(): void {
    
  }

 ngAfterContentChecked(): void {
  this.productForm = this.formBuilder.group({
    name:this.myControlName,
    price:this.myControlPrice,
    desc:this.myControlDesc
   });
   
   
   this.productNames = this._productService.productOptions.map(x=>x.name)
   


   this.filteredOptions = this.myControlName.valueChanges
     .pipe(
       startWith(''),
       map(val => this.filterValue(val))
     );   
 }

  filterValue(val: string): string[] {
    return this.productNames.filter(option =>
      option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }
 addProduct(form:any){
     let productObj = {
     name:form.name,
     price:form.price,
     desc:form.desc,
     img: this._productService.productOptions.find(x=>x.name === form.name)!.img
     }
     console.log(productObj)
     this._productService.productList.unshift(productObj)
    
 }
  
}
