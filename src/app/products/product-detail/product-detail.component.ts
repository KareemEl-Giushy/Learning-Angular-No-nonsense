import { Component, Input, Output, EventEmitter, ViewEncapsulation, ChangeDetectionStrategy, OnInit, OnChanges, SimpleChanges, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent implements OnInit, OnChanges {
  @Input() proD = "kareem";
  @Output() selected: EventEmitter<string> = new EventEmitter();

  constructor() {
    console.log(`${this.proD}`); // prints out "kareem" because no values have been set yet
  }
  ngOnInit(): void {
    console.log(`On init: ${this.proD}`); //print an empty string that was passed to the component using input directive
  }

  ngOnChanges(changes: SimpleChanges): void {
    const product = changes['proD'];
    if(!product.isFirstChange()){
      const oldValue = product.previousValue;
      const newValue = product.currentValue;
      console.log(`Value was changed from ${oldValue} to ${newValue}`);
    }
  }

  addItem() {
    this.selected.emit(this.proD);
  }
  get productName(): string {
    console.log(`Get ${this.proD}`);
    return this.proD;
  }
}
