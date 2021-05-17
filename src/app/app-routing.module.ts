import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapPageComponent } from './pages/blue-flags-map/map-page/map-page.component';
import { ListPageComponent } from './pages/blue-flags/list-page/list-page.component';
import { InfoPageComponent } from './pages/info/info-page/info-page.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'map',
  pathMatch: 'full'
},{
  path: 'map',
  component: MapPageComponent
},{
  path: 'list',
  component: ListPageComponent
},{
  path: 'info',
  component: InfoPageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
