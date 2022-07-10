import { Component, OnInit, OnDestroy, DoCheck } from '@angular/core';
import { Subscription } from 'rxjs';
import { Nfvo } from 'src/app/models/nfvo.class';
import { NfvoService } from 'src/app/services/nfvo.service';

@Component({
  selector: 'app-content-right',
  templateUrl: './content-right.component.html',
  styleUrls: ['./content-right.component.css']
})
export class ContentRightComponent implements OnInit, OnDestroy, DoCheck {
  private subcription: Subscription | undefined;
  public nfvo: Nfvo[] = [];
  public perPage: number = 4;
  public quantityPage: number = this.nfvo.length/this.perPage;
  public foo: number[] = [];

  constructor(private nfvoService: NfvoService) { }

  ngDoCheck(): void {

  }

  ngOnInit(): void {
    this.subcription = this.nfvoService.getAllNfvo().subscribe(data => {
      this.nfvo = data;

    });
  }

  ngOnDestroy(): void {
    if (this.subcription) {
      this.subcription.unsubscribe();
    }
  }

  onClick() {
    let perPage = this.perPage
    let quantityPage = Math.ceil(this.nfvo.length/perPage);
    for (let i = 1; i <= quantityPage; i++) {
      this.foo.push(i);
    }
  }

}
