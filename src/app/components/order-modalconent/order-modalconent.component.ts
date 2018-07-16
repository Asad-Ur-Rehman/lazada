import { Component, Input, OnInit } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { Order } from '../../models/order'
import { OrdersService } from '../../services/orders.service';
@Component({
  selector: 'app-order-modalconent',
  templateUrl: './order-modalconent.component.html',
  styleUrls: ['./order-modalconent.component.css']
})
export class OrderModalconentComponent implements OnInit {
  @Input() order: Order;
  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder, private orderService: OrdersService) { // <--- inject FormBuilder
    // this.createForm();
  }
  // stockForm: FormGroup;
  submitted = false;
  @Input() type = 'deliver'
  // convenience getter for easy access to form fields
  // get f() { return this.stockForm.controls; }
  // createForm() {
  //   this.stockForm = this.fb.group({
  //     firstName: [{ value: '', disabled: true }, Validators.required],
  //     addStock: ['', Validators.required]
  //   });
  // }
ngOnInit(){
  
}
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    // if (this.stockForm.invalid) {
      // return;
    // }
    // this.orderService.updateStock(Object.assign({ ...this.order }, { stock: this.order.total + this.stockForm.controls['addStock'].value }))
    //   .subscribe(
    //     (result) => {
    //       console.log(result);
    //       this.activeModal.close(result);
    //     }
    //   );
    console.log("success")
    alert('SUCCESS!! :-)')
  }
}
