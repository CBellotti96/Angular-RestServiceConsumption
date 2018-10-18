import { TechComponent } from './views/tech/tech.component';
import { ScienceComponent } from './views/tech/science.component';
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