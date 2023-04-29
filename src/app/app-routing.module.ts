import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetComponent } from './set/set.component';
import { MapComponent } from './map/map.component';
import { ArrayComponent } from './array/array.component';
import { TreeComponent } from './tree/tree.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : 'set',
    pathMatch : 'full'
  },
  {
    path : 'set',
    component : SetComponent
  },
  {
    path : 'map',
    component : MapComponent
  },
  {
    path : 'array',
    component : ArrayComponent
  },
  {
    path : 'tree',
    component : TreeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
