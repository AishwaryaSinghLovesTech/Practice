export interface Product{
    name:any;
    price:any;
    img:any;
    desc:any;
    }
    
    export class productdto implements Product
    { name:any;
      price:any;
      img:string;
      desc:any;
      constructor(product:any){
        this.name  = product.name;
        this.price=  product.price;
        this.desc = product.description;
        this.img = product.image;
      
      }
    
    
    }
