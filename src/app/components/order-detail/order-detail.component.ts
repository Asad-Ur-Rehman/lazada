import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../../models/order';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { OrdersService } from '../../services/orders.service';
import { ProductModalcontentComponent } from '../product-modalcontent/product-modalcontent.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  @Input() order: Order

  constructor(
    private route: ActivatedRoute,
    private orderService: OrdersService,
    private location: Location, private modalService: NgbModal) { }

    ngOnInit() {
      this.getOrder()
    }
  
    getOrder(): void {
      //+ converts string into int
      const id = +this.route.snapshot.paramMap.get('id');
      this.orderService.getOrder(id)
        .subscribe(order => this.order = order);
    }
    goBack(): void {
      this.location.back();
    }
}
