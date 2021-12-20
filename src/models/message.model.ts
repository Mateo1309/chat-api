import {Model, model, property} from '@loopback/repository';

@model()
export class Message extends Model {
  @property({
    type: 'string',
    required: true,
  })
  text: string;

  @property({
    type: 'date',
  })
  sent?: string;

  @property({
    type: 'string',
    required: true,
  })
  userId: string;


  constructor(data?: Partial<Message>) {
    super(data);
  }
}

export interface MessageRelations {
  // describe navigational properties here
}

export type MessageWithRelations = Message & MessageRelations;
