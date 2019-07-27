export const ADD_ITEM = 'ADD_ITEM';
export const COMPLETE_ITEM = 'COMPLETE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

export interface IListItem {
  id: number,
  name: string,
  completed: boolean
}

export interface IListState {
  items: IListItem[]
}
