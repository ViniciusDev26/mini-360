import { Entity } from "../../core/entities/Entity";

interface AddressProps {
  state: string;
  city: string;
  street: string;
}

export class Address extends Entity<AddressProps> {
  get state(): string {
    return this.props.state;
  }

  get city(): string {
    return this.props.city;
  }

  get street(): string {
    return this.props.street;
  }
}
