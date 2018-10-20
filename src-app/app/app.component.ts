import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: any;

  constructor(private readonly appService: AppService) {}

  ngOnInit() {
    this.appService.getRoot().subscribe(resp => {
      this.title = resp;
    });
  }
}
