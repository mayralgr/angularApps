import { Component, OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy} from '@angular/core';

// tslint:disable-next-line:no-conflicting-lifecycle
@Component({
  selector: 'app-home',
  template: `
   <app-ng-style></app-ng-style>
   <app-css></app-css>
   <app-clases></app-clases>
    <p [appResaltado]="'orange'">
        Hola mundo
    </p>
    <app-ng-switch></app-ng-switch>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() {
    console.log('constructor');
   }

  ngOnInit(): void {

    console.log('OnInit');
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnChanges(): void
  {

    console.log('ngOnChanges');
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngDoCheck(): void
  {

    console.log('ngDoCheck');
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterContentChecked(): void
  {
    console.log('ngAfterContentChecked');
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterContentInit(): void
  {
    console.log('ngAfterContentInit');
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewChecked(): void
  {
    console.log('ngAfterViewChecked');
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit(): void
  {
    console.log('ngAfterViewInit');
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy(): void
  {
    console.log('ngOnDestroy');
  }


}
