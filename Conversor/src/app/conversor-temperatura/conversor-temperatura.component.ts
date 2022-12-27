import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversor-temperatura',
  templateUrl: './conversor-temperatura.component.html',
  styleUrls: ['./conversor-temperatura.component.css']
})
export class ConversorTemperaturaComponent implements OnInit {


  title: string = 'Conversor'
  constructor() { }

  ngOnInit(): void {
  }

}
