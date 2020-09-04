import { Component } from '@angular/core';
// Importamos el ActivatedRoute para que se active las rutas
import { ActivatedRoute } from '@angular/router';
// Importamos HeroesService que es el servicio creado
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  // Variable local para mostrar en el template
  heroe:any = {};

  constructor( private activatedRoute: ActivatedRoute,
               private _heroesService: HeroesService
    ) {

    this.activatedRoute.params.subscribe( params => {

      this.heroe = this._heroesService.getHeroe( params['id'] );

    });

  }

}
