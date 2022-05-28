import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksShopComponent } from './books-shop.component';

describe('BooksShopComponent', () => {
  let component: BooksShopComponent;
  let fixture: ComponentFixture<BooksShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
