export class Weapon {
  id: number;
  imgUrl: string;
  name: string;
}

export class Weapons {
  primaries: Weapon[];
  secondaries: Weapon[];
  melee: Weapon[];
}
