import React, { Component } from 'react';
import { connect } from 'react-redux';

import './List.scss';
import ListItem from './list/ListItem';
import { IListItem, IState as IListState } from '../store/list/types';
import { addItem, completeItem, deleteItem } from '../store/list/actions';

interface IState {
  text: string,
}

interface IProps {
  list?: IListItem[]
  addItem?: typeof addItem,
  completeItem?: typeof completeItem,
  deleteItem?: typeof deleteItem
}

const mapStateToProps = (state: any) => ({
  list: state.list.items
});

@(connect(mapStateToProps, { addItem, completeItem, deleteItem }) as any)
class List extends Component<IProps, IState, ReduxType> {
  state = {
    text: '',
    list: []
  }

  onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ text: e.target.value });
  }

  onInputEnterKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      this.onSubmit();
    }
  }

  onSubmit = () => {
    if (this.state.text.length === 0) return;

    const item = {
      id: this.props.list!.length,
      completed: false,
      name: this.state.text
    }

    this.props.addItem!(item);

    this.setState({ text: '' });
  }

  onComplete = (item: IListItem) => {
    this.props.completeItem!(item);
  }

  onDelete = (item: IListItem) => {
    this.props.deleteItem!(item);
  }

  renderList = () => {
    return this.props.list!.map((item: IListItem, index: number) => (
      <ListItem
        item={item}
        onComplete={this.onComplete}
        onDelete={this.onDelete}
      />
    ));
  }

  render() {
    return (
      <div className="list">
        <div className="list__input-wrap">
          <input
            type="text"
            name="text"
            value={this.state.text}
            onChange={this.onTextChange}
            onKeyPress={this.onInputEnterKeyPress}
          />
          <button onClick={this.onSubmit}>Add</button>
        </div>
        <ul>
          {this.renderList()}
        </ul>
      </div>
    )
  }
}

type ReduxType = ReturnType<typeof mapStateToProps>;

export default List;
