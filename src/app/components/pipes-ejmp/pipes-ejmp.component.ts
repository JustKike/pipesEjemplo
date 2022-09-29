import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-ejmp',
  templateUrl: './pipes-ejmp.component.html',
  styleUrls: ['./pipes-ejmp.component.css']
})
export class PipesEjmpComponent implements OnInit {

  public name: string = "HolaMundo";
  public message:string = "bienvenido desde pipes";
  public person:Object = {
    'Nombre': 'Jair',
    'Apellido': 'Cervantes',
    'Edad': 31
  };
  public decimal:number = 5.678;
  public porcentaje:number = 0.25;
  public moneda:number = 0.25;
  public date = new Date();
  
//async
  greeting: Promise<string>|null = null;
  arrived: boolean = false;
  private resolve: Function|null = null;

  constructor() { 
    this.reset();
  }

  ngOnInit(): void {
  }

  reset() {
    this.arrived = false;
    this.greeting = new Promise<string>((resolve, reject) => {
      this.resolve = resolve;
    });
  }

  clicked() {
    if (this.arrived) {
      this.reset();
    } else {
      this.resolve!('hi there!');
      this.arrived = true;
    }
  }

}
