import React from 'react';
import PropTypes from "prop-types";

export const Statistics = ({ title = '', stats }) => {
    //функцию для генерации случайного цвета.
    function setRandomColor() {
        return `rgb( 
            ${Math.floor(Math.random() * 256)},
            ${Math.floor(Math.random() * 256)},
            ${Math.floor(Math.random() * 256)})`;
    }
    return (
        <section class="statistics">
           {title && <h2 class="title">{title}</h2>}

            <ul class="stat-list">
                {stats.map(item => (
                    <li class="item" key={item.id} style={{ backgroundColor: setRandomColor() }}>
                                <span class="label">{item.label}</span>
                                <span class="percentage">{item.percentage}%</span>
                    </li>)
                )}
            </ul>
        </section>
    );
};

Statistics.defaultProps = {
  title: '',
}

Statistics.propTypes = {
    title : PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }).isRequired,
    ).isRequired,
};