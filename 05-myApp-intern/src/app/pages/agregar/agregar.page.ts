import { Component, OnInit } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { ActivatedRoute } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';
import { ListaItem } from 'src/app/models/lista-item.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage {

  lista: Lista;
  nombreItem = '';
  constructor( private deseosService: DeseosService,
               private router: ActivatedRoute )
  {
    const id = this.router.snapshot.paramMap.get('listaId');
    this.lista = this.deseosService.obtenerLista(id);
  }

  agregarItem()
  {
    if ( this.nombreItem.length === 0 )
    {
      return ;
    }
    const nuevoItem = new ListaItem(this.nombreItem);
    this.lista.items.push(nuevoItem);
    this.nombreItem = '';
    this.deseosService.guardarStorage();
  }

  cambioCheck(item: ListaItem)
  {
    const pendientes = this.lista.items.filter(itemData => !itemData.completado ).length;
    if (pendientes === 0 )
    {
      this.lista.terminadaEn = new Date();
      this.lista.terminada = true;
    }
    else
    {
      this.lista.terminadaEn = null;
      this.lista.terminada = false;
    }
    this.deseosService.guardarStorage();

  }

  borrar(indice: number)
  {
    this.lista.items.splice(indice, 1);
    this.deseosService.guardarStorage();

  }

}
