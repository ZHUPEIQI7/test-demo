console.log("demo-1.js");

/**
 * return 形式
 */
// export default { a: 1, b: 2, c: (arg1, arg2) => arg1 + arg2 };

/**
 * 回调函数
 */
// export default {
//   a: 1,
//   b: 2,
//   c: (arg1, arg2, cb) => {
//     let sum = arg1 + arg2;
//     cb(sum);
//   }
// };

/**
 * Promise 形式
 */
export default {
  a: 1,
  b: 2,
  c: (arg1, arg2) => {
    let promsie = new Promise((resolve, reject) => {
      let sum = arg1 + arg2;
      resolve(sum);
    });

    return promsie;
  }
};
