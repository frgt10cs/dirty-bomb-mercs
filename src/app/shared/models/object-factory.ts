export class ObjectFactory<T> {
  constructor(private type: new () => T) { }

  getNew(): T {
    return new this.type();
  }
}
