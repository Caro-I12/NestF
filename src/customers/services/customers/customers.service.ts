import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/createCustomers.dto';
import { Customer } from 'src/customers/types/Customer';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    {
      id: 1,
      email: 'rwagacarine12@gmail.com',
      name: 'carine',
    },
    {
      id: 2,
      email: 'carine12@gmail.com',
      name: 'Rwagasore',
    },
    {
      id: 3,
      email: 'rwagasore@gmail.com',
      name: 'Ingabire',
    },
  ];
  findCustomerbyId(id: number) {
    return this.customers.find((user) => user.id === id);
  }
  createCustomer(customerDto: CreateCustomerDto) {
    this.customers.push(customerDto);
  }
  getCustomers() {
    return this.customers;
  }
}
