import { Component, EventEmitter, Input, OnInit, Output, AfterViewChecked, AfterViewInit, AfterContentChecked, OnChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IstdList } from 'src/app/sheard/model/studentList';
import { ApiService } from 'src/app/sheard/service/api-service.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit, OnChanges {
  studentDetailForm !: FormGroup;
  @Output() emmitStudentData: EventEmitter<IstdList> = new EventEmitter<IstdList>();
  @Output() emmitupdatedStudentData: EventEmitter<IstdList> = new EventEmitter<IstdList>();
  @Input("singleStudentdata") singleStudentdata !: IstdList;

  constructor(private _apiservice: ApiService) { }

  ngOnInit(): void {
    this.createForm();
  }

  ngOnChanges(): void {
    this.pathstudentSingleValue()
  }

  pathstudentSingleValue(): void {
    this.studentDetailForm?.patchValue({
      name: this.singleStudentdata?.name,
      address: this.singleStudentdata?.address,
      city: this.singleStudentdata?.city,
      state: this.singleStudentdata?.state,
      country: this.singleStudentdata?.country,
    })
  }


  createForm() {
    this.studentDetailForm = new FormGroup({
      name: new FormControl(null),
      address: new FormControl(null),
      city: new FormControl(null),
      state: new FormControl(null),
      country: new FormControl(null),
    })
  }

  studentFormUpdate(): void {
    this.emmitStudentData.emit(this.studentDetailForm.value)
    this._apiservice.addnewStudentList(this.studentDetailForm.value).subscribe((studentList: IstdList[]) => {

    })
    this.studentDetailForm.reset()
  }

  onUpdateSutdentlist() {
    this.emmitupdatedStudentData.emit(this.studentDetailForm.value)
    console.log('trigger');

    this._apiservice.updateStudentList(this.studentDetailForm.value, this.singleStudentdata.id).subscribe((data) => { })
    this.studentDetailForm.reset()
  }
}
