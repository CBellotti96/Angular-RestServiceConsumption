<<<<<<< HEAD
import { TechComponent } from './views/tech/tech.component';
import { ScienceComponent } from './views/science/science.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'tech', pathMatch: 'full'},
  {path: 'tech', component: TechComponent },
  {path: 'science', component: ScienceComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
=======
import { TechComponent } from './views/tech/tech.component';
import { ScienceComponent } from './views/science/science.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'tech', component: TechComponent },
  {path: 'home', component: HomeComponent },
  {path: 'science', component: ScienceComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
>>>>>>> 7da459e853337eb8061344f7dc2b2318ff60ec69
