import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Product, productdto } from '../product-dto';
import { ProductService } from '../product.service';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, AfterContentChecked{
  displayedColumns = ['info', 'price', 'desc', 'action'];
  dataSource!: MatTableDataSource<Product>;
  public pageSize = 10;
  public currentPage = 0;
  public totalSize = 0;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public _productService:ProductService) { }

  ngOnInit(): void {
    this._productService.getProductList().subscribe(data=>{
      let productList = data.slice(0,25);
      let productOptionsList = data.slice(26,data.length-1);
      productList.forEach((element:any)=> {
       this._productService.productList.push(new productdto(element))
      });
      productOptionsList.forEach((element:any)=> {
        this._productService.productOptions.push(new productdto(element))
       });
    }
      
      )
     
  }

  ngAfterContentChecked(): void {
    
    this.dataSource = new MatTableDataSource(this._productService.productList.slice(this.lowValue,this.highValue))
  }

  ngAfterViewInit(): void {
    
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    
  }
  lowValue: number = 0;
  highValue: number = 5;

  // used to build a slice of papers relevant at any given time
  public getPaginatorData(event: PageEvent): PageEvent {
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    this.dataSource = new MatTableDataSource(this._productService.productList.slice(this.lowValue,this.highValue))
    return event;
  }
  
}

