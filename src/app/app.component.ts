import { Component } from '@angular/core';
import { ServerElementModel } from './Shared/Models/ServerElementModel.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements :ServerElementModel[] = [
    { name: 'New test server', content: 'New server 1', type: 'server' },
    { name: 'New test server', content: 'new server 2', type: 'server' },
  ];

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
