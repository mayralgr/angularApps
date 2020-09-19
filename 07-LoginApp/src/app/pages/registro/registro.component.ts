import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;
  recordarme = false;

  constructor(private authService: AuthService,
              private router: Router) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.usuario = new UsuarioModel();
  }

  onSubmit(form: NgForm): void
  {
    if ( form.invalid ){
      return;
    }
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere, por favor',
    });
    this.authService.nuevoUsuario(this.usuario)
    .subscribe(
      resp => {
        console.log(resp);
        Swal.close();
        this.router.navigateByUrl('/home');
      }, (err) => {
        console.log(err.error.error.message);
        Swal.fire({
          icon: 'error',
          title: 'Error al registrar',
          text: err.error.error.message,
        });
      }
    );

  }


}
