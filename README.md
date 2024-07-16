# Basketball Player Card

## Overview
This project contains a React component that displays information about basketball players. The component includes the player's name, image, position, and stats (points per game, assists per game, rebounds per game).

## How to Run the Project

1. Clone the repository or download the zip file.
2. Navigate to the project directory.
3. Install the dependencies by running:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm start
    ```
5. Open your browser and go to `http://localhost:3000` to see the component in action.

## Component Usage

Example usage of the `BasketballPlayerCard` component:

```jsx
<BasketballPlayerCard
  name="LeBron James"
  image="https://example.com/lebron.jpg"
  position="Forward"
  stats={{ pointsPerGame: 25.4, assistsPerGame: 7.1, reboundsPerGame: 10.5 }}
/>
