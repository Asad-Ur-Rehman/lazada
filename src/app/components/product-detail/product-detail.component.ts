import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductsService } from '../../services/products.service';
import { ProductModalcontentComponent } from '../product-modalcontent/product-modalcontent.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() product: Product

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private location: Location, private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.getProduct()
  }

  getProduct(): void {
    //+ converts string into int
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id)
      .subscribe(product => this.product = product);
  }

  goBack(): void {
    this.location.back();
  }
  addStock(newProduct: Product) {
    const modalRef = this.modalService.open(ProductModalcontentComponent);
    modalRef.componentInstance.product = newProduct;
    modalRef.result.then((newData) => {
      this.getProduct();
    })
  }


}
