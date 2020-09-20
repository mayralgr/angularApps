import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from '../../servicies/pais.service';
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {


  paises: any[] = [];
  usuario = {
    nombre: '',
    apellido: '',
    correo: '',
    pais: 'CRI',
    genero: 'M'
  };

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
    this.paisService.getPaises().subscribe(
      paises => {
        // console.log(paises);
        this.paises = paises;

        this.paises.unshift({
          nombre: '[Seleccione Pais]',
          codigo: '',
        });
      }
    );
  }

  guardar( forma: NgForm)
  {
    console.log(forma);
    if ( forma.invalid )
    {
      Object.keys(forma.controls).forEach(element => {
        forma.controls[element].markAsTouched();
        console.log(forma.controls[element]);
      });
      return;
    }

    console.log(forma.value);
  }

}
