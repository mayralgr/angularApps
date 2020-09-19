import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: [
  ]
})
export class ClasesComponent implements OnInit {

  alert = 'alert-danger';
  loading = false;
  // tslint:disable-next-line:ban-types
  propiedades = {
    danger: false,
  };

  constructor() { }

  ngOnInit(): void {
  }

  ejecutar(): void
  {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
}
