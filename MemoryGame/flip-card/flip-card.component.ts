import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.css']
})
export class FlipCardComponent implements OnInit {

  @Input() index!: number;
  @Input() name!: string;

  @Output() onCardClicked: EventEmitter<CardProps> = new EventEmitter<CardProps>();

  cardProps!: CardProps;

  ngOnInit(): void {
    this.cardProps = {
      closed: false,
      flipped: false,
      disabled: false,
      index: this.index
    };

  }

  itemClicked() {
    if (!this.cardProps.disabled) this.onCardClicked.emit(this.cardProps);
  }

}

export interface CardProps {
  closed: boolean,
  flipped: boolean,
  disabled: boolean,
  index: number
}
