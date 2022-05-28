import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books-shop',
  templateUrl: './books-shop.component.html',
  styleUrls: ['./books-shop.component.less']
})
export class BooksShopComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  loadAddBook() {
    this.router.navigateByUrl('/book-list');
  }
}
