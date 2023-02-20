export interface Movie {
    id_pelicula?:        number | string;
    titulo:              string;
    descripcion:         string;
    imagen:              string | ArrayBuffer;
    precio_compra:       number | string;
    disponibilidad:      boolean;
    stock:               number | string;
    fecha_actualizacion: string | Date;
}
