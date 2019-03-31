import { ADD_ITEM, COMPLETE_ITEM, DELETE_ITEM } from './types';
import { IListItem } from './types';

export const addItem = (item: IListItem) => {
  return {
    type: ADD_ITEM,
    payload: item
  };
}

export const completeItem = (item: IListItem) => {
  return {
    type: COMPLETE_ITEM,
    payload: item
  };
}

export const deleteItem = (item: IListItem) => {
  return {
    type: DELETE_ITEM,
    payload: item
  };
}
