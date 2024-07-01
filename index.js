 const receivesAFunction = (callback) => {
    callback()
 }

 const returnsANamedFunction = () => {
    return function rand () {
        console.log(`I'm a random function`)
    }
 }

 const returnsAnAnonymousFunction = () => {
    return function() {
        console.log(`We are anonymous`)
    }
 }
 