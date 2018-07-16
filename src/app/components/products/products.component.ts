import { Component, OnInit , SimpleChanges} from '@angular/core';
import { Product } from '../../models/product'
import { ProductsService } from '../../services/products.service';
import { ProductModalcontentComponent } from '../product-modalcontent/product-modalcontent.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  // private _resolve: (result?: any) => void;
  // private _reject: (reason?: any) => void;
  selected = '5';
  closeResult: string;
  page = 1;
  pageSize = +this.selected;
  start = 0;
  end = this.pageSize;
  products: Product[] = [];

  constructor(
    private productService: ProductsService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe((data: Product[]) => this.products = data)
  }

  numberOfEntriesChange(): void {
    this.pageSize = +this.selected;
    this.loadTablePage();
  }

  loadTablePage(): void {
    this.start = (this.pageSize * this.page) - this.pageSize;
    this.end = this.start + this.pageSize;
  }

  openModal(newProduct: any) {
    const modalRef = this.modalService.open(ProductModalcontentComponent);
    modalRef.componentInstance.product = newProduct;
    // modalRef.result = new Promise((resolve, reject) => {
    //   this._resolve = resolve;
    //   this._reject = reject;
    // });
    modalRef.result.then((newData) =>
    //  {
    //   console.log('NEW DATA', newData);
    //   this.getProducts();
    // }
    
    {
      this.getProducts();
      this.closeResult = 
      `Closed with: ${newData}`;
    }, (reason) => {
      this.closeResult = `Dismissed with : ${reason}`;
    }
  )
  }
}
