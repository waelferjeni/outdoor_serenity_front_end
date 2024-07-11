import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule

interface Card {
  id: number,
  image: string;
  title: string;
  price: number;
  destination: string;
  duration: string;
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CardComponent {
  cards: Card[] = []
  test: any
  @Input() data: Card[] = []
  // image = ""
  ngOnInit() {
    this.cards = this.data
    console.log("aaaaa",this.cards);
    console.log("aaaaa",this.data);
    // //this.image = this.cards[1].image
    // this.test = [
    //   { "id": 0, "name": "Available" },
    //   { "id": 1, "name": "Ready" },
    //   { "id": 2, "name": "Started" }
    // ];
  }
}
