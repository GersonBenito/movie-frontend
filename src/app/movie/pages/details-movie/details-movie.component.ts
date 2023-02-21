import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/services/auth.service';
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

  public logueado: boolean = false;

  constructor( 
    private aRouter: ActivatedRoute,
    private _authService: AuthService,
    private toastr: ToastrService,
  ){
    this.getDatailsMovie(this.aRouter.snapshot.params['id']);
    this._authService.$isLogger.subscribe({
      next: login =>{
        if(login){
          this.logueado = login;
        }
      }
    }) 
  }

  likeMovie(): void{
    if(this.logueado){
      this.like = this.like === false ? true : false;
    }else{
      this.toastr.info('Para realizar esta acion necesitas estar logueado', 'Inicio de sesion');
    }
  }

  getDatailsMovie(id: string){

    // TODO: cambiar
    const { data }: any = ( dataRaw as any ).default;
    const datos = data.filter((m: Movie) => m.id_pelicula === parseInt(id) );
    this.movie = datos[0];
    
  }

  comprarPelicula(){
    if(this.logueado){
      console.log('comprando -->', this.logueado);
    }else{
      this.toastr.info('Para realizar esta acion necesitas estar logueado', 'Inicio de sesion');
    }
  }

  alquilarMovie(){
    if(this.logueado){
      console.log('alquilando -->', this.logueado);
    }else{
      this.toastr.info('Para realizar esta acion necesitas estar logueado', 'Inicio de sesion');
    }
  }

}
