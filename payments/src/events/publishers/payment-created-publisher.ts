import {
  Subjects,
  Publisher,
  PaymentCreatedEvent,
} from '@salar-tickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
