import { ADD_ITEM, COMPLETE_ITEM, DELETE_ITEM, IListItem, IListState } from './types';

const initialState: IListState = {
  items: []
};

interface IAction {
  type: string,
  payload: IListItem
}

export default function(state = initialState, action: IAction) {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [ action.payload, ...state.items ]
      }

    case COMPLETE_ITEM:
      return {
        ...state,
        items: state.items.map((item: IListItem) => ({
          id: item.id,
          completed: (item.id === action.payload.id) ? !item.completed : item.completed,
          name: item.name
        }))
      }

    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item: IListItem) => item.id !== action.payload.id)
      }

    default:
      return state;
  }
}
