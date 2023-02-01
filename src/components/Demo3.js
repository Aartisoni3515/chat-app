import React from 'react'

const Demo3 = () => {
    // function x(i){
    //     for (i=1 ; i<=5 ; i++){
    //         setTimeout(() => {
    //             console.log(i);
                
    //         }, i*1000);
    //     }
    //     // console.log("hello");
    // }  
    // x()
let c ={name:"Aarti"};
 let d= c;
 c.name = "poonam";
 console.log(d.name);


  return (
    <div></div>
  )
}

export default Demo3