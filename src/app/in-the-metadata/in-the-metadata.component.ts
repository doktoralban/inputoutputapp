import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-in-the-metadata',
  templateUrl: './in-the-metadata.component.html',
  styleUrls: ['./in-the-metadata.component.css'],
  inputs: ['clearanceItem'],
  outputs: ['buyEvent']
})
export class InTheMetadataComponent implements OnInit {

  buyEvent = new EventEmitter<string>();
  clearanceItem = '';

  buyIt() {
    console.warn('Child says: emiting buyEvent with', this.clearanceItem);
    this.buyEvent.emit(this.clearanceItem);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
