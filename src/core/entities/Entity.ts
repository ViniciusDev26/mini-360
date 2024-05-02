import { Id } from "./Id";

export abstract class Entity<T> {
  private _id: Id;
  protected readonly props: T;

  constructor(props: T, id?: string) {
    this.props = props;
    this._id = new Id(id);
  }

  get id(): Id {
    return this._id;
  }

  public equals(object?: Entity<T>): boolean {
    if (object == null || object == undefined) {
      return false;
    }

    if (this === object) {
      return true;
    }

    return JSON.stringify(this.props) === JSON.stringify(object.props);
  }
}