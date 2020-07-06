function takeOrder(orderNum, deliveryOrders) {
  if (deliveryOrders.length < 3) {
    deliveryOrders.push(orderNum)
  }
}


// I knew I needed to access the order objects. so this is where I started:
// It turned out to be WAY more simple!!
  // function orderType(num, food, money, deliver, isComplete) {
  //   var orderNum = {
  //     orderNumber: num,
  //     item: food,
  //     price: money,
  //     orderType: deliver,
  //     status: isComplete
  //   }
  //   return orders;
  // }
//   return orderType;
// }

function refundOrder(orderNum, deliveryOrders) {
  var pos;
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].orderNumber == orderNum) {
        pos = i
    }
  }
  deliveryOrders.splice(pos, 1);
  // deliveryOrders.splice(1, 1); when I changed arguemnt to 2!
}


// Splice: first paramter: start index (inclusive!)
           //2nd: how many
           // 3rd (optional): insert (even if nothing is removed!)
// This one works, but I think it is "cheating" a bit. It can only remove the
// first order. I edited the test to refund order2 and it failed. Of course.
  // function refundOrder(orderNum, deliveryOrders) {
  //   return deliveryOrders.shift();
  //
// I am still not sure splice is the correct solution either!! But it does work!
// :)
// I think it would be better to write a code that accesses the orderNumber Key.
// I can't figure out how to do that!
// console.log(object[element].key) Is this it? I couldn't get it to work though.

function listItems(delivery) {
    var outputString = ""; // initial Conditioning of for loop
    for (var i = 0;
        i < delivery.length;
        i++) {
// += means: orderItemString = orderItemString + `${delivery[i].item},`
      outputString += `${delivery[i].item}, `;
      // console.log(outputString) this is to see why it is working!
    }
    return outputString.slice(0, outputString.length - 2) // finalFormatting of for loop
  }


// `${deliveryOrders[i].item},`
// (delivery[i].item + ",");

// I do not undestand "for loops". I've been avoiding them as much as possible
// while working through this. I mostly understand this. I think.
// But it is not working.
// I think I need commas between the items. But I have no idea how to do so.
// i can be thought of incrementer.

function searchOrder(order, secondArguement) {
  var check = false
  for (var i = 0; i < order.length; i++) {
    if (order[i].item == secondArguement) {
      check = true
      }
    }
    return check;
  }


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
