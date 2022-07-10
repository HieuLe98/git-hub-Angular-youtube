import { Component, OnInit } from '@angular/core';
import { LoggingService } from 'src/app/services/logging.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor(
    private _LoggingService: LoggingService
  ) { }

  ngOnInit(): void {
  }

  click() {
    this._LoggingService.logging();
  }


}
