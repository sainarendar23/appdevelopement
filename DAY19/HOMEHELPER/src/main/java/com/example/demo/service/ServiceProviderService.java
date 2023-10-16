package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.modal.ServiceProvider;
import com.example.demo.repository.ServiceProviderRepository;

@Service
public class ServiceProviderService {
    private final ServiceProviderRepository serviceProviderRepository;

    @Autowired
    public ServiceProviderService(ServiceProviderRepository serviceProviderRepository) {
        this.serviceProviderRepository = serviceProviderRepository;
    }

    public List<ServiceProvider> getAllServiceProviders() {
        return serviceProviderRepository.findAll();
    }

    public Optional<ServiceProvider> getServiceProviderById(Long id) {
        return serviceProviderRepository.findById(id);
    }

    public ServiceProvider createServiceProvider(ServiceProvider serviceProvider) {
        return serviceProviderRepository.save(serviceProvider);
    }

    public ServiceProvider updateServiceProvider(Long id, ServiceProvider serviceProvider) {
        serviceProvider.setId(id);
        return serviceProviderRepository.save(serviceProvider);
    }

    public void deleteServiceProvider(Long id) {
        serviceProviderRepository.deleteById(id);
    }
}

