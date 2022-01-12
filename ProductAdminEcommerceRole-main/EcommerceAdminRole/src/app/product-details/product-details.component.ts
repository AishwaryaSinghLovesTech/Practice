import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Product, productdto } from '../product-dto';
import { ProductService } from '../product.service';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { ModalComponent } from '../modal/modal.component';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, AfterContentChecked{
  displayedColumns = ['Info', 'Price', 'Description', 'Action'];
  dataSource!: MatTableDataSource<Product>;
  public pageSize = 10;
  public currentPage = 0;
  public totalSize = 0;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public _productService:ProductService, private dialog: MatDialog) { }

  ngOnInit(): void {
    
      
    
     
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

  updateProductEntry(row:any,index:any){
   const dialogRef = this.dialog.open(ModalComponent,{
    data:{
      index:index,
      product:row
    }
  });
  }

  deleteProductEntry(row:any,index:any){
    const dialogRef = this.dialog.open(ModalComponent,{
      data:{
        index:index,
        
      }
    });
  }
  
}

