import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Movie } from 'src/app/movie/interfaces/movie.interface';
import { MAT_DIALOG_DATA , MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-modal',
  templateUrl: './movie-modal.component.html',
  styleUrls: ['./movie-modal.component.scss']
})
export class MovieModalComponent {

  public imagenesAceptados: string = '.png, .jpg, jpeg';
  public file: File | any;
  public seleccionado: boolean = false;
  public input: any;
  public imagenSeleccionado: string | ArrayBuffer | null = '';
  public imagenForm: boolean = true;

  public formPelicula = this._formBuilder.group({
    titulo: [ '', Validators.required],
    descripcion: ['', Validators.required ],
    imagen: ['', Validators.required ],
    precio_compra: ['', Validators.required ],
    disponibilidad: [true, Validators.required],
    stock: ['', Validators.required ],
  });

  constructor(
    private _formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<MovieModalComponent>,
  ){

    this.data.accion === 'update' && this.getDatos();

  }

  seleccionarImagen(){
    this.input = document.getElementById("subir-imagen") as HTMLInputElement;

    this.input.onchange = () =>{
      
      if(this.input.files?.length !== undefined){
        this.file = this.input.files[0];
        this.seleccionado = true;
        this.imagenBase64(this.file);
      }
 
    }

    this.input.click();
  }

  removerImagen(){
    this.input.value = '';
    this.seleccionado = false;
    this.imagenSeleccionado = '';
    // actualizar la llave imagen del formulario
    this.formPelicula.patchValue({
      imagen: ''
    });
  }

  imagenBase64(file: File){
    let render = new FileReader();
    render.readAsDataURL(file);
    render.onloadend = () =>{
        this.imagenSeleccionado = render.result;
    }
  }

  agregarPelicula(){

    const movie: Movie = {
      titulo: this.formPelicula.value.titulo || '',
      descripcion: this.formPelicula.value.descripcion || '',
      disponibilidad: this.formPelicula.value.disponibilidad || false,
      fecha_actualizacion: new Date(),
      imagen: this.imagenSeleccionado || '',
      precio_compra: this.formPelicula.value.precio_compra || 0,
      stock: this.formPelicula.value.precio_compra || 0,
    }

    console.log(movie);
    
  }

  closeDialog(): void{
    this.dialogRef.close();
  }

  getDatos(){
    const { movie } = this.data;
  
    // const imagenUpdate: string = movie.imagen;
    this.imagenSeleccionado = movie.imagen;

    this.formPelicula.patchValue({
      titulo: movie.titulo,
      descripcion: movie.descripcion,
      imagen: movie.imagen,
      precio_compra: movie.precio_compra,
      disponibilidad: movie.disponibilidad,
      stock: movie.stock,
    });

  }

  mostrarImagenForm(){
    this.imagenForm = false;
    this.formPelicula.patchValue({
      imagen: '',
    })
  }

}
