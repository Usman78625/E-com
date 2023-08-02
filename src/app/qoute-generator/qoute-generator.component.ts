import { Component } from '@angular/core';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-qoute-generator',
  templateUrl: './qoute-generator.component.html',
  styleUrls: ['./qoute-generator.component.css']
})
export class QouteGeneratorComponent {

  randomQoute: any;

  constructor(private qouteService: QuoteService){}

  genraterandomQoute(){
    this.qouteService.getRandomQoute().subscribe(qoute =>{
      this.randomQoute = qoute;
    })
  }
}
