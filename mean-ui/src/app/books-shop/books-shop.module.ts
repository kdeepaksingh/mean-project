import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksShopRoutingModule } from './books-shop-routing.module';
import { BooksShopComponent } from './books-shop.component';
import { MaterialLibModule } from '../material-lib/material-lib.module';
import { AddBookComponent } from './add-book/add-book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookListComponent } from './book-list/book-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    BooksShopComponent,
    AddBookComponent,
    BookDetailsComponent,
    BookListComponent
  ],
  imports: [
    CommonModule,
    BooksShopRoutingModule,
    MaterialLibModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class BooksShopModule { }
