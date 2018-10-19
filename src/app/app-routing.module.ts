import { TechComponent } from './views/tech/tech.component';
import { ScienceComponent } from './views/science/science.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'tech', component: TechComponent },
  {path: 'home', component: HomeComponent },
  {path: 'science', component: ScienceComponent}
];

export class AppRoutingModule { }
