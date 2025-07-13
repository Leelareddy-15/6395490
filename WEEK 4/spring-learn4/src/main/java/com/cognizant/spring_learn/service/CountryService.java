package com.cognizant.spring_learn.service;

import com.cognizant.spring_learn.model.Country;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;
import org.w3c.dom.*;

import javax.xml.parsers.DocumentBuilderFactory;
import java.util.ArrayList;
import java.util.List;

@Service
public class CountryService {

    public Country getCountry(String code) throws Exception {
        List<Country> countries = loadCountriesFromXml();

        return countries.stream()
                .filter(c -> c.getCode().equalsIgnoreCase(code))
                .findFirst()
                .orElseThrow(() -> new Exception("Country not found"));
    }

    private List<Country> loadCountriesFromXml() throws Exception {
        List<Country> countryList = new ArrayList<>();

        Document doc = DocumentBuilderFactory
                .newInstance()
                .newDocumentBuilder()
                .parse(new ClassPathResource("country.xml").getInputStream());

        NodeList nodeList = doc.getElementsByTagName("country");

        for (int i = 0; i < nodeList.getLength(); i++) {
            Element countryElement = (Element) nodeList.item(i);
            Country country = new Country();
            country.setCode(countryElement.getElementsByTagName("code").item(0).getTextContent());
            country.setName(countryElement.getElementsByTagName("name").item(0).getTextContent());
            countryList.add(country);
        }

        return countryList;
    }
}
