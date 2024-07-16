import React from 'react';
import './BasketballPlayerCard.css';

const BasketballPlayerCard = ({ name, image, position, stats }) => {
  return (
    <div className="player-card">
      <div className="player-image-wrapper">
        <img src={image} alt={name} className="player-image" />
      </div>
      <div className="player-info">
        <h2 className="player-name">{name}</h2>
        <p className="player-position">{position}</p>
        <div className="player-stats">
          <p><strong>PPG:</strong> {stats.pointsPerGame}</p>
          <p><strong>APG:</strong> {stats.assistsPerGame}</p>
          <p><strong>RPG:</strong> {stats.reboundsPerGame}</p>
        </div>
      </div>
    </div>
  );
};

export default BasketballPlayerCard;
