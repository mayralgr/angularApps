import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  forma: FormGroup;
  constructor(private formBuilder: FormBuilder) {
      this.crearFormulario();
      this.cargarData();
   }

  ngOnInit(): void {
  }

  get nombreNoValido()
  {
    return this.forma.get('nombre').invalid && this.forma.get('nombre').touched;
  }

  get apellidoeNoValido()
  {
    return this.forma.get('apellido').invalid && this.forma.get('apellido').touched;
  }

  get correoNoValido()
  {
    return this.forma.get('correo').invalid && this.forma.get('correo').touched;
  }

  get distritoNoValido()
  {
    return this.forma.get('direccion.distrito').invalid && this.forma.get('direccion.distrito').touched;
  }

  get ciudadNoValido()
  {
    return this.forma.get('direccion.ciudad').invalid && this.forma.get('direccion.ciudad').touched;
  }

  crearFormulario()
  {
    this.forma = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      apellido: ['', Validators.required],
      correo: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a -z0-9.-]+\.[a-z]{2,3}$')]],
      direccion: this.formBuilder.group({
        distrito: ['', Validators.required],
        ciudad: ['', Validators.required],
      }),
      pasatiempos: this.formBuilder.array([
        [], [], [],
      ])
    });
  }

  guardar()
  {
    console.log(this.forma);
    if ( this.forma.invalid )
    {
      Object.keys(this.forma.controls).forEach(element => {
        this.forma.controls[element].markAsTouched();
        console.log(this.forma.controls[element]);
        const control = this.forma.controls[element];
        if ( control  instanceof FormGroup)
        {
          Object.keys(control.controls).forEach(ctrl => {
            // console.log(ctrl);
            control.controls[ctrl].markAsTouched();
          });
        }
      });
      return;
    }
    this.forma.reset({
      nombre: '',
    });
  }

  cargarData()
  {
    this.forma.setValue({
      nombre: 'Juan',
      apellido: 'Perez',
      correo: 'jprm@gmail.com',
      direccion: {
        distrito: 'cdmx',
        ciudad: 'cdmx',
      }
    });
  }

}
