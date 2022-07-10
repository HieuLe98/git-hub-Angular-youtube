import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Nfvo } from 'src/app/models/nfvo.class';
import { NfvoService } from 'src/app/services/nfvo.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {
  private subcription: Subscription | undefined;
  public nfvo: Nfvo[] = [];
  constructor(private nfvoService: NfvoService) { }

  ngOnInit(): void {
    this.subcription = this.nfvoService.getAllNfvo().subscribe(data => {
      this.nfvo = data;
      this.postName();
      this.postChip();
      this.postDrive();
      this.postRam();
      this.postMonitor();
      });
  }

  ngOnDestroy(): void {
    if (this.subcription) {
      this.subcription.unsubscribe();
    }
  }

  postName() {
    let arrowName = document.getElementsByClassName('arrow-name');
      for (let i = 0; i < arrowName.length; i++) {
        arrowName[i].innerHTML = this.nfvo[i].name;
      }
  }
  postChip() {
    let arrowChip = document.getElementsByClassName('text-chip');
      for (let i = 0; i < arrowChip.length; i++) {
        arrowChip[i].innerHTML = this.nfvo[i].chip;
      }
  }
  postDrive() {
    let arrowDrive = document.getElementsByClassName('text-drive');
      for (let i = 0; i < arrowDrive.length; i++) {
        arrowDrive[i].innerHTML = this.nfvo[i].drive;
      }
  }
  postRam() {
    let arrowRam = document.getElementsByClassName('text-ram');
      for (let i = 0; i < arrowRam.length; i++) {
        arrowRam[i].innerHTML = this.nfvo[i].ram;
      }
  }
  postMonitor() {
    let arrowMonitor = document.getElementsByClassName('text-monitor');
      for (let i = 0; i < arrowMonitor.length; i++) {
        arrowMonitor[i].innerHTML = this.nfvo[i].monitor;
      }
  }
}
