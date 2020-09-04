import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})

export class HeroeTarjetaComponent implements OnInit {

  // Con el @Input() le indicamos que el heroe viene del componente padre heroes
  @Input() heroe: any = {};
  // Con esto necesito saber el indice que tiene este elemento
  @Input() index: number;
  // Con el @Output() le estamos indicando que esto va a salir hacia fuera. Cuando utilizamos el Output hay que importar el Output y el EventEmitter
  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    // Con esto disparamos hacia fuera
    this.heroeSeleccionado = new EventEmitter();
   }

  ngOnInit() {
  }

  verHeroe() {
    this.router.navigate( [ '/heroe', this.index ] );
    // Estoy emitinedo un idex
    //this.heroeSeleccionado.emit( this.index );
  }

}
