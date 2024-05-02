import { randomUUID } from "crypto";

export class Id {
  private _id: string;

  constructor(id?: string) {
    this._id = id ?? randomUUID();
  }

  get value() {
    return this._id;
  }

  public equals(id: Id): boolean {
    if (id === null || id === undefined) {
      return false;
    }

    if (this === id) {
      return true;
    }

    return this._id === id.value;
  }
}