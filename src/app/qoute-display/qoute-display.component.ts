import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-qoute-display',
  templateUrl: './qoute-display.component.html',
  styleUrls: ['./qoute-display.component.css']
})
export class QouteDisplayComponent {
  @Input() quote: any;
}
