import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { ServerElementModel } from '../Shared/Models/ServerElementModel.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  @Output() ServerCreated = new EventEmitter<ServerElementModel>();
  @Output() BlueprintCreated = new EventEmitter<ServerElementModel>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('newServerName') serverNameInput: ElementRef;

  constructor() {}

  ngOnInit(): void {
    // let date= new Date();
    // let Miliseconds =date.getTime()
    // console.log('from CockpitComponent',Miliseconds)

  }

  onAddServer(data: ServerElementModel) {
    // let param: ServerElementModel = {
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent,
    // };
    data.name = this.serverNameInput.nativeElement.value;
    this.ServerCreated.emit(data);
  }

  onAddBlueprint(data: ServerElementModel) {
    // let param: ServerElementModel = {
    //   type: 'Blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent,
    // };
    this.BlueprintCreated.emit(data);
  }
}
