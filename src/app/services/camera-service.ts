import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Camera, CameraForm } from '../model/camera';

@Injectable({
  providedIn: 'root',
})
export class CameraService {
  private readonly http = inject(HttpClient);
  private readonly url = "http://localhost:3000/trousers";

  getAll() {
    return this.http.get<Camera[]>(this.url);
  }

  getById(id: string) {
    return this.http.get<Camera>(`${this.url}/${id}`);
  }

  add(camera : CameraForm){
    return this.http.post<Camera>(this.url, camera);
  }

  update(camera: CameraForm, id: string) {
    return this.http.patch<Camera>(`${this.url}/${id}`, camera);
  }

  delete(id: string){
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
