function TestPromise(step) {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve(step)
    } else {
      reject("error")
    }
  })
}

console.log("step 1")

setTimeout(() => {
  console.log("step 2")
}, 0)

TestPromise("step 3").then(e => console.log(e))

setTimeout(() => {
  console.log("step 4")
}, 0)

TestPromise("step 5").then(e => console.log(e))

console.log("step 6")
