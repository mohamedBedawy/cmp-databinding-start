import { Component, Input, ViewEncapsulation, OnInit } from '@angular/core';
import { ServerElementModel } from '../Shared/Models/ServerElementModel.model';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation: ViewEncapsulation.None  // from core
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: ServerElementModel;

  constructor() {
    let date = new Date();
    let Miliseconds = date.getTime();
    console.log('from ServerElementComponent constrctor', Miliseconds);
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    let date = new Date();
    let Miliseconds = date.getTime();
    console.log('from ServerElementComponent', Miliseconds);
  }
}
