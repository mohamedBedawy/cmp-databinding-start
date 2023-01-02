import { Component, Input,ViewEncapsulation } from '@angular/core';
import { ServerElementModel } from '../Shared/Models/ServerElementModel.model';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation: ViewEncapsulation.None  // from core
})
export class ServerElementComponent {
  @Input('srvElement') element:ServerElementModel;
}
