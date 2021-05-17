import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LeafletMapComponent } from './pages/blue-flags-map/leaflet-map/leaflet-map.component';
import { MapPageComponent } from './pages/blue-flags-map/map-page/map-page.component';
import { CoreModule } from './core/core.module';
import { InfoPageComponent } from './pages/info/info-page/info-page.component';
import { ListPageComponent } from './pages/blue-flags/list-page/list-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LeafletMapComponent,
    MapPageComponent,
    InfoPageComponent,
    ListPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeafletModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
