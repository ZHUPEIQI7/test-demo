console.log("index.js");
// import "./promise/promise-1";
import demo1 from "./demo-1";
import * as demo2 from "./demo-2";
import { obj, c } from "./demo-2";
// console.log(demo1);
// console.log(demo1.c(demo1.a, demo1.b));
let a = demo1.c(demo1.a, demo1.b)
a.then(data => {
    console.log('111', data);
    return demo1.c(data, 5);
}).then(data => {
    console.log('222', data);
    return Promise.resolve(data + 10);
}).then(data => {
    console.log('333', data);
}).catch(e => {
    console.error(e);
})
console.log(a);
// console.log(demo2);
// console.log(demo2.c(demo2.obj.a, demo2.obj.b));

// console.log(obj);
// console.log(c);

// console.log(c(obj.a, obj.b));
//通过给定的ID来发送请求
axios.get('/user?ID=12345')
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.log(err);
  });
//以上请求也可以通过这种方式来发送
axios.get('/user',{
  params:{
    ID:12345
  }
})
.then(response =>{
  console.log(response);
})
.catch(err => {
  console.log(err);
});