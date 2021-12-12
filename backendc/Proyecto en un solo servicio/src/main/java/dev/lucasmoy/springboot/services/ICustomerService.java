package dev.lucasmoy.springboot.services;

import dev.lucasmoy.springboot.entities.Customer;

import java.util.List;

public interface ICustomerService {
    List<Customer> getAll();
    Customer getById(Long id);
    void remove(Long id);
    void save(Customer customer);
}
