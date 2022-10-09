import React from 'react';
import PropTypes from 'prop-types';

import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => (
  <table className={css.tableTransaction}>
    <thead className={css.header}>
      <tr>
        <th className={css.thCell}>Type</th>
        <th className={css.thCell}>Amount</th>
        <th className={css.thCell}>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <tr className={css.trCell} key={id}>
          <td className={css.tdCell}>{type}</td>
          <td className={css.tdCell}>{amount}</td>
          <td className={css.tdCell}>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
