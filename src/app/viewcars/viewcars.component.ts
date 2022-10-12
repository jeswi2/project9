import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewcars',
  templateUrl: './viewcars.component.html',
  styleUrls: ['./viewcars.component.css']
})
export class ViewcarsComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }

  fetchData=()=>{
    this.myapi.viewcars().subscribe(
      (data)=>{
        this.viewcar=data
      }
    )
  }


  viewcar:any={}

  ngOnInit(): void {
  }

}
