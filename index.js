
const a = () => {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log("I'm a.")
      //reject(new Error('Error'));
      resolve("aaa")
    }, 3000)
  })
}

const b = () => {
  console.log("I'm b.")
  return "bbb"
}

Promise.all([a(), b()]).then(result => {
  console.log('Done!', result)
  return "piyo"
}).then(result => {
  console.log("chain1: " + result)
}).then(result => {
  console.log("chain2: " + result)
})

a().then(result => {
  console.log("AAA:hogehoge")
  return "AAA:piyo"
}).then(result => {
  console.log("AAA:chain1: " + result)
}).then(result => {
  console.log("AAA:chain2: " + result)
})
