import { IsEmail, IsNotEmpty, IsNumberString } from 'class-validator';
import { createAddressDto } from './createAddress.dto';

export class CreateCustomerDto {
  @IsEmail()
  email: string;

  @IsNumberString()
  id: number;

  @IsNotEmpty()
  name: string;

  address: createAddressDto;
}
