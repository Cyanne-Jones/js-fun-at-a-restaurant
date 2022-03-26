function takeOrder(orderToTake, ordersArrayParam) {
  if (ordersArrayParam.length < 3) {
    ordersArrayParam.push(orderToTake);
  }
  return ordersArrayParam;
};


function refundOrder(orderNumberParam, ordersArrayParam) {
  for (var i = 0; i < ordersArrayParam.length; i++) {
    if (orderNumberParam === ordersArrayParam[i].orderNumber) {
      ordersArrayParam.splice(i, 1);
    }
  }
};

function listItems(ordersParam) {
var items = [];
  for (var i = 0; i < ordersParam.length; i++) {
    if (ordersParam[i] === ordersParam[0]) {
      items.push(ordersParam[i].item)
    } else {
    items.push(` ${ordersParam[i].item}`);
  }
}
  return items.toString();
};


function searchOrder(orderToSearch, itemToLookFor) {
items = orderToSearch.map(value => value.item)
  return items.includes(itemToLookFor)
};

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
