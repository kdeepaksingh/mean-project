import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookServiceService } from 'src/app/service/book-service.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.less']
})
export class BookListComponent implements OnInit {
  BookShopHeading: any = ['Sno', 'Book Name', 'Book Price', 'Description of Book'];
  bookDetails: any = [];
  bookTotalList: any = [];
  pageSize=1;
  constructor(private bookService: BookServiceService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.getBook();
  }

  getBook() {
    this.bookService.getBooks().subscribe(result => {
      this.bookDetails = result;
      this.bookTotalList = this.bookDetails.results;
      // console.log("bookDetails==>" + JSON.stringify(this.bookDetails));
    });
  }

  deleteBook(id: any, i: any) {
    console.log(id);
    if (window.confirm('Are You Want To Delete This Book ?')) {
      this.bookService.deleteBook(id).subscribe(result => {
        this.getBook();
      })
    }
  }
}
