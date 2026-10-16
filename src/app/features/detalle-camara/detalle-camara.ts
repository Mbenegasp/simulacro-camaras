import { Component, inject, signal } from '@angular/core';
import { CameraService } from '../../services/camera-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Camera, CameraForm } from '../../model/camera';
import { FormularioCamara } from '../formulario-camara/formulario-camara';

@Component({
  selector: 'app-detalle-camara',
  imports: [FormularioCamara],
  templateUrl: './detalle-camara.html',
  styleUrl: './detalle-camara.css',
})
export class DetalleCamara {
  private readonly cameraService = inject(CameraService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  private readonly id = this.route.snapshot.paramMap.get('id')!;

  protected readonly camara = signal<Camera | undefined>(undefined);
  protected readonly isEditing = signal(false);

  ngOnInit() {
    this.cameraService.getById(this.id).subscribe({
      next: (rta) => {
        this.camara.set(rta);
      },
      error: () => {
        alert('Hubo un error de conexion con el servidor');
      },
    });
  }

  borrarCamara() {
    if (!confirm('Esta seguro que desea borrar la camara seleccionada?')) return;
    this.cameraService.delete(this.id).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: () => {
        alert('No se pudo borrar, se corto la conexion con el servidor');
      }
    })
  }

  toggleEdicion() {
    this.isEditing.update(v => !v);
  }

  guardarCamaraEditada(camara: CameraForm){
    if(!confirm('Desea guardar los cambios')) return;
    this.cameraService.update(camara, this.id).subscribe({
      next: (rta) => {
        alert('Camara guardada con exito');
        this.camara.set(rta);
        this.toggleEdicion();
      },
      error: () => {
        alert('Hubo un error al guardar la camara')
      }
    })
  }
}
