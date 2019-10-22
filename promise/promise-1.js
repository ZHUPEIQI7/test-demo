console.log("promise-1");

/**
 * Promise
 * 三种状态：1：pending，2：resolve，3：reject
 */
let num = 5;
let resolve, reject;

let a = new Promise((rs, rj) => {
  console.log(resolve, "--", reject);
  num += 10;
  //   reject(num);
  resolve = rs;
  reject = rj;
  window.resolve = resolve;
  window.reject = reject;
});

setTimeout(() => {
  console.dir(a);
}, 5000);

a.then(res => {
  console.log("then: ", res);
  return res;
})
  .then(data => {
    console.log("then-1: ", data);
    return data;
  })
  .catch(e => {
    console.error("catch: ", e);
  })
  .finally(data => {
    console.log("finally: ", data);
  });
//   。。。。。
resolve(num);
