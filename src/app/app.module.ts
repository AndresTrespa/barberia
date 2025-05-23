import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module'; //importa el módulo de rutas
import { AppComponent } from './app.component';
import { ServicioComponent } from './page/servicio/servicio.component';
import { NosotrosComponent } from './page/nosotros/nosotros.component';
import { ContactoComponent } from './page/contacto/contacto.component';
import { ProductosComponent } from './page/productos/productos.component';
import { InicioComponent } from './page/inicio/inicio.component';
import { NavbarComponent } from './componente/navbar/navbar.component';
import { FooterComponent } from './componente/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ServicioComponent,
    NosotrosComponent,
    ContactoComponent,
    ProductosComponent,
    InicioComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
