import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teclado',
  templateUrl: './teclado.component.html',
  styleUrls: ['./teclado.component.css']
})
export class TecladoComponent implements OnInit {

  public resultado="";

  constructor() { }

  ngOnInit() {
  }

  montarResultado(digito:string){
    this.resultado+=digito;
  }

  limpar(){
    this.resultado="";
  }

  finalizar(){
    this.resultado=eval(this.resultado);
  }

}