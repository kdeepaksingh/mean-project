import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SfmsModel } from 'src/app/service/sfms-model';
import { SfmsService } from 'src/app/service/sfms.service';

@Component({
  selector: 'app-student-fee-management-system',
  templateUrl: './student-fee-management-system.component.html',
  styleUrls: ['./student-fee-management-system.component.less']
})
export class StudentFeeManagementSystemComponent implements OnInit {
  sudentHeading = ['Sno', 'Student ID', 'First Name', 'Last Name', 'Student Email', 'Mobile Number', 'Student Fees'];
  studentFeeForm !: FormGroup;
  studentModelObj: SfmsModel = new SfmsModel();
  showAdd !: boolean;
  showUpdate !: boolean;
  studentList: any = [];
  studentDetails: any = [];
  totalRecords:any;
  pageSize=1;
  constructor(private fb: FormBuilder, private sfmsService: SfmsService) { }

  ngOnInit(): void {
    this.studentFeeForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      mobileNo: [''],
      fees: [''],
    });

    this.getStudentDetails();
  }
  clickAddStudent() {
    this.studentFeeForm.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }
  postSudentDetails() {
    this.studentModelObj.firstName = this.studentFeeForm.value.firstName;
    this.studentModelObj.lastName = this.studentFeeForm.value.lastName;
    this.studentModelObj.email = this.studentFeeForm.value.email;
    this.studentModelObj.mobileNo = this.studentFeeForm.value.mobileNo;
    this.studentModelObj.fees = this.studentFeeForm.value.fees;

    this.sfmsService.postStudentFeeDetails(this.studentModelObj).subscribe(result => {
      this.getStudentDetails();
      alert("Student Record Added Successfully!");
      this.studentFeeForm.reset();
    }, (err) => {
      alert("Something Wrong in Saving Student Details");
    });
  }
  getStudentDetails() {
    this.sfmsService.getAllStudentDetails().subscribe(result => {
      this.studentList = result;
      this.totalRecords =this.studentList.recordCount;
      this.studentDetails = this.studentList['results'];
      console.log(this.totalRecords);
    });
  }
  deleteStudent(data: any) {
    const id = data._id;
    this.sfmsService.deleteStudentDetails(id).subscribe(result => {
      window.confirm("Do You Want To Delete Student Record ?");
      this.getStudentDetails();
    });
  }

  editStudentDetails(data: any) {
    this.studentModelObj.id = data._id;
    this.showAdd = false;
    this.showUpdate = true;
    this.studentFeeForm.controls['firstName'].setValue(data.firstName);
    this.studentFeeForm.controls['lastName'].setValue(data.lastName);
    this.studentFeeForm.controls['email'].setValue(data.email);
    this.studentFeeForm.controls['mobileNo'].setValue(data.mobileNo);
    this.studentFeeForm.controls['fees'].setValue(data.fees);
  }

  updateStudentDetails() {
    this.studentModelObj.firstName = this.studentFeeForm.value.firstName;
    this.studentModelObj.lastName = this.studentFeeForm.value.lastName;
    this.studentModelObj.email = this.studentFeeForm.value.email;
    this.studentModelObj.mobileNo = this.studentFeeForm.value.mobileNo;
    this.studentModelObj.fees = this.studentFeeForm.value.fees;

    this.sfmsService.updateStudentDetails(this.studentModelObj, this.studentModelObj.id).subscribe(result => {
      alert("Student Record Updated Successfully!!");
      this.studentFeeForm.reset();
      this.getStudentDetails();
    })
  }
}