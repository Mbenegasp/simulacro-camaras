import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'catalogo'
    },
    {
        path: 'catalogo',
        loadComponent: () => import('./features/catalogo/catalogo')
        .then(m => m.Catalogo)
    },
    {
        path: 'detalle/:id',
        loadComponent: () => import('./features/detalle-camara/detalle-camara')
        .then(m => m.DetalleCamara)
    },
    {
        path: 'agregar',
        loadComponent: () => import('./features/agregar-camara/agregar-camara')
        .then(m => m.AgregarCamara)
    },
    {
        path: '**',
        redirectTo: 'catalogo'
    }
];
