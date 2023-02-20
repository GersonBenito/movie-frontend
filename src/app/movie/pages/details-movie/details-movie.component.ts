import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as dataRaw from '../../../data/data.json';
import { Movie } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-details-movie',
  templateUrl: './details-movie.component.html',
  styleUrls: ['./details-movie.component.scss']
})
export class DetailsMovieComponent {

  public like: boolean = false;

  public movie: Movie = {
    id_pelicula: 0,
    titulo: '',
    descripcion: '',
    disponibilidad: true,
    imagen: '',
    fecha_actualizacion: '',
    precio_compra: 0,
    stock: 0
  }

  constructor( private aRouter: ActivatedRoute ){
    this.getDatailsMovie(this.aRouter.snapshot.params['id']);
  }

  likeMovie(): void{
    this.like = this.like === false ? true : false;
  }

  getDatailsMovie(id: string){

    // TODO: cambiar
    const { data }: any = ( dataRaw as any ).default;
    const datos = data.filter((m: Movie) => m.id_pelicula === parseInt(id) );
    this.movie = datos[0];
    
  }

  comprarPelicula(){
    console.log('comprar -->', this.movie);
    
  }

  alquilarMovie(){
    console.log('alquilar -->', this.movie);
    
  }

}
