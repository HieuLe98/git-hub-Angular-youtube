import { Component, OnInit } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { CustomerService } from 'src/app/customer.service';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customerList: any = [];
  constructor(
    private customerService: CustomerService,
    private dialog: MatDialogModule
    ) { }

  ngOnInit(): void {
    this.customerService.getAllCustomer().subscribe(data => {
      console.log(data);
      this.customerList = data;
    });

  }

  openDialogDelete(id: any) {
    this.customerService.getCustomerById(id).subscribe(data => {
      console.log(data);
    })
  }

}
