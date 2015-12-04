/**
 * Created by mekhala on 12/3/15.
 */

function placeOrder(orderNum) {
    console.log("Recieved order" + orderNum);

    deliver(function () {
        console.log("delivered order" + orderNum);
    });
}

function deliver(callback) {
    setTimeout(callback, 5000);
}

placeOrder(1);
placeOrder(2);
placeOrder(3);
placeOrder(4);
placeOrder(5);

