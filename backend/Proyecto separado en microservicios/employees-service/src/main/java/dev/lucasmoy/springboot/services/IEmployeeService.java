package dev.lucasmoy.springboot.services;

import dev.lucasmoy.springboot.entities.Employee;

import java.util.List;

public interface IEmployeeService {
    List<Employee> getAll();
    Employee getById(Long id);
    void remove(Long id);
    void save(Employee employee);
}
