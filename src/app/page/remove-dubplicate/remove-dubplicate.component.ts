import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remove-dubplicate',
  templateUrl: './remove-dubplicate.component.html',
  styleUrls: ['./remove-dubplicate.component.scss']
})
export class RemoveDubplicateComponent implements OnInit {

  filldata =
    [
      { analyze: "A1", reason: "s1", remark: "R-1", sampleId: "1,2,9" },
      { analyze: "A1", reason: "s1", remark: "R-4", sampleId: "3,4" },

      { analyze: "A2", reason: "s1", remark: "R-2", sampleId: "1,2" },

      { analyze: "A2", reason: "s1", remark: "R-3", sampleId: "5" },

      { analyze: "A2", reason: "s1", remark: "R-4", sampleId: "6,8" },

      { analyze: "A3", reason: "s1", remark: "R-3", sampleId: "1" },

      { analyze: "A3", reason: "s1", remark: "R-4", sampleId: "3,5" },

      { analyze: "A3", reason: "s2", remark: "R-5", sampleId: "7" },

      { analyze: "A3", reason: "s1", remark: "R-4", sampleId: "10" },
    ]


  constructor() { }

  ngOnInit(): void {
    this.removeDubplicate();
  }

  removeDubplicate() {
    const removeDubpocate: any = [];
    const removeDubplicateName: any = [];
    this.filldata.forEach((element) => {
      if (!removeDubplicateName.includes(element.analyze)) {
        removeDubplicateName.push(element.analyze);
        removeDubpocate.push(element)
      }
    })
    console.log(removeDubpocate);
  }

}
