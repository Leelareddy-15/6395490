package com.library.LibraryManagement;
import com.library.LibraryManagement.BookService;

public class BookService {

    private BookRepository bookRepository;

    // Setter injection
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void displayBook() {
        System.out.println("BookService: " + bookRepository.getBookName());
    }
}
