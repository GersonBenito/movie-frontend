import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { Movie } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() public movie: Movie = {
    id_pelicula: 0,
    titulo: '',
    descripcion: '',
    disponibilidad: true,
    imagen: '',
    fecha_actualizacion: '',
    precio_compra: 0,
    stock: 0
  }
  
  constructor(){

  }

}
