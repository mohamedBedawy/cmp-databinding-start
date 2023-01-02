import {
  Component,
  Input,
  ViewEncapsulation,
  OnInit,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ElementRef,
  ContentChild,
} from '@angular/core';
import { ServerElementModel } from '../Shared/Models/ServerElementModel.model';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation: ViewEncapsulation.None  // from core
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input('srvElement') element: ServerElementModel;

  @ViewChild('') viewchildElement:ElementRef;
  @ContentChild('') contentchildElement:ElementRef;
  constructor() {
    let date = new Date();
    let Miliseconds = date.getTime();
    console.log('constructor ServerElementComponent', Miliseconds);
  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('ngOnChanges');
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // let date = new Date();
    // let Miliseconds = date.getTime();
    // console.log('from ServerElementComponent', Miliseconds);
    console.log('ngOnInit');
    console.log('viewchildElement',this.viewchildElement);
    console.log('contentchildElement',this.contentchildElement);
  }


  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log('ngAfterContentInit');
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log('ngAfterViewInit');

  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log('ngDoCheck');

  }
  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log('ngAfterContentChecked');

  }
  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    console.log('ngAfterViewChecked');

  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('ngOnDestroy');

  }
}
