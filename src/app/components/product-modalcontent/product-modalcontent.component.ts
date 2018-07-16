import { Component, Input, OnInit } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product'
@Component({
  selector: 'app-product-modalcontent',
  templateUrl: './product-modalcontent.component.html',
  styleUrls: ['./product-modalcontent.component.css']
})

export class ProductModalcontentComponent implements OnInit {
  @Input() product: Product;
  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder, private productService: ProductsService) { // <--- inject FormBuilder
    this.createForm();
  }
  stockForm: FormGroup;
  submitted = false;
  // convenience getter for easy access to form fields
  get f() { return this.stockForm.controls; }
  createForm() {
    this.stockForm = this.fb.group({
      firstName: [{ value: '', disabled: true }, Validators.required],
      addStock: ['', Validators.required]
    });
  }
ngOnInit(){
  
}
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.stockForm.invalid) {
      return;
    }
    this.productService.updateStock(Object.assign({ ...this.product }, { stock: this.product.stock + this.stockForm.controls['addStock'].value }))
      .subscribe(
        (result) => {
          console.log(result);
          this.activeModal.close(result);
        }
      );
    //alert('SUCCESS!! :-)')
  }
  crossModal(){
   this.activeModal.close('Cross click')
  }
}
