export enum WeaponType{
  primary,
  secondary,
  melee
}

export class MercWeapon {
  id?: number;
  mercId: number;
  weaponId: number;
  type: WeaponType;
}
