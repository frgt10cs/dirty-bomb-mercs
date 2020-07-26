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

export class Ability{
  id: number;
  name: string;
  description: string;
}

export class Info {
  quote: string;
  overview: string;
  defaultLoadoutCard: string;
  videoUrl: string;
}

export class Merc {
  id: number;
  imgUrl: string;
  imgPreviewUrl: string;
  name: string;
  profile: Profile;
  attributes: Attributes;
  cost: Cost;
  information: Info;
}
