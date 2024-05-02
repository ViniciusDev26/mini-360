import { Entity } from "../../core/entities/Entity";
import { Id } from "../../core/entities/Id";

interface ContactProps {
  name: string;
  email: string;
  phone: string;
}

export class Contact extends Entity<ContactProps> {
  get name(): string {
    return this.props.name;
  }

  get email(): string {
    return this.props.email;
  }

  get phone(): string {
    return this.props.phone;
  }
}