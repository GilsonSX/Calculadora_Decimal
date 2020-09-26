import { Component, OnInit } from "@angular/core";
import { ValidacaoService } from "../validacao.service";

@Component({
  selector: "app-teclado",
  templateUrl: "./teclado.component.html",
  styleUrls: ["./teclado.component.css"],
})
export class TecladoComponent implements OnInit {
  public resultado = "";

  constructor(public validacao: ValidacaoService) {}

  ngOnInit() {}

  public montarResultado(digito: string): void {
    if (this.validacao.validaExpressao(digito, this.resultado)) {
      this.resultado += digito;
    }
  }

  limpar() {
    this.resultado = "";
  }

  public finalizar(): void {
    this.resultado = eval(this.resultado).toString();
  }
}
