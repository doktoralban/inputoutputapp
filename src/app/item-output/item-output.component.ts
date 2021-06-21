import { Component, OnInit, Output, EventEmitter } from "@angular/core";


@Component({
  selector: "app-item-output",
  templateUrl: "./item-output.component.html",
  styleUrls: ["./item-output.component.css"]
})
export class ItemOutputComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<string>();

  @Output() outEkleEvent = new EventEmitter<number>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);


  }

  addOutEkle(value: number) { 
    this.outEkleEvent.emit(value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
