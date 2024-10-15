import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SolucionesComponent } from './pages/soluciones/soluciones.component';
import { SectoresComponent } from './pages/sectores/sectores.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

export const routes: Routes = [

    {
        path: '',
        component: HomeComponent,
        title: 'Inicio',
      },
      {
        path: 'soluciones',
        component: SolucionesComponent,
        title: 'Soluciones',
      },
      {
        path: 'sectores',
        component: SectoresComponent,
        title: 'Sectores',
      },
      {
        path: 'contacto',
        component: ContactoComponent,
        title: 'Contacto',
      },
];
