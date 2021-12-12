package dev.lucasmoy.springboot.services;

import dev.lucasmoy.springboot.entities.Employee;
import dev.lucasmoy.springboot.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService implements IEmployeeService {

    @Autowired
    private EmployeeRepository repository;

    @Override
    public List<Employee> getAll() {
        return (List<Employee>) repository.findAll();
    }

    @Override
    public Employee getById(Long id) {
        return (Employee) repository.findById(id).get();
    }

    @Override
    public void remove(Long id) {
        repository.deleteById(id);
    }

    @Override
    public void save(Employee employee) {
        repository.save(employee);
    }

}
