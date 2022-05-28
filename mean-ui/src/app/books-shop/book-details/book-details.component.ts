import { HttpClient } from '@angular/common/http';
import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookServiceService } from 'src/app/service/book-service.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.less']
})
export class BookDetailsComponent implements OnInit {
  getId: any;
  updateForm!: FormGroup;
  constructor(
    private http: HttpClient,
    private router: Router,
    private bookService: BookServiceService,
    private fb: FormBuilder,
    private ngZone: NgZone,
    private activatedRouter: ActivatedRoute
  ) {
    this.getId = this.activatedRouter.snapshot.paramMap.get('id');
    this.bookService.getBook(this.getId).subscribe(result => {
      this.updateForm.setValue({
        bookName: result['bookName'],
        bookPrice: result['bookPrice'],
        desBook: result['desBook'],
      })
    });
    this.updateForm = this.fb.group({
      bookName: [''],
      bookPrice: [''],
      desBook: [''],
    })
  }

  ngOnInit(): void {
  }
  updateBook() {
    this.bookService.updateBook(this.getId, this.updateForm.value).subscribe(result => {
      console.log("Data Updated Successfully!");
      this.ngZone.run(() => {
        this.router.navigateByUrl('/books-shop/book-list/:id');
      })
    }, (err) => {
      console.log(err);
    })
  }
}
