// MODULOS------------
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';

// COMPONENTES---------
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { BannerComponent } from './component/banner/banner.component';
import { CarrouselComponent } from './component/carrousel/carrousel.component';
import { PartnerComponent } from './component/partner/partner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './component/footer/footer.component';
import { NovedadesComponent } from './component/novedades/novedades.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { GaleriaImagenesComponent } from './component/galeria-imagenes/galeria-imagenes.component';
import { HistoriaComponent } from './historia/historia.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    CarrouselComponent,
    PartnerComponent,
    FooterComponent,
    NovedadesComponent,
    InicioComponent,
    GaleriaImagenesComponent,
    HistoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
