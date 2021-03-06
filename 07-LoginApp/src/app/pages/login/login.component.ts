import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel;
  recordarme = false;

  constructor(private authService: AuthService,
              private router: Router) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.usuario = new UsuarioModel();
    if (localStorage.getItem('email') )
    {
      this.usuario.email = localStorage.getItem('email');
      this.recordarme = true;
    }
  }

  login( formulario: NgForm ): void{
    if ( formulario.invalid ){
      return;
    }

    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere, por favor',
    });
    Swal.showLoading();
    this.authService.logIn(this.usuario).subscribe(
      resp => {
        console.log(resp);
        Swal.close();
        if (this.recordarme)
        {
          localStorage.setItem('email', this.usuario.email);
        }
        this.router.navigateByUrl('/home');
      }, (err) => {
        console.log(err.error.error.message);
        Swal.fire({
          icon: 'error',
          title: 'Error al autenticar',
          text: err.error.error.message,
        });
      }
    );
  }
}
