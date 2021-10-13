// When you nest a function inside another function as an argument, that's called a callback.
// Why do we use callbacks ?
//     When doing a complex task, we break that task down into smaller steps.
//     To help us establish a relationship between  these steps according to time(optional) and order, we use callbacks.


let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};

// 1st function
let order = (fruit_name, call_production) => {

    setTimeout(function () {

        console.log(`${stocks.Fruits[fruit_name]} was selected`)

        // Order placed. Call production to start
        call_production();
    }, 2000)
};

// 2nd Function
let production = () => {
    setTimeout(() => {
        console.log("production has started")
        setTimeout(() => {
            console.log("The fruit has been chopped")
            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`)
                setTimeout(() => {
                    console.log("start the machine")
                    setTimeout(() => {
                        console.log(`Ice cream placed on ${stocks.holder[1]}`)
                        setTimeout(() => {
                            console.log(`${stocks.toppings[0]} as toppings`)
                            setTimeout(() => {
                                console.log("serve Ice cream")
                            }, 2000)
                        }, 3000)
                    }, 2000)
                }, 1000)
            }, 1000)
        }, 2000)
    }, 0)
};

order(0, production);