import {Component} from '@angular/core';
import {MercCard} from './shared/models/merc-card';
import {RepositoryService} from './core/services/repository.service';
import {Merc} from './shared/models/merc';
import {JsonRepositoryService} from './core/services/json-repository.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{provide: 'type', useValue: Merc}, {provide: RepositoryService, useClass: JsonRepositoryService}]
})
export class AppComponent {
  public repository: RepositoryService<Merc>;

  selectedMerc: Merc;

  constructor(private repos: RepositoryService<Merc>) {
    this.repository = repos;
  }
}
