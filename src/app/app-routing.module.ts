import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ServicioComponent } from './components/servicio/servicio.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  { path:'contacto', component: ContactoComponent},
  { path: 'productos', component: ProductosComponent},
  { path: 'servicio', component: ServicioComponent},
  { path: '', component: InicioComponent },
  { path: 'nosotros', component: NosotrosComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }, //Redirección por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],// Carga las rutas en la app
  exports: [RouterModule]// Permite usarlas en otros módulos
})
export class AppRoutingModule { }
