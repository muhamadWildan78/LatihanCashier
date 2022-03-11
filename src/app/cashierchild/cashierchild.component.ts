import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Cashier} from "../model/cashier.model";

@Component({
  selector: 'app-cashierchild',
  templateUrl: './cashierchild.component.html',
  styleUrls: ['./cashierchild.component.css']
})
export class CashierchildComponent implements OnInit, OnChanges {
  @Output() sendToInduk = new EventEmitter<Cashier>()

  @Input() message!: Cashier;
  listCashier!: Cashier[]
  total: number=0;

  constructor() { }

  ngOnInit(): void {
  }

  edit(idx: number): void{
    this.sendToInduk.emit(this.listCashier[idx])
  }

  ngOnChanges(changes: SimpleChanges) {
    if(this.listCashier){
      this.listCashier.push(this.message)
      for (let i =0; 1<this.listCashier.length; i++){
        this.total += this.listCashier[i].jumlah
      }
    }else{
      if(this.message){
        this.listCashier = [this.message]
      }
    }
  }
}
