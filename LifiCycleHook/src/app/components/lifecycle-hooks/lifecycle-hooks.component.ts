import { Component, OnInit, OnDestroy, OnChanges, Input, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.css']
})
export class LifecycleHooksComponent implements OnInit, OnChanges, OnDestroy {
  @Input('total') total: number = 0;
  public products: any[] = [];
  public title: string = 'LifeCycle Hooks'
  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.products = [
      {
        id: 1,
        name: "Iphone7",
        status: true
      }
    ]
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
    console.log(changes);

  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

}
