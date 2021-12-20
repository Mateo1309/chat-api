import {Entity, model, property} from '@loopback/repository';
import {Message} from './message.model';

@model()
export class Chat extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'array',
    itemType: 'string',
    default: [],
  })
  users?: string[];

  @property({
    type: 'array',
    itemType: 'any',
    default: [],
  })
  messages?: Message[];


  constructor(data?: Partial<Chat>) {
    super(data);
  }
}

export interface ChatRelations {
  // describe navigational properties here
}

export type ChatWithRelations = Chat & ChatRelations;
