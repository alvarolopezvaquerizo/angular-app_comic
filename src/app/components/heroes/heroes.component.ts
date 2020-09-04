import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe  } from '../../servicios/heroes.service';
// Importamos el modulo Router para hacer el redireccionamiento de cada heroe
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  // Aqui importamos el servicio de Heroes de esta forma (private _heroesService:HeroesService)
  // Aqui importamos el servicio de Router de esta forma (private router:Router)
  constructor( private _heroesService:HeroesService,
               private router: Router
               ) {

   }

  ngOnInit() {

      this.heroes = this._heroesService.getHeroes();

  }

  // Aqui creamos la funcion de ver cada Heroe que hagamos click como hemos programado en el archivo heroes.component.html
  verHeroe( idx: number ) {
    this.router.navigate( [ '/heroe', idx ] );
  }

}
