import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  @Input() author:string = "";
  @Input() copyright:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
