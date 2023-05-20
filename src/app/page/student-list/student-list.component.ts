import { Component, Input, OnInit } from '@angular/core';
import { IstdList } from 'src/app/sheard/model/studentList';
import { ApiService } from 'src/app/sheard/service/api-service.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  @Input("studentlistData") studentlistData !: IstdList[]
   singleStudent !: IstdList;
  constructor() { }

  ngOnInit(): void {
    
  }

  studentData(data : IstdList){
    this.studentlistData.push(data)
  }

  onEditstudentList(studentList : IstdList){
     this.singleStudent = studentList;
  }

  updatedData(singleList : IstdList){
    this.studentlistData.forEach((element : IstdList)=>{
      if(element.id === this.singleStudent?.id){
        element.name = singleList.name;
        element.state = singleList.city;
        element.country = singleList.country;
        element.city = singleList.city;
        element.address = singleList.address
      }
    })
  }
}
