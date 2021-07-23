import {
  Subjects,
  Publisher,
  OrderCancelledEvent,
} from '@salar-tickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
