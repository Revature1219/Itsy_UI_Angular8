import { EtsyConversation } from './etsyconversation';

export class EtsyMessage {
    id: number;
    date: Date;
    sender: number;//change to user
    message: String;
    read: boolean;
    conversation: EtsyConversation;
  }