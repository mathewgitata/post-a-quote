import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  @Output() addQuote = new EventEmitter<Quote>();

  newQuote = new Quote(0, '', '', '', '');
  submitQuote() {
    this.addQuote.emit(this.newQuote);
    this.newQuote = new Quote(0, '', '', '', '');
  }

  constructor() {}

  ngOnInit() {
  }

}
