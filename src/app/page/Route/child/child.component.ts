import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor(private _route : ActivatedRoute) { }

  ngOnInit(): void {
    this._route.params.subscribe((data)=>{
      console.log(JSON.parse(data['obj']));
      
    })
  }

}
