import { Component, OnInit } from '@angular/core';
import {Order} from '../../models/order';
import {OrdersService} from '../../services/orders.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderModalconentComponent } from '../order-modalconent/order-modalconent.component';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  private _resolve: (result?: any) => void;
  private _reject: (reason?: any) => void;
  selected = '5';
  closeResult: string;
  page = 1;
  pageSize = +this.selected;
  start = 0;
  end = this.pageSize;
  orders: Order[] = [];
  constructor(
    private orderService: OrdersService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.getOrders();
  }

  getOrders(): void {
    this.orderService.getOrders()
      .subscribe((data: Order[]) => {this.orders = data;
      console.log(data)})
  }

  numberOfEntriesChange(): void {
    this.pageSize = +this.selected;
    this.loadTablePage();
  }

  loadTablePage(): void {
    this.start = (this.pageSize * this.page) - this.pageSize;
    this.end = this.start + this.pageSize;
  }

  openModal(newOrder: Order, type : string) {
    const modalRef = this.modalService.open(OrderModalconentComponent);
    modalRef.componentInstance.order = newOrder;
    modalRef.componentInstance.type = type;
    console.log(type)
    modalRef.result = new Promise((resolve, reject) => {
      this._resolve = resolve;
      this._reject = reject;
    });
    modalRef.result.then((newData) => {
      console.log('NEW DATA', newData);
      this.getOrders();
    })
  }
}
