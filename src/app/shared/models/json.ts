import {ObjectFactory} from './object-factory';

export class Json{

  public static read<T>(jsonData: any, type: new () => T): T[] {
    const factory: ObjectFactory<T> = new ObjectFactory<T>(type);
    const data: T[] = [];
    jsonData.map((obj: T) => {
      data.push(Object.assign(factory.getNew(), obj));
    });
    return data;
  }

  public static write(object: any): void {
    JSON.stringify(object);
  }
}
