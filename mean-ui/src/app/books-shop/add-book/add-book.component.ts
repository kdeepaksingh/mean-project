import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BookServiceService } from 'src/app/service/book-service.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.less']
})
export class AddBookComponent implements OnInit {
  bookform!: FormGroup;
  bookName: string = '';
  bookPrice: string = '';
  desBook: string = '';
  constructor(private router: Router, private bookservice: BookServiceService, private fb: FormBuilder, private ngZone: NgZone) { }

  ngOnInit(): void {
    this.bookform = this.fb.group({
      bookName: [''],
      bookPrice: [''],
      desBook: [''],
    })
  }

  onSubmit() {
    this.bookservice.addBook(this.bookform.value).subscribe(result => {
      // console.log('Data Added Successfully!!');
      alert("Do You Want To Add Book In DB");
      this.ngZone.run(() => {
        this.router.navigateByUrl('/books-shop/book-list');
      }, (err: any) => {
        console.log(err);
      })
    })
  }
}
