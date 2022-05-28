import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HotelModel } from 'src/app/service/hotel-model';
import { HotelmanagementService } from 'src/app/service/hotelmanagement.service';

@Component({
  selector: 'app-hotel-dashboard',
  templateUrl: './hotel-dashboard.component.html',
  styleUrls: ['./hotel-dashboard.component.less']
})
export class HotelDashboardComponent implements OnInit {
  hotelHeading = ['Sno', 'Restaurent ID', 'Full Name', 'Order No', 'Email', 'Mobile No', 'Address', 'Service'];
  showAdd !: boolean;
  showUpdate !: boolean;
  hotelForm !: FormGroup;
  totalRecords: any;
  pageSize = 1;
  restaurentList: any = [];
  restaurentDetails: any = [];
  public currentPage = 0;
  public totalSize = 0;
  public dataSource: any;
  public dataList: any;
  public gridDate: any;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  restaurentModelObj: HotelModel = new HotelModel();
  restaurentAllDetails: any;
  constructor(
    private router: Router,
    private hotelService: HotelmanagementService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.hotelForm = this.fb.group({
      fullName: [''],
      orderNo: [''],
      email: [''],
      mobileNo: [''],
      address: [''],
      service: [''],
    });
    this.getRestaurentDetails();
    // this.getMatPaginationRestaurentDetails();
  }
  clickAddNewOrder() {
    this.hotelForm.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }
  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.iterator();
  }
  private iterator() {
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    const part = this.dataList.slice(start, end);
    console.log('part ==>' + part);
    this.gridDate = part
    console.log('this.gridDate ==>' + this.gridDate);
    this.dataSource = part;
    console.log('this.dataSource ==>' + this.dataSource);
  }
  postRestaurentDetails() {
    this.restaurentModelObj.fullName = this.hotelForm.value.fullName;
    this.restaurentModelObj.orderNo = this.hotelForm.value.orderNo;
    this.restaurentModelObj.email = this.hotelForm.value.email;
    this.restaurentModelObj.mobileNo = this.hotelForm.value.mobileNo;
    this.restaurentModelObj.address = this.hotelForm.value.address;
    this.restaurentModelObj.service = this.hotelForm.value.service;

    this.hotelService.postRestaurentDetails(this.restaurentModelObj).subscribe(result => {
      this.getRestaurentDetails();
      alert("Restaurent Record Added Successfully!");
      this.hotelForm.reset();
    }, (err) => {
      alert("Something Wrong in Saving Restaurent Details");
    });
  }
  getRestaurentDetails() {
    this.hotelService.getAllRestaurentDetails().subscribe(result => {
      this.restaurentList = result;
      this.totalRecords = this.restaurentList.recordCount;
      this.restaurentDetails = this.restaurentList['results'];
      this.totalSize = this.restaurentDetails.length;
      this.restaurentAllDetails = this.restaurentList.results;
      this.dataSource = new MatTableDataSource<Element>(this.restaurentAllDetails);
      this.dataList = this.dataSource['filteredData']
      this.dataSource.paginator = this.paginator;
      this.restaurentAllDetails = this.restaurentDetails;
      this.totalSize = this.totalSize;
      this.iterator();
    });
  }
  deleteRestaurent(data: any) {
    const id = data._id;
    this.hotelService.deleteRestaurentDetails(id).subscribe(result => {
      window.confirm("Do You Want To Delete Restaurent Record ?");
      this.getRestaurentDetails();
    });
  }

  editRestaurentDetails(data: any) {
    this.restaurentModelObj.id = data._id;
    this.showAdd = false;
    this.showUpdate = true;
    this.hotelForm.controls['fullName'].setValue(data.fullName);
    this.hotelForm.controls['orderNo'].setValue(data.orderNo);
    this.hotelForm.controls['email'].setValue(data.email);
    this.hotelForm.controls['mobileNo'].setValue(data.mobileNo);
    this.hotelForm.controls['address'].setValue(data.address);
    this.hotelForm.controls['service'].setValue(data.service);
  }
  updateRestaurentDetails() {
    this.restaurentModelObj.fullName = this.hotelForm.value.fullName;
    this.restaurentModelObj.orderNo = this.hotelForm.value.orderNo;
    this.restaurentModelObj.email = this.hotelForm.value.email;
    this.restaurentModelObj.mobileNo = this.hotelForm.value.mobileNo;
    this.restaurentModelObj.address = this.hotelForm.value.address;
    this.restaurentModelObj.service = this.hotelForm.value.service;

    this.hotelService.updateRestaurentDetails(this.restaurentModelObj, this.restaurentModelObj.id).subscribe(result => {
      alert("Restaurent Record Updated Successfully!!");
      this.hotelForm.reset();
      this.getRestaurentDetails();
    })
  }
}
