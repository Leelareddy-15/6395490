package com.library.LibraryManagement;

public class BookService {
    private BookRepository bookRepository;
    private String serviceName;

    // No-arg constructor
    public BookService() {
        System.out.println("BookService: no-arg constructor called");
    }

    // Parameterized constructor
    public BookService(BookRepository bookRepository, String serviceName) {
        this.bookRepository = bookRepository;
        this.serviceName = serviceName;
        System.out.println("BookService: parameterized constructor called");
    }

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
        System.out.println("BookService: setter for bookRepository called");
    }

    public void setServiceName(String serviceName) {
        this.serviceName = serviceName;
        System.out.println("BookService: setter for serviceName called");
    }

    public void displayServiceInfo() {
        System.out.println("BookService: " + serviceName);
        bookRepository.displayRepository();
    }
}
