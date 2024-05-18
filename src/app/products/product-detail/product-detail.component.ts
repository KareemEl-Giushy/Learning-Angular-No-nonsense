import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ProductDetailComponent {
  @Input() proD = "kareem";
  @Output() selected: EventEmitter<string> = new EventEmitter();
  addItem() {
    this.selected.emit(this.proD);
  }
}
