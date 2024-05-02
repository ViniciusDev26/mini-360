import { Address } from "../../../domain/entities/Address";

export interface AddressRepository {
  save(address: Address): Promise<void>
}