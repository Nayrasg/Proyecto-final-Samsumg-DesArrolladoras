import { Injectable } from '@angular/core';
import { Socio } from '../models/socio';

@Injectable({
  providedIn: 'root'
})
export class SocioService {

  //creamos lista de sociod de tipo Socios que es un array
  listSocio: Socio[] = [ //creamos objetos
    {
      nombre: 'Violeta', apellidos: 'Ruiz Gomez', numSocio: 3267, dni: '54081234F', telefono: 922314567, sexo: 'Mujer'

    },

    {
      nombre: 'Pedro', apellidos: 'Lopez Garcia', numSocio: 5034, dni: '12345678H', telefono: 670568934, sexo: 'Hombre'

    },
    {
      nombre: 'Sonia', apellidos: 'Gomez Perez', numSocio: 1992, dni: '12345679P', telefono: 657231209, sexo: 'Otro'

    }

  ];

  constructor() { }

    //metodo devolvemos el array Socio
  getSocios () {
    return this.listSocio.slice();
  }

  //metodo para eliminar socio
  eliminarSocio(index:number) {
    this.listSocio.splice(index, 1); /*elimina el socio, le decimos que tiene que borrar apartir
    de index (numero de la columna a borrar) y elimine un elemnto*/
  }

  //metodo para almacenar socio
  agregarSocio(socio: Socio){

    for(var i = 0; i < this.listSocio.length; i++) {
      if (this.listSocio[i].numSocio == socio.numSocio) {
          return true;

      }
      else{
        this.listSocio.push(socio);
        return false;
      }

    }
    return false;

  }

  //metodo para devolver el socio usando el id
  getSocio(index: number)
  {
    return this.listSocio[index];
  }
  //metido para editar socio
  editarSocio(socio: Socio, index: number){
    this.listSocio[index].nombre = socio.nombre;
    this.listSocio[index].apellidos = socio.apellidos;
    this.listSocio[index].numSocio = socio.numSocio;
    this.listSocio[index].dni = socio.dni;
    this.listSocio[index].telefono = socio.telefono;
    this.listSocio[index].sexo = socio.sexo;

  }




}
