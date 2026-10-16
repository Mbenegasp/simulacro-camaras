import { Component, inject } from '@angular/core';
import { FormularioCamara } from '../formulario-camara/formulario-camara';
import { CameraService } from '../../services/camera-service';
import { Router } from '@angular/router';
import { CameraForm } from '../../model/camera';

@Component({
  selector: 'app-agregar-camara',
  imports: [FormularioCamara],
  templateUrl: './agregar-camara.html',
  styleUrl: './agregar-camara.css',
})
export class AgregarCamara {
  private readonly cameraService = inject(CameraService);
  private readonly router = inject(Router);

  guardarCamara(camara: CameraForm){
    this.cameraService.add(camara).subscribe({
      next: () => {
        alert('Camara guardada con exito');
        this.router.navigate(['/']);
      },
      error: () => {
        alert('La camara no pudo guardarse')
      }
    })
  }
}
