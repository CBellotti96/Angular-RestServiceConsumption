import { AppComponent } from './app.component';
import { TechComponent } from './views/tech/tech.component';
import { ScienceComponent } from './views/science/science.component';
import { NytModule } from './modules/nyt/nyt.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { CollapseModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ScienceComponent,
    TechComponent
  ],
  imports: [
    NytModule,
    BrowserModule,
    FormsModule,
    BootstrapModalModule,
    AppRoutingModule,
    CollapseModule.forRoot()
  ],
  bootstrap: [AppComponent],
  entryComponents: [],
  providers: []
})
export class AppModule { }
