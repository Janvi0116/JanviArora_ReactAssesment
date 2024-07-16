import React from 'react';
import BasketballPlayerCard from './components/BasketballPlayerCard';
import './App.css';

function App() {
  const players = [
    {
      name: 'LeBron James',
      image: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/LeBron_James_%2851959977144%29_%28cropped2%29.jpg',
      position: 'Forward',
      stats: {
        pointsPerGame: 25.4,
        assistsPerGame: 7.1,
        reboundsPerGame: 10.5,
      },
    },
    {
      name: 'Kevin Durant',
      image: 'https://media.gettyimages.com/id/1395057957/photo/boston-celtics-v-brooklyn-nets-game-four.jpg?s=2048x2048&w=gi&k=20&c=bwZPymBJxLOTJNB9KleVvGRKVrE6ZFBbeQOAqgThxmk=',
      position: 'Forward',
      stats: {
        pointsPerGame: 27.0,
        assistsPerGame: 5.4,
        reboundsPerGame: 7.1,
      },
    },
    {
      name: 'Stephen Curry',
      image: 'https://media.gettyimages.com/id/1486868262/photo/golden-state-warriors-v-sacramento-kings-game-seven.jpg?s=2048x2048&w=gi&k=20&c=FY6SgglfCA2HMvGZCHGToun6LSS_I5UhgKNYKApyaNA=',
      position: 'Guard',
      stats: {
        pointsPerGame: 26.5,
        assistsPerGame: 6.3,
        reboundsPerGame: 5.2,
      },
    },
  ];

  return (
    <div className="App">
      {players.map((player, index) => (
        <BasketballPlayerCard
          key={index}
          name={player.name}
          image={player.image}
          position={player.position}
          stats={player.stats}
        />
      ))}
    </div>
  );
}

export default App;
