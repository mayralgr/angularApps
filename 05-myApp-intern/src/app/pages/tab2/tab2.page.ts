import { Component } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Lista } from 'src/app/models/lista.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor( public deseosService: DeseosService,
               private router: Router,
               private alertCtrl: AlertController )
  {

  }


  listaSeleccionada( lista: Lista )
  {
    this.router.navigateByUrl(`/tabs/tab2/agregar/${lista.id}`);
  }

  borrarLista( lista: Lista  )
  {
    this.deseosService.borrarLista(lista);
  }

}
