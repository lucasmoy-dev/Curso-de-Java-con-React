package dev.lucasmoy.springboot.services;

import dev.lucasmoy.springboot.entities.Supplier;

import java.util.List;

public interface ISupplierService {
    List<Supplier> getAll();
    Supplier getById(Long id);
    void remove(Long id);
    void save(Supplier supplier);
}
