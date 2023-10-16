package com.example.demo.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.modal.ServiceProvider;
import com.example.demo.service.ServiceProviderService;

@RestController
@RequestMapping("/api/service-providers")
public class ServiceProviderController {
    private final ServiceProviderService serviceProviderService;

    @Autowired
    public ServiceProviderController(ServiceProviderService serviceProviderService) {
        this.serviceProviderService = serviceProviderService;
    }

    @GetMapping
    public List<ServiceProvider> getAllServiceProviders() {
        return serviceProviderService.getAllServiceProviders();
    }

    @GetMapping("/{id}")
    public ServiceProvider getServiceProviderById(@PathVariable Long id) {
        return serviceProviderService.getServiceProviderById(id).orElse(null);
    }

    @PostMapping
    public ServiceProvider createServiceProvider(@RequestBody ServiceProvider serviceProvider) {
        return serviceProviderService.createServiceProvider(serviceProvider);
    }

    @PutMapping("/{id}")
    public ServiceProvider updateServiceProvider(@PathVariable Long id, @RequestBody ServiceProvider serviceProvider) {
        return serviceProviderService.updateServiceProvider(id, serviceProvider);
    }

    @DeleteMapping("/{id}")
    public void deleteServiceProvider(@PathVariable Long id) {
        serviceProviderService.deleteServiceProvider(id);
    }
}
