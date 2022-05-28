import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookListComponent } from './book-list/book-list.component';
import { BooksShopComponent } from './books-shop.component';

const routes: Routes = [
  // {path:'',redirectTo:'books-shop',pathMatch:'full'},
  { 
    path: '', component: BooksShopComponent,
  },
  { path: 'book-list', component: BookListComponent },
  { path: 'add-book', component: AddBookComponent },
  { path: 'edit-book/:id', component: BookDetailsComponent },

  // { 
  //   path: '', component: BooksShopComponent,
  //   children:[
  //     {path: 'book-list', component: BookListComponent},
  //   ]
  // },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksShopRoutingModule { }
