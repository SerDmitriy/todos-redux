import React from 'react';
import { connect } from 'react-redux';
import './TodoStatistic.css';
import { actions } from '../../../actions/rootActions'

export default ({ todos }) => {
  return (
    <React.Fragment>
      <span>N items left </span>
      <button type="button">All</button>
      <button type="button">Active</button>
      <button type="button">Completed</button>

      <button type="button">Clear completed</button>
    </React.Fragment>
  );
}
