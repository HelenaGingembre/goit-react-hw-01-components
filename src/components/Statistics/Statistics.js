import React from 'react';
import PropTypes from "prop-types";

export const Statistics = ({
    data
}) => {
    return (
        <section class="statistics">
            <h2 class="title">Upload stats</h2>

            <ul class="stat-list">
                <li class="item">
                    <span class="label">.docx</span>
                    <span class="percentage">4%</span>
                </li>
                <li class="item">
                    <span class="label">.mp3</span>
                    <span class="percentage">14%</span>
                </li>
                <li class="item">
                    <span class="label">.pdf</span>
                    <span class="percentage">41%</span>
                </li>
                <li class="item">
                    <span class="label">.mp4</span>
                    <span class="percentage">12%</span>
                </li>
            </ul>
        </section>
    );
};
/*
Statistics.propTypes = {
   username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats:PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
};*/