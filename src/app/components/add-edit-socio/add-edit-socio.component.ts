import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Socio } from 'src/app/models/socio';
import { SocioService } from 'src/app/service/socio.service';

@Component({
  selector: 'app-add-edit-socio',
  templateUrl: './add-edit-socio.component.html',
  styleUrls: ['./add-edit-socio.component.css'],
  providers: [{
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'primary' },
}]
})
export class AddEditSocioComponent implements OnInit {

  idSocio: any;
  accion = 'Crear';

  myForm: FormGroup; //variable de tipo formgroup (angular form)

  constructor(private fb: FormBuilder,
    private socioService: SocioService,
    private route: Router,
    private snackBar: MatSnackBar,
    private aRoute: ActivatedRoute) {
    this.myForm = this.fb.group({
      //enalazamos con los datos proporcianados en el formulario y los validamos
      nombre: ['', [Validators.required, Validators.minLength(3)]], //requerido y m-inimo 3 caracteres
      apellidos: ['', [Validators.required, Validators.minLength(3)]],
      numSocio: ['', [Validators.required, Validators.pattern('^[0-9]+$')]], //requerido, menor que 125 y tiene que ser un numero
      dni: ['', [Validators.required, Validators.pattern('^[0-9]{8}[A-Z]$')]], //requerido, 8 numeros y una letra
      telefono: ['', [Validators.required, Validators.minLength(9), Validators.pattern('^[0-9]+$')]],
      sexo: ['', [Validators.required]] //requerido
    });
    const idParam = 'id';
    this.idSocio = this.aRoute.snapshot.params[idParam]; //ontenemos la id del socio
  }

  ngOnInit(): void {
    if (this.idSocio !== undefined) //si existe un id hay información para editar, sacamos componente editar
    {
      this.accion = 'Editar';
      this.getSocio();
    }
  }

  //metodo para agregar el socio al listado
  guardarSocio(){

    const socio: Socio = {
      //atrapamos los datos del formulario
      nombre: this.myForm.get('nombre')!.value,
      apellidos: this.myForm.get('apellidos')!.value,
      numSocio: this.myForm.get('numSocio')!.value,
      dni: this.myForm.get('dni')!.value,
      telefono: this.myForm.get('telefono')!.value,
      sexo: this.myForm.get('sexo')!.value

    };

    //preguntamos si es editar o guardar
    if (this.idSocio !== undefined){
      this.editarSocio(socio);
    } else {
      this.agregarSocio(socio);
    }

  }

  agregarSocio(socio: Socio){

    if (this.socioService.agregarSocio(socio) == true)
    {
      this.snackBar.open('El número de socio debe ser único','', { duration: 3000});
    }
    else{

      this.snackBar.open('El socio ha sido agregada con éxito!','', { duration: 3000});
      this.route.navigate(['/']); //dSociode agregar volvemos a la raiz
    }

    //this.socioService.agregarSocio(socio);


  }

  editarSocio(socio: Socio){
    this.socioService.editarSocio(socio, this.idSocio);
    this.snackBar.open('La socio ha sido editada con éxito!','', { duration: 3000});
    this.route.navigate(['/']); //despues de agregar volvemos a la raiz
  }
  //metodo para obtener  socio
  getSocio(){
    const socio: Socio = this.socioService.getSocio(this.idSocio);
    //ponemos la informacion en los campos
    this.myForm.patchValue({
      nombre: socio.nombre,
      apellidos: socio.apellidos,
      numSocio: socio.numSocio,
      dni: socio.dni,
      telefono: socio.telefono,
      sexo: socio.sexo
    })

  }

}
