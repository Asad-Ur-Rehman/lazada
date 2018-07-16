import { Component } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public constructor (private titleService: Title ){}
  title = 'LAZADA';
  userName= 'Asad Rehman'
  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

}