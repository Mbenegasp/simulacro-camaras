import { Component, inject } from '@angular/core';
import { CameraService } from '../../services/camera-service';
import { Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { CAMERATYPES } from '../../model/camera';

@Component({
  selector: 'app-catalogo',
  imports: [],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css',
})
export class Catalogo {
  private readonly cameraService = inject(CameraService);
  private readonly router = inject(Router);
  
  protected readonly camaras = toSignal(this.cameraService.getAll(), {
    initialValue: []
  });

  protected readonly cameraTypes = CAMERATYPES;

  verDetalle(id: string){
    this.router.navigate(['/detalle', id])
  }
}
