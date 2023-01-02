import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cockpit-child',
  templateUrl: './cockpit-child.component.html',
  styleUrls: ['./cockpit-child.component.css']
})
export class CockpitChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let date= new Date();
    let Miliseconds =date.getTime()
    console.log('from CockpitChildComponent',Miliseconds)
  }

}
