import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFeeManagememntComponent } from './student-fee-managememnt.component';

describe('StudentFeeManagememntComponent', () => {
  let component: StudentFeeManagememntComponent;
  let fixture: ComponentFixture<StudentFeeManagememntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentFeeManagememntComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentFeeManagememntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
