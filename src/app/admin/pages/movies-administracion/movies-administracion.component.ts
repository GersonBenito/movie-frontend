import { Component } from '@angular/core';
import { Movie } from 'src/app/movie/interfaces/movie.interface';
import { MatDialog } from '@angular/material/dialog';
import * as dataRaw from '../../../data/data.json';
import { MovieModalComponent } from '../movie-modal/movie-modal.component';

@Component({
  selector: 'app-movies-administracion',
  templateUrl: './movies-administracion.component.html',
  styleUrls: ['./movies-administracion.component.scss']
})
export class MoviesAdministracionComponent {

  public movies: Movie[] = [];

  constructor( private dialog: MatDialog ){
    this.getData();
  }

  getData(): void{
    const { data }: any = ( dataRaw as any ).default;
    this.movies = data;
  }

  openDialog(accion: 'add' | 'update', movie?: Movie) {
    this.dialog.open(MovieModalComponent, {
      data: {
        accion,
        movie,
      },
      width: '600px',
      disableClose: true
    });
  }
}
