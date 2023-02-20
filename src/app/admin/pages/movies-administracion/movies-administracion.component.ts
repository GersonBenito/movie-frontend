import { Component } from '@angular/core';
import { Movie } from 'src/app/movie/interfaces/movie.interface';
import * as dataRaw from '../../../data/data.json';

@Component({
  selector: 'app-movies-administracion',
  templateUrl: './movies-administracion.component.html',
  styleUrls: ['./movies-administracion.component.scss']
})
export class MoviesAdministracionComponent {

  public movies: Movie[] = [];

  constructor(){
    this.getData();
  }

  getData(): void{
    const { data }: any = ( dataRaw as any ).default;
    this.movies = data;
    console.log(this.movies);
    
  }
}
