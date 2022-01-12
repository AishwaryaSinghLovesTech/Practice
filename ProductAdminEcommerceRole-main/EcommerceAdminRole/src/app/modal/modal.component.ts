import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators , FormBuilder} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  
  updateProductForm!: FormGroup;
  productNames:any[]=[]
  
  myControlPrice:FormControl = new FormControl('',[Validators.required, Validators.pattern('[+-]?([0-9]*[.])?[0-9]+')])
  myControlDesc:FormControl = new FormControl('',[Validators.required])
  constructor(private formBuilder: FormBuilder, public _productService:ProductService,@Inject(MAT_DIALOG_DATA) public data: any,
  private dialogRef: MatDialogRef<ModalComponent>) { }

  ngOnInit(): void {
    this.updateProductForm = this.formBuilder.group({
      price:this.myControlPrice,
      desc:this.myControlDesc
     });
  }
  updateProduct(form:any){
   if(form.price){
     this._productService.productList[this.data.index].price = form.price
     
   }
   if(form.desc){
    this._productService.productList[this.data.index].desc = form.desc
   }
  }
  closeDialog(){
    this.dialogRef.close()
  }
  deleteProduct(){
    this._productService.productList.splice(this.data.index,1);
    this.closeDialog()
  }
}
