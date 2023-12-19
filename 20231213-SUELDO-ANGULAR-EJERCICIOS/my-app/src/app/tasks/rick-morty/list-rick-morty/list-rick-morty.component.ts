import { Component, OnInit } from '@angular/core';
import { RickMortyServiceService } from 'src/app/service/rick-morty-service.service';

@Component({
  selector: 'app-list-rick-morty',
  templateUrl: './list-rick-morty.component.html',
  styleUrls: ['./list-rick-morty.component.css'],
})
export class ListRickMortyComponent implements OnInit {
  characters: any = [];

  constructor(public rickMortyService: RickMortyServiceService) {}

  ngOnInit(): void {
    this.rickMortyService
      .getData()
      .subscribe((data: any) => (this.characters = data.results));
  }
}
