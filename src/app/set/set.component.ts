import { Component, OnInit } from '@angular/core';
import {Set,Map} from 'immutable';
import { merge } from 'rxjs';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.scss']
})

export class SetComponent implements OnInit {

  constructor() { }

  /*-------- Add method --------*/
  // setmethod1() {
  //   let set1: any =  Set();
  //   set1.add(5);
  //   set1.add("Haresh");
  //   set1.add("Haresh");
  //   set1.add("kishan");
  //   set1.add([1,2,3], [1,2,4]);
  //   set1.add([1,2,3], [1,2,3]);
  //   set1.add({ a: 1, b: 2 }, { c: 1, d: 2 });
  //   set1.add({ a: 1, b: 2 }, { a: 3, b: 4 });
  //   console.log(set1)
  // }

  /*-------- Has method --------*/
  // setmethod2() {
  //   let set2: any =  Set();
  //   set2.add({aa:11, bb: 22});
  //   set2.add({aa:11, bb: 22});
  //   set2.add(3);
  //   set2.add(4);
  //   set2.add(5).add(6).add(7).add(8);
  //   console.log(set2);
  // }

  /*-------- Delete method --------*/
  // setmethod3() {
  //   let set3: any = Set();
  //   set3.add(1);
  //   set3.add({aa:11, bb: 22}, {cc:11, dd: 22});
  //   set3.add({aa:11, bb: 22}, {cc:11, dd: 22});
  //   set3.add(3);
  //   set3.add(4);
  //   set3.add(4);
  //   set3.add(5).add(6).add(7).add(8);
  //   set3.delete(5)
  //   console.log(set3);
  // }

  /*-------- Size method --------*/
  // setmethod4() {
  //   let set4: any = Set();
  //   set4.add(1);
  //   set4.add([1,2,3]);
  //   set4.add({aa:11, bb: 22});
  //   set4.add(3);
  //   set4.add(4);
  //   set4.add(4);
  //   set4.add(5).add(6).add(7).add(8);
  //   console.log(set4.size);  
  // }

  /*-------- Size method --------*/
  // setmethod5() {
  //   let set4: any = Set();
  //   set4.add(1);
  //   set4.add([1,2,3]);
  //   set4.add({aa:11, bb: 22});
  //   set4.add(3);
  //   set4.add(4);
  //   set4.add(4);
  //   set4.add(5).add(6).add(7).add(8);
  //   set4.clear();
  //   console.log(set4)
  // }
  
  
  /*-------- One Reference , Two Object --------*/
  // setmethod6(){
    
  //   let set6 = Set();
    
  //   var obj1 = {'car1':'Swift',"price":10000};
  //   var obj2 = {'car1':'Swift','price':10000};
  //   var obj3 = {'car1':'BMW','price':34505};
  //   var obj4 = {'car1':'Oddi','price':94500};

  //   set6.add(obj1);
  //   set6.add(obj2);
  //   set6.add(obj3);
  //   set6.add(obj4);

    
    
    // set6.forEach((item:any)=>{
    //   set6.forEach((subItem:any)=>{
    //     if(set6.has(item.car1) === set6.has(subItem.car1))
    //     {
    //       // set6.delete(subItem.car1);
    //       console.log(item);
    //     }
    //     else
    //     {
    //       // console.log(item);
    //     }
    //   });
    // });

    // const conArr = Array.from(set6);

    // conArr.forEach((item:any)=>{
    //   conArr.forEach((subItem:any)=>{
    //     if(item.car1 === subItem.car1)
    //     {
    //       set6.delete(subItem.car1);
    //       console.log(item);
    //     }
    //     else
    //     {
    //       // console.log(item);
    //     }
    //   });
    // });

    // console.log(set6);
    // console.log(conArr);

    
    // console.log(set6.size);
  // }
  
  
  /*-------- One Reference , Two Object (Second Way)--------*/
  
  // setmethod7(){
  //   const arr:any = [
  //     {id :1,name:'abc'},
  //     {id :2,name:'fvc'},
  //     {id :1,name:'abc'},
  //     {id :3,name:'iibc'},
  //     {id :4,name:'opp'},
  //     {id :4,name:'opp'}
  //   ];
    
  //   const filteredArr:any = arr.reduce((acc: any[], current: { id: any, name:any }) => {
  //     const x = acc.find(item => item.name === current.name);
      
  //     console.log(x);
      
  //     if (!x) {
  //       return acc.concat([current]);
  //     } else {
  //       return acc;
  //     }
  //   }, []);
    
  //   console.log(filteredArr);
    
  // }
  
  /*-------- One Reference , Two Object (Third Way)--------*/
  /*-------- Remove Duplicate Value--------*/

  setmethod8(){

    var set:any = Set();

    set = set.add(Map({ a: 7 }));
    set = set.add(Map({ a: 7 }));
    set = set.add(Map({ a: 7 }));
    set = set.add(Map({ a: 77 }));


    console.log(set.toJS());

    console.log(set.size);

  }
  ngOnInit(): void {
    // this.setmethod1();
    // this.setmethod2();
    // this.setmethod3();
    // this.setmethod4();
    // this.setmethod5();
    // this.setmethod6();
    // this.setmethod7();
    this.setmethod8();

  }


}
