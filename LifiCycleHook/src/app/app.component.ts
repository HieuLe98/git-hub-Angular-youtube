import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges{
  title = 'App-Component';
  public total: number = 0;
  public isShowing: boolean = false;
  constructor() {
    console.log('contrucstor');
  }
  ngOnChanges(changes: SimpleChanges): void {

  }



  onToggle() {
    this.isShowing = !this.isShowing;
  }

  onTotal(a:any, b:any) {
    this.total = a+b;
  }
}
