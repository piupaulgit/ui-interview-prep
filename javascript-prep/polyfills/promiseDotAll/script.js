const fakePromise = (value, duration, isRejected) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isRejected) {
        reject("somthing went wrong");
      } else {
        resolve(value);
      }
    }, duration);
  });
};

const myPromiseAll = (promisesArray) => {
  debugger;
  const results = [];
  return new Promise((myResolve, myReject) => {
    for (let promise of promisesArray) {
      promise
        .then((res) => {
          results.push(res);
          if (results.length === promisesArray.length) {
            myResolve(results);
          }
        })
        .catch((err) => {
          myReject(err);
        });
    }
  });
};

const promiseOne = fakePromise(123, 2000, false);
const promiseTwo = fakePromise(126, 2000, false);
const promiseThree = fakePromise(345, 2000, false);
const promiseFour = fakePromise(4563, 3000, true);

myPromiseAll([promiseOne, promiseTwo, promiseThree, promiseFour])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
