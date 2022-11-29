import {
  cancelled,
  complete,
  pending,
  inprogress,
  scheduled,
} from "../images/Orders";

export const orderDisplayText = {
  PENDING: { label: "Order is Pending", icon: pending },
  CANCELLED: {
    label: "Order Cancelled",
    icon: cancelled,
    status: "This order has been cancelled",
  },
  COMPLETED: { label: "Order Completed", icon: complete },
  SUCCESS: { label: "Success", icon: complete },
  ENROUTE_PICKUP: { label: "Going to Pickup", icon: inprogress },
  REACHED_PICKUP: { label: "Reached Pickup", icon: inprogress },
  ENROUTE_DROP: { label: "Going to Delivery", icon: inprogress },
  REACHED_DROP: { label: "Reached Delivery", icon: inprogress },
  SCHEDULED: { label: "Scheduled Order", icon: scheduled },
};

export const ORDER_STATUS = {
  PENDING: "PENDING",
  SCHEDULED: "SCHEDULED",
  CANCELLED: "CANCELLED",
  ENROUTE_PICKUP: "ENROUTE_PICKUP",
  REACHED_PICKUP: "REACHED_PICKUP",
  ENROUTE_DROP: "ENROUTE_DROP",
  REACHED_DROP: "REACHED_DROP",
  COMPLETED: "COMPLETED",
};

export const ORDER_STEPS = {
  TOTAL: 4,
  PENDING: 0,
  SCHEDULED: 0,
  ENROUTE_PICKUP: 1,
  REACHED_PICKUP: 2,
  ENROUTE_DROP: 3,
  REACHED_DROP: 4,
  CANCELLED: 6,
  COMPLETED: 6,
};

export const deliveryTimeline = {
  [ORDER_STATUS.PENDING]: {
    label: "Order Placed",
    body: "Your delivery request has been created",
    match: "createdAt",
  },
  [ORDER_STATUS.ENROUTE_PICKUP]: {
    label: "Driver Assigned",
    body: "We have found a driver for your delivery",
    match: "enroutePickupAt",
  },
  [ORDER_STATUS.REACHED_PICKUP]: {
    label: "Driver Reached Pickup",
    body: "The driver is at the pickup location",
    match: "reachedPickupAt",
  },
  [ORDER_STATUS.ENROUTE_DROP]: {
    label: "Driver On Route",
    body: "The driver is on their way to the dropoff location",
    match: "enrouteDropAt",
  },
  [ORDER_STATUS.REACHED_DROP]: {
    label: "Driver Reached Dropoff",
    body: "The driver is at the dropoff location",
    match: "reachedDropAt",
  },
  [ORDER_STATUS.COMPLETED]: {
    label: "Delivery Completed!",
    match: "completedAt",
    body: "Your order has been delivered!",

  },
  [ORDER_STATUS.CANCELLED]: {
    label: "Delivery has been Cancelled!",
    match: "cancelledAt",
    body: "This order was cancelled.",
  },
};
