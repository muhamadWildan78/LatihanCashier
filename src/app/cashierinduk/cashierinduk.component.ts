import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Cashier} from "../model/cashier.model";

@Component({
  selector: 'app-cashierinduk',
  templateUrl: './cashierinduk.component.html',
  styleUrls: ['./cashierinduk.component.css']
})
export class CashierindukComponent implements OnInit {
  formAdd!: FormGroup;
  sendMessage!: Cashier;
  constructor(private formBuild: FormBuilder) { }

  ngOnInit(): void {
    this.formAdd = this.formBuild.group({
      'id':[null],
      'sku':[null],
      'qty':[null],
      'price':[null],
      'jumlah':[null],
      'total':[null]
    })
  }

  simpan():void {
    let cshier = <Cashier>{};
    cshier.sku = this.formAdd.controls['sku'].value
    cshier.qty = this.formAdd.controls['qty'].value
    cshier.price = this.formAdd.controls['price'].value
    cshier.total = this.formAdd.controls['total'].value
    this.sendMessage = cshier;
    cshier.jumlah = cshier.qty*cshier.price
    }

  saveMessage($event: any): void {
    this.formAdd.controls['sku'].setValue($event.sku)
    this.formAdd.controls['qty'].setValue($event.qty)
    this.formAdd.controls['price'].setValue($event.price)
    this.formAdd.controls['jumlah'].setValue($event.jumlah)
    this.formAdd.controls['total'].setValue($event.total)
  }
}
