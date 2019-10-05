import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'about', loadChildren: './about/about.module#AboutModule'},
  {path: 'home', loadChildren:'./home/home.module#HomeModule'},
  {path: 'careers', loadChildren:'./careers/careers.module#CareersModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
