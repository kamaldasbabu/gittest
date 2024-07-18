const EventEmitter = require('events');

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Order Manager
class OrderManager {
  createOrder(order) {
    console.log(`Creating order for ${order.customerName}`);
    // Emit 'orderCreated' event
    eventEmitter.emit('orderCreated', order);
  }
}

// Inventory Manager
class InventoryManager {
  constructor() {
    // Listen for 'orderCreated' event
    eventEmitter.on('orderCreated', this.checkInventory);
  }

  checkInventory(order) {
    console.log(`Checking inventory for order: ${order.orderId}`);
    // Simulate inventory check
    setTimeout(() => {
      console.log(`Inventory available for order: ${order.orderId}`);
      // Emit 'orderProcessed' event
      eventEmitter.emit('orderProcessed', order);
    }, 1000);
  }
}

// Notification Service
class NotificationService {
  constructor() {
    // Listen for 'orderProcessed' event
    eventEmitter.on('orderProcessed', this.sendNotification);
  }

  sendNotification(order) {
    console.log(`Order ${order.orderId} has been processed. Notifying customer: ${order.customerName}`);
  }
}

// Create instances
// const orderManager = new OrderManager();
// const inventoryManager = new InventoryManager();
// const notificationService = new NotificationService();

module.exports = { OrderManager, InventoryManager, NotificationService };
