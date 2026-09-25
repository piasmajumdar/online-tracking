export const data =
{
  "orders": [
    {
      "orderId": "QD-100001",
      "status": "in_transit",

      "order": {
        "placedAt": "2026-09-25T10:30:00+06:00",
        "estimatedDelivery": {
          "type": "time_range",
          "label": "Today",
          "date": "2026-09-25",
          "time": "6:00–8:00 PM"
        }
      },

      "currentStatus": {
        "stage": "on_the_way",
        "title": "On the way",
        "description": "Your package is currently being transported to the destination city.",
        "type": "info"
      },

      "progress": [
        {
          "id": "processing",
          "label": "Processing",
          "status": "completed"
        },
        {
          "id": "shipped",
          "label": "Shipped",
          "status": "completed"
        },
        {
          "id": "on_the_way",
          "label": "On the Way",
          "status": "current"
        },
        {
          "id": "out_for_delivery",
          "label": "Out for Delivery",
          "status": "upcoming"
        },
        {
          "id": "delivered",
          "label": "Delivered",
          "status": "upcoming"
        }
      ],

      "tracking": {
        "available": true,
        "events": [
          {
            "id": "EVT-001",
            "title": "Order placed",
            "description": "Your order has been confirmed.",
            "location": null,
            "timestamp": "2026-09-25T10:30:00+06:00",
            "status": "completed"
          },
          {
            "id": "EVT-002",
            "title": "Package picked up",
            "description": "The courier has picked up your package.",
            "location": "Dhaka",
            "timestamp": "2026-09-25T11:45:00+06:00",
            "status": "completed"
          },
          {
            "id": "EVT-003",
            "title": "Dhaka Courier Hub",
            "description": "Package arrived at the courier hub.",
            "location": "Dhaka",
            "timestamp": "2026-09-25T14:20:00+06:00",
            "status": "completed"
          },
          {
            "id": "EVT-004",
            "title": "Dispatched to Chittagong",
            "description": "Package has left the Dhaka hub.",
            "location": "Dhaka",
            "timestamp": "2026-09-25T16:10:00+06:00",
            "status": "completed"
          },
          {
            "id": "EVT-005",
            "title": "Chittagong Hub",
            "description": "Package is currently at the Chittagong courier hub.",
            "location": "Chittagong",
            "timestamp": "2026-09-25T18:15:00+06:00",
            "status": "current"
          },
          {
            "id": "EVT-006",
            "title": "Out for delivery",
            "description": "Package will be delivered to your address.",
            "location": "Chittagong",
            "timestamp": null,
            "status": "upcoming"
          },
          {
            "id": "EVT-007",
            "title": "Delivered",
            "description": "Package delivered successfully.",
            "location": null,
            "timestamp": null,
            "status": "upcoming"
          }
        ]
      },

      "product": {
        "name": "Wireless Headphones",
        "image": "/products/wireless-headphones.jpg",
        "quantity": 1,
        "unitPrice": 2499,
        "currency": "BDT"
      },

      "pricing": {
        "subtotal": 2499,
        "deliveryFee": 0,
        "total": 2499,
        "currency": "BDT"
      },

      "issue": null,

      "support": {
        "contactAvailable": true,
        "actions": [
          {
            "id": "contact_support",
            "label": "Contact Support",
            "type": "support"
          },
          {
            "id": "report_issue",
            "label": "Report Delivery Issue",
            "type": "report_issue"
          }
        ]
      }
    },

    {
      "orderId": "QD-100002",
      "status": "delayed",

      "order": {
        "placedAt": "2026-09-25T10:30:00+06:00",
        "estimatedDelivery": {
          "type": "delayed",
          "label": "Tomorrow",
          "date": "2026-09-26",
          "time": "2:00–5:00 PM",
          "originalDate": "2026-09-25",
          "originalTime": "6:00–8:00 PM"
        }
      },

      "currentStatus": {
        "stage": "delayed",
        "title": "Delivery Delayed",
        "description": "Your order is taking longer than expected.",
        "type": "warning"
      },

      "progress": [
        {
          "id": "processing",
          "label": "Processing",
          "status": "completed"
        },
        {
          "id": "shipped",
          "label": "Shipped",
          "status": "completed"
        },
        {
          "id": "on_the_way",
          "label": "On the Way",
          "status": "completed"
        },
        {
          "id": "out_for_delivery",
          "label": "Out for Delivery",
          "status": "current"
        },
        {
          "id": "delivered",
          "label": "Delivered",
          "status": "upcoming"
        }
      ],

      "tracking": {
        "available": true,
        "events": [
          {
            "id": "EVT-101",
            "title": "Order placed",
            "description": "Your order has been confirmed.",
            "location": null,
            "timestamp": "2026-09-25T10:30:00+06:00",
            "status": "completed"
          },
          {
            "id": "EVT-102",
            "title": "Package picked up",
            "description": "The courier has picked up your package.",
            "location": "Dhaka",
            "timestamp": "2026-09-25T11:45:00+06:00",
            "status": "completed"
          },
          {
            "id": "EVT-103",
            "title": "Dhaka Courier Hub",
            "description": "Package arrived at the courier hub.",
            "location": "Dhaka",
            "timestamp": "2026-09-25T14:20:00+06:00",
            "status": "completed"
          },
          {
            "id": "EVT-104",
            "title": "Dispatched to Chittagong",
            "description": "Package has left the Dhaka hub.",
            "location": "Dhaka",
            "timestamp": "2026-09-25T16:10:00+06:00",
            "status": "completed"
          },
          {
            "id": "EVT-105",
            "title": "Chittagong Hub",
            "description": "Delayed — awaiting transportation.",
            "location": "Chittagong",
            "timestamp": "2026-09-25T18:15:00+06:00",
            "status": "delayed"
          },
          {
            "id": "EVT-106",
            "title": "Out for delivery",
            "description": null,
            "location": null,
            "timestamp": null,
            "status": "upcoming"
          },
          {
            "id": "EVT-107",
            "title": "Delivered",
            "description": null,
            "location": null,
            "timestamp": null,
            "status": "upcoming"
          }
        ]
      },

      "product": {
        "name": "Wireless Headphones",
        "image": "/products/wireless-headphones.jpg",
        "quantity": 1,
        "unitPrice": 2499,
        "currency": "BDT"
      },

      "pricing": {
        "subtotal": 2499,
        "deliveryFee": 0,
        "total": 2499,
        "currency": "BDT"
      },

      "issue": {
        "type": "delay",
        "title": "Delivery delayed",
        "description": "Your order has passed its original estimated delivery time.",
        "severity": "warning"
      },

      "support": {
        "contactAvailable": true,
        "actions": [
          {
            "id": "contact_support",
            "label": "Contact Support",
            "type": "support"
          },
          {
            "id": "report_issue",
            "label": "Report Delivery Issue",
            "type": "report_issue"
          }
        ]
      }
    },

    {
      "orderId": "QD-100003",
      "status": "delivered_not_received",

      "order": {
        "placedAt": "2026-09-24T10:30:00+06:00",
        "estimatedDelivery": {
          "type": "delivered",
          "label": "Delivered",
          "date": "2026-09-25",
          "time": "3:42 PM"
        }
      },

      "currentStatus": {
        "stage": "delivered",
        "title": "Marked as Delivered",
        "description": "Your package was marked as delivered, but you reported that you haven't received it.",
        "type": "success"
      },

      "progress": [
        {
          "id": "processing",
          "label": "Processing",
          "status": "completed"
        },
        {
          "id": "shipped",
          "label": "Shipped",
          "status": "completed"
        },
        {
          "id": "on_the_way",
          "label": "On the Way",
          "status": "completed"
        },
        {
          "id": "out_for_delivery",
          "label": "Out for Delivery",
          "status": "completed"
        },
        {
          "id": "delivered",
          "label": "Delivered",
          "status": "current"
        }
      ],

      "tracking": {
        "available": true,
        "events": [
          {
            "id": "EVT-201",
            "title": "Order placed",
            "description": "Your order has been confirmed.",
            "location": null,
            "timestamp": "2026-09-24T10:30:00+06:00",
            "status": "completed"
          },
          {
            "id": "EVT-202",
            "title": "Package picked up",
            "description": "The courier has picked up your package.",
            "location": "Dhaka",
            "timestamp": "2026-09-24T12:15:00+06:00",
            "status": "completed"
          },
          {
            "id": "EVT-203",
            "title": "Dhaka Courier Hub",
            "description": "Package arrived at the courier hub.",
            "location": "Dhaka",
            "timestamp": "2026-09-24T16:20:00+06:00",
            "status": "completed"
          },
          {
            "id": "EVT-204",
            "title": "Dispatched to Chittagong",
            "description": "Package has left the Dhaka hub.",
            "location": "Dhaka",
            "timestamp": "2026-09-25T10:10:00+06:00",
            "status": "completed"
          },
          {
            "id": "EVT-205",
            "title": "Chittagong Hub",
            "description": "Package arrived at the destination hub.",
            "location": "Chittagong",
            "timestamp": "2026-09-25T13:30:00+06:00",
            "status": "completed"
          },
          {
            "id": "EVT-206",
            "title": "Out for delivery",
            "description": "Package was sent for final delivery.",
            "location": "Chittagong",
            "timestamp": "2026-09-25T14:15:00+06:00",
            "status": "completed"
          },
          {
            "id": "EVT-207",
            "title": "Delivered",
            "description": "Package was marked as delivered.",
            "location": null,
            "timestamp": "2026-09-25T15:42:00+06:00",
            "status": "completed"
          }
        ]
      },

      "product": {
        "name": "Wireless Headphones",
        "image": "/products/wireless-headphones.jpg",
        "quantity": 1,
        "unitPrice": 2499,
        "currency": "BDT"
      },

      "pricing": {
        "subtotal": 2499,
        "deliveryFee": 0,
        "total": 2499,
        "currency": "BDT"
      },

      "issue": {
        "type": "delivery_not_received",
        "title": "Didn't receive your package?",
        "description": "The courier marked this order as delivered, but you reported that you haven't received it.",
        "severity": "warning"
      },

      "support": {
        "contactAvailable": true,
        "actions": [
          {
            "id": "report_missing_delivery",
            "label": "Report Missing Delivery",
            "type": "report_issue"
          },
          {
            "id": "contact_support",
            "label": "Contact Support",
            "type": "support"
          }
        ]
      }
    },

    {
      "orderId": "QD-100004",
      "status": "tracking_unavailable",

      "order": {
        "placedAt": "2026-09-25T10:30:00+06:00",
        "estimatedDelivery": {
          "type": "date_range",
          "label": "28–30 September",
          "from": "2026-09-28",
          "to": "2026-09-30"
        }
      },

      "currentStatus": {
        "stage": "processing",
        "title": "Tracking not available yet",
        "description": "Your order has been confirmed, but tracking information isn't available yet. We'll update this page once your package is handed over to the courier.",
        "type": "info"
      },

      "progress": [
        {
          "id": "processing",
          "label": "Processing",
          "status": "current"
        },
        {
          "id": "shipped",
          "label": "Shipped",
          "status": "upcoming"
        },
        {
          "id": "on_the_way",
          "label": "On the Way",
          "status": "upcoming"
        },
        {
          "id": "out_for_delivery",
          "label": "Out for Delivery",
          "status": "upcoming"
        },
        {
          "id": "delivered",
          "label": "Delivered",
          "status": "upcoming"
        }
      ],

      "tracking": {
        "available": false,
        "events": [
          {
            "id": "EVT-301",
            "title": "Order placed",
            "description": "Your order has been confirmed.",
            "location": null,
            "timestamp": "2026-09-25T10:30:00+06:00",
            "status": "completed"
          },
          {
            "id": "EVT-302",
            "title": "Preparing shipment",
            "description": "Your package is being prepared.",
            "location": null,
            "timestamp": null,
            "status": "current"
          },
          {
            "id": "EVT-303",
            "title": "Package picked up",
            "description": null,
            "location": null,
            "timestamp": null,
            "status": "upcoming"
          },
          {
            "id": "EVT-304",
            "title": "Courier Hub",
            "description": null,
            "location": null,
            "timestamp": null,
            "status": "upcoming"
          },
          {
            "id": "EVT-305",
            "title": "Out for delivery",
            "description": null,
            "location": null,
            "timestamp": null,
            "status": "upcoming"
          },
          {
            "id": "EVT-306",
            "title": "Delivered",
            "description": null,
            "location": null,
            "timestamp": null,
            "status": "upcoming"
          }
        ]
      },

      "product": {
        "name": "Wireless Headphones",
        "image": "/products/wireless-headphones.jpg",
        "quantity": 1,
        "unitPrice": 2499,
        "currency": "BDT"
      },

      "pricing": {
        "subtotal": 2499,
        "deliveryFee": 0,
        "total": 2499,
        "currency": "BDT"
      },

      "issue": null,

      "support": {
        "contactAvailable": true,
        "actions": [
          {
            "id": "contact_support",
            "label": "Contact Support",
            "type": "support"
          }
        ]
      }
    }
  ]
};
