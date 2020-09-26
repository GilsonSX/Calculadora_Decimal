import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ValidacaoService {
  constructor() {}

  //verifica se o caractere passado é um operador
  public operador(caractere: string): boolean {
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
  public zero(caractere: string): boolean {
    if (caractere == "0") {
      return true;
    } else {
      return false;
    }
  }

  //verifica se o último caractere da expressão é um operador
  //e o caractere passado é zero
  public zeroOperador(caractere: string, expressao: string): boolean {
    if (
      this.operador(expressao.charAt(expressao.length - 1)) &&
      this.zero(caractere)
    ) {
      return true;
    } else {
      return false;
    }
  }

  //verifica se o último caractere da expressão é um operador
  //e o caractere passado é operador
  public operadorOperador(caractere: string, expressao: string): boolean {
    if (
      this.operador(expressao.charAt(expressao.length - 1)) &&
      this.operador(caractere)
    ) {
      return true;
    } else {
      return false;
    }
  }

  //verifica se a expressão é valida
  public validaExpressao(caractere: string, expressao: string): boolean {
    let valido: boolean = true;
    if (expressao.length == 0) {
      if (this.operador(caractere) || this.zero(caractere)) {
        valido = false;
      }
    } else {
      if (this.zeroOperador(caractere, expressao)) {
        valido = false;
      } else if (this.operadorOperador(caractere, expressao)) {
        valido = false;
      }
    }
    return valido;
  }
}
