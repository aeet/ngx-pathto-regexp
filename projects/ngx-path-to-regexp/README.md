# What

Turn a path string such as `/user/:name` into a regular expression

# Where from

https://github.com/pillarjs/path-to-regexp


# NgxPathToRegexp

https://github.com/ferried/NgxPathToRegexp

# How To Use

```npm
npm install ngx-path-to-regexp@latest
```

```ts
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
```