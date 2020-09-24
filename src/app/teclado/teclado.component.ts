import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-teclado",
  templateUrl: "./teclado.component.html",
  styleUrls: ["./teclado.component.css"],
})
export class TecladoComponent implements OnInit {
  public resultado = "";

  constructor() {}

  ngOnInit() {}

  //verifica se o caractere passado é um operador
  public ehOperador(caractere: string): boolean {
    if (
      caractere == "+" ||
      caractere == "-" ||
      caractere == "/" ||
      caractere == "*"
    ) {
      return true;
    } else {
      return false;
    }
  }

  //verifica se o caractere passado é zero
  public ehZero(caractere: string): boolean {
    if (caractere == "0") {
      return true;
    } else {
      return false;
    }
  }

  //verifica se o último caractere da expressão é um operador
  //e o caractere passado é zero
  public ehZeroDepoisDeOperador(caractere: string, expressao: string): boolean {
    if (
      this.ehOperador(expressao.charAt(expressao.length - 1)) &&
      this.ehZero(caractere)
    ) {
      return true;
    } else {
      return false;
    }
  }

  //verifica se o último caractere da expressão é um operador
  //e o caractere passado é operador
  public ehOperadorDepoisDeOperador(
    caractere: string,
    expressao: string
  ): boolean {
    if (
      this.ehOperador(expressao.charAt(expressao.length - 1)) &&
      this.ehOperador(caractere)
    ) {
      return true;
    } else {
      return false;
    }
  }

  //verifica se a expressão é valida
  public ehValidaExpressao(caractere: string, expressao: string): boolean {
    let valido: boolean = true;
    if (expressao.length == 0) {
      if (this.ehOperador(caractere) || this.ehZero(caractere)) {
        valido = false;
      }
    } else {
      if (this.ehZeroDepoisDeOperador(caractere, expressao)) {
        valido = false;
      } else if (this.ehOperadorDepoisDeOperador(caractere, expressao)) {
        valido = false;
      }
    }
    return valido;
  }

  public montarResultado(digito: string): void {
    if (this.ehValidaExpressao(digito, this.resultado)) {
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
