import React from 'react';
import PropTypes from "prop-types";

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
                {items.map(item => (
                        <tr className={css.trCell} key={item.id}>
                        <td className={css.tdCell}>{item.type}</td>
                            <td className={css.tdCell}>{item.amount}</td>
                            <td className={css.tdCell}>{item.currency}</td>
                        </tr>))
                }
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
        }).isRequired,
    ).isRequired,
};