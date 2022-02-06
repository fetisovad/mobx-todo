import React from 'react';
import { observer } from 'mobx-react';

const List = ({todos}) => {
  console.log(todos)
  return (
    <ul>
        {!!todos && todos.length > 0
          ? todos.map((t) => <li key={t.id}>{t.title}</li>)
          : 'Loading...'}
      </ul>
  );
};

export default observer(List);