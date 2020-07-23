import {Component} from '@angular/core';
import {MercCard} from './shared/models/merc-card';
import {RepositoryService} from './core/services/repository.service';
import {Merc} from './shared/models/merc';
import {JsonRepositoryService} from './core/services/json-repository.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{provide: RepositoryService, useClass: JsonRepositoryService}]
})
export class AppComponent {
  public repository: RepositoryService<Merc>;

  constructor(private repos: RepositoryService<Merc>) {
    this.repository = repos;
    // this.aimee.name = "Aimee";
    // this.aimee.imgUrl = "https://vignette.wikia.nocookie.net/dirtybomb/images/b/b6/Aimee_Character_Card.png/revision/latest/scale-to-width-down/315?cb=20151012025944";
    // this.mercs.push(this.aimee);
  }
}
