import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.css']
})
export class ShopDetailsComponent implements OnInit {
  public proId: string = '';
  constructor(private routers: ActivatedRoute) { }

  ngOnInit(): void {
    this.proId = this.routers.snapshot.params['id'];
  }

}
