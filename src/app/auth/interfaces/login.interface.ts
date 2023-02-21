export interface Loging {
    data:    Usuario;
    mensaje: string;
}

export interface Usuario {
    id_usuario ?:    number;
    id_rol:         number;
    nombre_usuario: string;
    email:          string;
    password?:       string;
}

export interface Sesion {
    nombre_usuario: string;
    password: string;
}
