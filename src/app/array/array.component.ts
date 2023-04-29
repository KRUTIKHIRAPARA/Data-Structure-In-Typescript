import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.scss']
})
export class ArrayComponent implements OnInit{
  constructor(){

  }

  myArray(){
    
    let student = ['kamal','ramesh','papu','ramu'];

  
  // Push Value
    student.push('Niraj');


    console.log(student);



  }

  ngOnInit(): void {
    this.myArray();
  }
  
}
