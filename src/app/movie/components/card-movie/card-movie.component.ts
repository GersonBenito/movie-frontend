import { Component } from '@angular/core';
import * as dataRaw from '../../../data/data.json';
import { Movie } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.scss']
})
export class CardMovieComponent {

  public movies: Movie[] = [];

  constructor(){
    this.getData();
  }

  getData(){
    const { data }: any = ( dataRaw as any ).default;
    this.movies = data;
  }
}
