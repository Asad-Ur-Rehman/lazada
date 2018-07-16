import { BrowserModule , Title} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { AppRoutingModule } from './routes/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { ProductModalcontentComponent } from './components/product-modalcontent/product-modalcontent.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { MatRadioModule ,MatSelectModule, MatIconModule, MatTabsModule} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
// import { NgTableComponent } from './ng-table/ng-table.component';
import { CurrencyPipe } from '@angular/common';
import { OrderModalconentComponent } from './components/order-modalconent/order-modalconent.component';
// import { ProductModalcontentComponent } from './product-modalcontent/product-modalcontent.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductModalcontentComponent,
    ProductDetailComponent,
    OrdersComponent,
    OrderDetailComponent,
    ProductModalcontentComponent,
    OrderModalconentComponent
    // NgTableComponent
    // CurrencyPipe 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatCheckboxModule,
    MatSelectModule,
    NoopAnimationsModule,
    MatRadioModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  entryComponents: [
    ProductModalcontentComponent,
    OrderModalconentComponent
],
providers: [
  Title
],
 bootstrap: [AppComponent]
})
export class AppModule { }
