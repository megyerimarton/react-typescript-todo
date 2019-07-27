import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../store';

import './List.scss';
import ListItem from './list/ListItem';
import { IListItem, IListState } from '../store/list/types';
import { addItem, completeItem, deleteItem } from '../store/list/actions';

const List = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const list = useSelector((state: AppState) => state.list.items);

  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  const onInputEnterKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  }

  const onSubmit = () => {
    if (text.length === 0) return;

    const item = {
      id: list.length,
      completed: false,
      name: text
    }

    dispatch(addItem(item));

    setText('');
  }

  const onComplete = (item: IListItem) => {
    dispatch(completeItem(item));
  }

  const onDelete = (item: IListItem) => {
    dispatch(deleteItem(item));
  }

  const renderList = () => {
    return list.map((item: IListItem, index: number) => (
      <ListItem
        item={item}
        onComplete={onComplete}
        onDelete={onDelete}
      />
    ));
  }

  return (
    <div className="list">
      <div className="list__input-wrap">
        <input
          type="text"
          name="text"
          value={text}
          onChange={onTextChange}
          onKeyPress={onInputEnterKeyPress}
        />
        <button onClick={onSubmit}>Add</button>
      </div>
      <ul>
        {renderList()}
      </ul>
    </div>
  )
}

export default List;
