// How to Use Promises to Escape Callback Hell

// Promises were invented to solve the problem of callback hell and to better handle our tasks.

// A Promise has three states:

//     1.Pending: This is the initial stage.Nothing happens here.Think of it like this,
//       your customer is taking their time giving you an order.But they haven't ordered anything yet.
//     2.Resolved: This means that your customer has received their food and is happy.
//     3.Rejected: This means that your customer didn't receive their order and left the restaurant.

var is_shop_open = true
let order = (time, work) => {

    return new Promise((resolve, reject) => {

        if (is_shop_open) {

            setTimeout(() => {

                // work is 👇 getting done here
                resolve(work())

                // Setting 👇 time here for 1 work
            }, time)

        }

        else {
            reject(console.log("Our shop is closed"))
        }

    })
}

// step 1
order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))

    // step 2
    .then(() => {
        return order(0000, () => console.log('production has started'))
    })

    // step 3
    .then(() => {
        return order(2000, () => console.log("Fruit has been chopped"))
    })

    // step 4
    .then(() => {
        return order(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`))
    })

    // step 5
    .then(() => {
        return order(1000, () => console.log("start the machine"))
    })

    // step 6
    .then(() => {
        return order(2000, () => console.log(`ice cream placed on ${stocks.holder[1]}`))
    })

    // step 7
    .then(() => {
        return order(3000, () => console.log(`${stocks.toppings[0]} as toppings`))
    })

    // Step 8
    .then(() => {
        return order(2000, () => console.log("Serve Ice Cream"))
    })