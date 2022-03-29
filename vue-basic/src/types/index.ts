import { InjectionKey } from 'vue';
import { Emitter } from 'mitt';

export type itemType = {
  id: string;
  text: string;
  check: boolean;
};

export type eventType = {
  'on-item-add': itemType;
  'on-item-check': number;
  'on-item-remove': number;
  'on-item-clear': void;
};
export type emitterType = Emitter<eventType>;
export const emitterKey: InjectionKey<Emitter<eventType>> = Symbol('emitter');
