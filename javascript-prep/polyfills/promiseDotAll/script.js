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

// promise.all polyfill starts
const myPromiseAll = (promisesArray) => {
  if (!Array.isArray(promisesArray)) {
    throw new TypeError("PromiseAll requires an array");
  }

  return new Promise((myResolve, myReject) => {
    const results = new Array(promisesArray.length); // Ensure correct order
    let completed = 0;

    if (promisesArray.length === 0) {
      return myResolve([]); // Resolve immediately for an empty array
    }

    promisesArray.forEach((promise, index) => {
      Promise.resolve(promise) // Handle non-promise values
        .then((res) => {
          results[index] = res; // Assign to the correct index
          completed += 1;

          if (completed === promisesArray.length) {
            myResolve(results); // Resolve when all are completed
          }
        })
        .catch(myReject); // Reject immediately if any promise fails
    });
  });
};

const promiseOne = fakePromise(123, 2000, false);
const promiseTwo = fakePromise(126, 2000, false);
const promiseThree = fakePromise(345, 1000, false);
const promiseFour = fakePromise(4563, 3000, false);

myPromiseAll([promiseOne, promiseTwo, promiseThree, promiseFour])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
// promise.all polyfill ends

//promise.settleAll polyfill starts
const myPromiseSettleAll = (iterable) => {
  if (!Array.isArray(iterable)) {
    throw new TypeError("PromiseSettleAll requires an array");
  }

  return new Promise((myResolve) => {
    const results = new Array(iterable.length); // To maintain order
    let completed = 0;

    if (iterable.length === 0) {
      return myResolve([]); // Resolve immediately for an empty array
    }

    iterable.forEach((item, index) => {
      Promise.resolve(item) // Ensure we handle non-promise values
        .then((value) => {
          results[index] = { status: "fulfilled", value };
        })
        .catch((reason) => {
          results[index] = { status: "rejected", reason };
        })
        .finally(() => {
          completed += 1;

          if (completed === iterable.length) {
            myResolve(results); // Resolve with results when all settle
          }
        });
    });
  });
};

const promiseOneSettleAll = fakePromise(123, 3000, false);
const promiseTwoSettleAll = fakePromise(126, 2000, false);
const promiseThreeSettleAll = fakePromise(345, 1000, false);
const promiseFourSettleAll = fakePromise(4563, 3000, true);

myPromiseSettleAll([
  promiseOneSettleAll,
  promiseTwoSettleAll,
  promiseThreeSettleAll,
  promiseFourSettleAll,
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
//promise.settleAll polyfill ends

//promise.race polyfill starts;
const myPromiseRace = (iterables) => {
  if (!Array.isArray(iterables)) {
    throw new TypeError("Promise.race requires an array");
  }

  return new Promise((myResolve, myReject) => {
    if (iterables.length === 0) {
      return; // Do nothing if the array is empty
    }

    iterables.forEach((item) => {
      Promise.resolve(item) // Ensure non-promise values are handled
        .then((res) => myResolve(res)) // Resolve the race as soon as one resolves
        .catch((err) => myReject(err)); // Reject the race as soon as one rejects
    });
  });
};

const promiseOneRace = fakePromise(123, 3000, false);
const promiseTwoRace = fakePromise(126, 2000, false);
const promiseThreeRace = fakePromise(345, 2000, false);
const promiseFourRace = fakePromise(4563, 1000, true);

myPromiseRace([
  promiseOneRace,
  promiseTwoRace,
  promiseThreeRace,
  promiseFourRace,
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
// promise.race polyfill ends

//promise.any polyfill starts
const myPromiseAny = (iterables) => {
  if (!Array.isArray(iterables)) {
    throw new TypeError("Promise.any requires an array");
  }

  return new Promise((myResolve, myReject) => {
    if (iterables.length === 0) {
      return myReject(
        new AggregateError([], "All promises were rejected") // Reject immediately for an empty array
      );
    }

    let rejectionCount = 0; // To track how many promises reject
    const errors = []; // To collect rejection reasons

    iterables.forEach((item, index) => {
      Promise.resolve(item) // Handle non-promise values
        .then((res) => myResolve(res)) // Resolve with the first fulfilled promise
        .catch((err) => {
          errors[index] = err; // Collect the rejection reason
          rejectionCount += 1;

          if (rejectionCount === iterables.length) {
            myReject(new AggregateError(errors, "All promises were rejected")); // Reject if all promises are rejected
          }
        });
    });
  });
};

const promiseOneAny = fakePromise(123, 3000, false);
const promiseTwoAny = fakePromise(126, 2000, false);
const promiseThreeAny = fakePromise(345, 2000, false);
const promiseFourAny = fakePromise(4563, 1000, true);

myPromiseAny([promiseOneAny, promiseTwoAny, promiseThreeAny, promiseFourAny])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
//promise.any polyfill ends
