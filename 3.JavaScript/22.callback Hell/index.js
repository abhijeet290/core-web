// callback hell

// fetchUser(greet)

// ordering Domino's pizza

// function placeOrder(callback) {
//   console.log(`Talking to Domino's`);

//   setTimeout(() => {
//     console.log(`order placed successfully`);
//     callback();
//   }, 2000);
// }

// function preparingOrder(callback) {
//   console.log(`order preparation started`);

//   setTimeout(() => {
//     console.log(`order ready`);
//     callback();
//   }, 5000);
// }

// function pickupOrder(callback) {
//   console.log(`reaching at the restaurant to pick order`);
//   setTimeout(() => {
//     console.log(`order picked up by delivery boy`);
//     callback();
//   }, 3000);
// }

// function deliverOrder(callback) {
//   console.log(`on the way to your home`);

//   setTimeout(() => {
//     console.log(`order delivered successfully`);
//     callback();
//   }, 5000);
// }
// // placeOrder(preparingOrder)
// // preparingOrder()
// // pickupOrder()
// // deliverOrder()
// placeOrder(() => {
//   preparingOrder(() => {
//     pickupOrder(() => {
//       deliverOrder(() => {
//         console.log("Enjoy your meal! 🍕");
//       });
//     });
//   });
// });

// Using promises 

function placeOrder() {
  return new Promise((resolve, reject) => {
    console.log(`Talking to Domino's`);

    setTimeout(() => {
      const success = true; // change to false to simulate failure
      if (success) {
        console.log(`Order placed successfully`);
        resolve();
      } else {
        reject(`Failed to place order`);
      }
    }, 2000);
  });
}

function preparingOrder() {
  return new Promise((resolve, reject) => {
    console.log(`Order preparation started`);

    setTimeout(() => {
      const success = true;
      if (success) {
        console.log(`Order ready`);
        resolve();
      } else {
        reject(`Failed to prepare order`);
      }
    }, 5000);
  });
}

function pickupOrder() {
  return new Promise((resolve, reject) => {
    console.log(`Reaching at the restaurant to pick order`);
    setTimeout(() => {
      const success = true;
      if (success) {
        console.log(`Order picked up by delivery boy`);
        resolve();
      } else {
        reject(`Failed to pick up order`);
      }
    }, 3000);
  });
}

function deliverOrder() {
  return new Promise((resolve, reject) => {
    console.log(`On the way to your home`);
    setTimeout(() => {
      const success = true;
      if (success) {
        console.log(`Order delivered successfully`);
        resolve();
      } else {
        reject(`Failed to deliver order`);
      }
    }, 5000);
  });
}

// Now chaining the promises
// placeOrder()
//   .then(() => preparingOrder())
//   .then(() => pickupOrder())
//   .then(() => deliverOrder())
//   .then(() => console.log("Enjoy your meal! 🍕"))
//   .catch((error) => console.log("Error:", error));


// Async function to execute all steps
async function orderPizza() {
  try {
    await placeOrder();
    await preparingOrder();
    await pickupOrder();
    await deliverOrder();
    console.log("Enjoy your meal! 🍕");
  } catch (error) {
    console.error("Something went wrong:", error);
  }
}

orderPizza();