const {
  OrderManager,
  InventoryManager,
  NotificationService,
} = require("../../services/v1/order.services");

const eventExample = (req, res) => {
  const orderDetails = { orderId: 1, customerName: "Das", items: "" };
  const order = new OrderManager();
  order.createOrder(orderDetails);
  const inventoryManager = new InventoryManager();
  inventoryManager.checkInventory(orderDetails);
  const notificationService = new NotificationService();
  notificationService.sendNotification(orderDetails)

  res.send(`Order Details- ${orderDetails}`);
};

module.exports = { eventExample };
