import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TecladoComponent } from "./teclado/teclado.component";
import { FormsModule } from "@angular/forms";
import { InformacoesModule } from "./informacoes/informacoes.module";

@NgModule({
  declarations: [AppComponent, TecladoComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, InformacoesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
