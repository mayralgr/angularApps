import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private apiKey = 'AIzaSyCR2rXSNRHymSy8fgmOn8F_DDHl3c7QYoE';
  // crear nuevos usuarios
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
  // Login
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor(private http: HttpClient ) {
    this.leerToken();
  }

  userToken: string;

  logOut(): void
  {
    localStorage.removeItem('token');
  }

  // tslint:disable-next-line:typedef
  logIn( usuario: UsuarioModel )
  {
    const authData = {
      email: usuario.email,
      password: usuario.email,
      returnSecureToken: true
    };
    return this.http.post(
      `${ this.url }signInWithPassword?key=${ this.apiKey }`,
      authData).pipe(
        map( (resp: any) => {
          this.guardarToken(resp.idToken);
          return resp;
        })
      );
  }

  // tslint:disable-next-line:typedef
  nuevoUsuario( usuario: UsuarioModel )
  {
    const authData = {
      email: usuario.email,
      password: usuario.email,
      returnSecureToken: true
    };
    return this.http.post(
      `${ this.url }signUp?key=${ this.apiKey }`,
      authData).pipe(
        map( (resp: any) => {
          this.guardarToken(resp.idToken);
          return resp;
        })
      );
  }

  private guardarToken(idToken: string)
  {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);
    const hoy = new Date();
    hoy.setSeconds(3600);
    localStorage.setItem('expira', hoy.getTime().toString() );
  }

  private leerToken()
  {
    if ( localStorage.getItem('token') )
    {
      this.userToken = localStorage.getItem('token');
    }
    else
    {
      this.userToken = '';
    }
    return this.userToken;
  }

  estaAutenticado(): boolean
  {
     if (this.userToken.length > 2)
     {
       return false;
     }
     const expira = Number(localStorage.getItem('expira'));
     const expiraDate = new Date();
     expiraDate.setTime(expira);

     return expiraDate > new Date();
  }
}
