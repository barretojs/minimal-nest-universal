import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title;
  sub: Subscription;

  constructor(private readonly appService: AppService) {}

  ngOnInit() {
    this.sub = this.appService
      .getRoot()
      .subscribe(title => (this.title = title));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
