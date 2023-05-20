import { Component, OnInit } from '@angular/core';
import { IstdList } from './sheard/model/studentList';
import { ApiService } from './sheard/service/api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  studentListdata: IstdList[] = [{
    name: "vk",
    address: "abc",
    city: "Surat",
    state: "Gujarat",
    country: "India",
    id: 2
  }];

  constructor(private _apiservice: ApiService) { }

  ngOnInit(): void {
    this.fetchstudentListdata();
  }

  fetchstudentListdata() {
    this._apiservice.getStudentdata().subscribe((stdList: IstdList[]) => {
      this.studentListdata = stdList;
    })
  }
}
