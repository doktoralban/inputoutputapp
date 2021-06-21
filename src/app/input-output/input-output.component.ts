import { Component, OnInit , Input, Output, EventEmitter} from "@angular/core";

@Component({
  selector: "app-input-output",
  templateUrl: "./input-output.component.html",
  styleUrls: ["./input-output.component.css"]
})
export class InputOutputComponent implements OnInit {
  @Input() item = "";
  @Output() deleteRequest = new EventEmitter<string>();

  lineThrough = "";

  delete() {
    console.warn("Child says: emiting item deleteRequest with", this.item);
    this.deleteRequest.emit(this.item);
    this.lineThrough = this.lineThrough ? "" : "line-through";
  }
  constructor() { }

  ngOnInit(): void {
  }

}
