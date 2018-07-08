import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentform',
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.css']
})
export class StudentformComponent implements OnInit {

  
  constructor() { 

  }

  ngOnInit() {
  }
  public displayData(name,gender,address,phoneno,emailid,collegename,batchname)
  {
    console.log("Name : "+name+"Gender : "+gender+"Address : "+address+"Phoneno : "+phoneno+"Emailid : "+emailid+"College name :"+collegename+"Batch name : "+batchname);
  }
  
}
