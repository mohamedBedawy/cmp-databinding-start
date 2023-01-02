import { Component, OnInit } from '@angular/core';
import { ServerElementModel } from './Shared/Models/ServerElementModel.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  serverElements :ServerElementModel[] = [
    { name: 'New test server', content: 'New server 1', type: 'server' },
    { name: 'New test server', content: 'new server 2', type: 'server' },
  ];
  element ={ name: 'New test server', content: 'New server 1', type: 'server' };
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // console.log('from AppComponent',new Date().toLocaleString())
    let date= new Date();
    let Miliseconds =date.getTime()
    console.log('from AppComponent',Miliseconds)
  }

  onServerAdded(serverData: ServerElementModel) {
    debugger
    this.serverElements.push({
      type: 'server',
      name: serverData.name,
      content: serverData.content,
    });
  }

  onBlueprintAdded(serverData: ServerElementModel) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.name,
      content: serverData.content,
    });
  }
}
