import React from 'react';
import classnames from 'classnames';

import './ListItem.scss';
import { IListItem } from '../../store/list/types';

interface IProps {
  item: IListItem,
  onComplete: (item: IListItem) => void,
  onDelete: (item: IListItem) => void
}

const ListItem = (props: IProps) => {
  return (
    <li
      className={classnames('list__item', {
        'completed': props.item.completed
      })}
      key={props.item.id}
    >
      <input
        type="checkbox"
        className="list__item__checkbox"
        checked={props.item.completed}
        onChange={() => props.onComplete(props.item)}
      />
      <span className="list__item__name">{props.item.name}</span>
      <span className="list__item__close" onClick={() => props.onDelete(props.item)}>&times;</span>
    </li>
  )
}

export default ListItem;
