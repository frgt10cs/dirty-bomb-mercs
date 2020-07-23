import {MercDataGroup} from './merc-data-group';
import {MercData} from './merc-data';


export enum Class {
  Engineer,
  Medic,
  Assault,
  Recon,
  FireSupport
}

export class Profile {
  realName: string;
  nationality: string;
}

export class Attributes {
  class: Class;
  health: number;
  sprint: number;
  arm: number;
  defuse: number;
}

export class Cost {
  credits: number;
  money: number;
}

export class Weapon {
  imgUrl: string;
  name: string;
}

export class Weapons {
  primaries: Weapon[];
  secondaries: Weapon[];
  melee: Weapon[];
}

export class Info {
  quote: string;
  overview: string;
  abilities: string;
  weapons: Weapons;
}

export class Merc {
  id: number;
  imgUrl: string;
  name: string;
  profile: Profile;
  attributes: Attributes;
  cost: Cost;
  info: Info;
  /// Represents array of data group for demonstration
  private _data: MercDataGroup[];

  public get data(): MercDataGroup[] {
    if (this._data == null) {
      this._data = [
        {
          name: 'Profile',
          data: [
            new MercData('Real Name', this.profile.realName),
            new MercData('Nationality', this.profile.nationality)
          ]
        },
        {
          name: 'Attributes',
          data: [
            new MercData('Class', this.attributes.class.toString()),
            new MercData('Health', this.attributes.health.toString()),
            new MercData('Sprint', this.attributes.sprint.toString()),
            new MercData('Arm', this.attributes.arm.toString()),
            new MercData('Defuse', this.attributes.defuse.toString())
          ]
        },
        {
          name: 'Cost',
          data:
            [
              new MercData('Credits', this.cost.credits),
              new MercData('Money', this.cost.money)
            ]
        }
      ];
    }
    return this._data;
  }
}
