import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RickMortyServiceService } from 'src/app/service/rick-morty-service.service';

@Component({
  selector: 'app-detail-rick-morty',
  templateUrl: './detail-rick-morty.component.html',
  styleUrls: ['./detail-rick-morty.component.css'],
})
export class DetailRickMortyComponent implements OnInit {
  characterId: string | null = '';
  personaje: any = {};

  constructor(
    public rickMortyService: RickMortyServiceService,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.characterId = this.route.snapshot.paramMap.get('characterId');

    if (this.characterId !== null) {
      this.rickMortyService
        .getCharacterDetail(parseInt(this.characterId))
        .subscribe((data) => {
          this.personaje = data;
        });
    }
  }
}
