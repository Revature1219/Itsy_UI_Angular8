import { EtsyMessage } from './etsymessage';

export class EtsyConversation {
    id: number;
    customer: number;
    seller: number;//change these to users;
    messages: EtsyMessage[];
    closed: boolean;
  }