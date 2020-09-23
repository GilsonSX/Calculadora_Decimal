import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TecladoComponent } from './teclado/teclado.component';
//import { AlertModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, TecladoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //AlertModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
