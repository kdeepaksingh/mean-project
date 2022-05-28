import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFeeManagementSystemComponent } from './student-fee-management-system.component';

describe('StudentFeeManagementSystemComponent', () => {
  let component: StudentFeeManagementSystemComponent;
  let fixture: ComponentFixture<StudentFeeManagementSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentFeeManagementSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentFeeManagementSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
