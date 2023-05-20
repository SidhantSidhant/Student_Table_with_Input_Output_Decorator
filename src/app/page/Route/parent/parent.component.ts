import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Route, Router} from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  obj = {
    analyteList: "A1#",
    fileNoList: "121",
    isReviwed: false,
    projectStatus: "",
    subProjectVal: "1014",
    uiConfiguration: [
      { nBAFileTypeNo: 1, vFileTypeName: "System", vDescription: "SYS1" },
      { nBAFileTypeNo: 2, vFileTypeName: "System1", vDescription: "SYS2 " },
    ]
  }

  constructor(private _router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {

  }

  onDatatransfer(){
    this._router.navigate(["", JSON.stringify(this.obj)])
  }
}
