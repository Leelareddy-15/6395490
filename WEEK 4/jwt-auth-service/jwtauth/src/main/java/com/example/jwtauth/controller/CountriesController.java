package com.example.jwtauth.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class CountriesController {

    @GetMapping("/countries")
    public List<String> getCountries() {
        return Arrays.asList("India", "USA", "UK");
    }
}
