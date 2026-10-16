import { Component, inject, output, input } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  RequiredValidator,
  Validators,
} from '@angular/forms';
import { CameraType, CAMERATYPES, Camera, CameraForm } from '../../model/camera';

@Component({
  selector: 'app-formulario-camara',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-camara.html',
  styleUrl: './formulario-camara.css',
})
export class FormularioCamara {
  private readonly fb = inject(NonNullableFormBuilder);

  protected readonly form = this.fb.group({
    modelName: ['', Validators.required],
    cameraType: this.fb.control<CameraType | string>('', Validators.required),
    resolution: ['', Validators.required],
    stock: [0, [Validators.required, Validators.min(0)]],
    notes: ['', Validators.maxLength(200)],
    inOffer: [false],
  });

  protected readonly cameraTypes = CAMERATYPES;

  readonly submitted = output<CameraForm>();

  submit() {
    if (this.form.invalid) return;
    this.submitted.emit(this.form.getRawValue() as CameraForm);
  }

  readonly camera = input<Camera>();

  ngOnInit() {
    const c = this.camera();
    if (c) {
      this.form.patchValue(c);
    }
  }

  clean(){
    this.form.reset();
  }
}
