import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SocioService } from 'src/app/service/socio.service';
import { Socio } from 'src/app/models/socio';
import { MatDialog } from '@angular/material/dialog';
import { MensajeConfirmacionComponent } from '../shared/mensaje-confirmacion/mensaje-confirmacion.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-socio',
  templateUrl: './list-socio.component.html',
  styleUrls: ['./list-socio.component.css']
})
export class ListSocioComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'apellidos', 'numSocio', 'dni', 'telefono', 'sexo', 'acciones']; //columnas de la tabla
  dataSource = new MatTableDataSource<Socio>(); //almacenamos datos de la tabla
  listSocio!: Socio[]; //creamos lista de persona que va a ser un array de Socio

  //para que el componente padre pueda acceder a ordenar
  @ViewChild(MatPaginator) paginator!: MatPaginator; //paginacion
  @ViewChild(MatSort) sort!: MatSort; //ordenar

  //usamos servicio creado
  constructor(private socioService: SocioService, public dialog: MatDialog, public snackBar: MatSnackBar) { }

  ngOnInit(): void {
    }


  ngAfterViewInit() {
    this.cargarSocios(); //cuando se inicializa el componente ejecuta el método

  }

  //filtro
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //creamos metodo para cargar la lista de socios
  cargarSocios() {
    this.listSocio = this.socioService.getSocios();
    this.dataSource = new MatTableDataSource(this.listSocio); //dataSource lo queremos llenar con todo las socios
    this.dataSource.sort = this.sort; //ordenar
    this.dataSource.paginator = this.paginator; //paginacion
    this.paginator._intl.itemsPerPageLabel = 'Items por pagina'; //paginacion

  }

  //metodo para eliminar socios. Le pasamos el index
  eliminarSocio(index: number)
  {
    //mostramos dialogo de confirmacion
    const dialogRef = this.dialog.open(MensajeConfirmacionComponent, {
      width: '350px',
      data: { mensaje: '¿Esta seguro que desea eliminar el socio?' },
    });

      //cuando se cierra el dialogo ejecutamos el metodo
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'aceptar') {//si el usuario hace click en aceptar
        this.socioService.eliminarSocio(index); //ejecutamos el metodo de eliminar
        this.cargarSocios(); //cargamos la tabla de nuevo
        this.snackBar.open('El socio ha sido eliminada con éxito!','', { duration: 3000}); //mensaje de exito
      }
    });

  }

}
