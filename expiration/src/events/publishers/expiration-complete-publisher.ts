import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@salar-tickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
