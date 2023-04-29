import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit{
  constructor(){
    console.clear();
  }

  mapMethod(){


    let myMap = new Map();


  // Add /  Set Values In Map

    myMap.set(1,'karna');
    myMap.set(2,'Dhruv');
    myMap.set(3,567);

    myMap.set(1,'Ankit');

    myMap.set(4,[4,6,7,8,9]);
    myMap.set(4,[4,6,7,8,9]);
    myMap.set(5,[4,6,7,8,9]);

    myMap.set('one',{'fruit1':'apple','fruit2':'banana'});


  // Get Values

    console.log(myMap.get(4));
    console.log(myMap.get(2));
    console.log(myMap.get(10));


  // Has Value

    console.log(myMap.has(2));
    console.log(myMap.has(12));


  // Size Find Of Map

    console.log(myMap.size);

  
  // Delete Value

    console.log(myMap.delete(2));
    console.log(myMap.delete(244));

    // console.log(myMap);

  }


  ngOnInit(): void {
    this.mapMethod();
  }
}
