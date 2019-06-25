import { Component } from '@angular/core';
import { PathToRegexpService } from 'ngx-path-to-regexp';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(private ngxPathToRegepx: PathToRegexpService) {
    console.log(ngxPathToRegepx.pathToRegexp('/user/:id/:name', null, null));
  }
}
