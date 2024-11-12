// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3, 4))

//  const hello=()=>{
//         let username = "Snigdha"
//         console.log(this.username);
//  }

// const chai =  () => {
//     let username = "Snow"
//     console.log(this);
// }

//Map
// const map=new Map([
//     ['KEY','JS'],
//     [123,'java'],
//     [234,456],
// ]);
// console.log(map.get(123));
// console.log(map.get('key1'));
// map.set("key2",'javascript')
// console.log(map);


// const user = {
//     username: "Snow",
//     price: 999,
//     welcomeMessage: function() {
//       console.log(`${this.username}, welcome to the website`);
//       console.log(this);
//     }
//   };
  // const num=[2,3,4,5,6,7,8,9];
  // const a=num.filter((n)=>(n>5));
  // const b=num.filter((n)=>(n>5)).map((n)=>(n*3));
  // const c=num.filter((n)=>(n>5)).map((n)=>(n*3)).reduce((n,sum)=>(n+sum));
  // console.log(a);
  // console.log(b);
  // console.log(c);

  //promise
// const myPromise=new Promise(
//   (resolve,reject)=>{
//     console.log('execute promise');
//     // resolve();
//     reject("network error")
//   }

// );
// myPromise.then(()=>{
//   console.log("All set");//resolve
// }).catch((error)=>{
//   console.log("Error is", error)//reject
// }).finally(()=>{
//   consolirgoe.log("Executed finally block");//agar kuch is sab ke baad compulsarily execute karana hi h to finally
// })

//fetch
//ise se hum abes or kahin ka bhi ka map using its coordinates using google api kar sakte hai
const res=fetch("https://api.github.com/users/ashishvirgo");
      res.then((data)=>{
        return data.json();
      }).then((d)=>{
        console.log(d);
      }).catch((err)=>{
        console.log("Error is ",err)
      });
  