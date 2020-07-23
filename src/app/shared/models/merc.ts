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
  imgUrl: string;
  name: string;
  profile: Profile;
  attributes: Attributes;
  cost: Cost;
  info: Info;
}
