import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  gameCover: string = 'https://via.placeholder.com/300x400'

  @Input()
  gameLabel: string = '';

  @Input()
  gameType: string = 'Digital PS4'

  @Input()
  gamePrice: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
