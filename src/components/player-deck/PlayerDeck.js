import React from 'react';
import './PlayerDeck.css';
import carddeck from '../cards/cards.json';
import ace_of_hearts from '../../assets/ace_of_hearts.png';
import king_of_hearts from '../../assets/king_of_hearts.png';
import queen_of_hearts from '../../assets/queen_of_hearts.png';
import jack_of_hearts from '../../assets/jack_of_hearts.png';
import ten_of_hearts from '../../assets/10_of_hearts.png';
import nine_of_hearts from '../../assets/9_of_hearts.png';
import eight_of_hearts from '../../assets/8_of_hearts.png';
import seven_of_hearts from '../../assets/7_of_hearts.png';
import six_of_hearts from '../../assets/6_of_hearts.png';
import five_of_hearts from '../../assets/5_of_hearts.png';
import four_of_hearts from '../../assets/4_of_hearts.png';
import three_of_hearts from '../../assets/3_of_hearts.png';
import two_of_hearts from '../../assets/2_of_hearts.png';
import ace_of_diamonds from '../../assets/ace_of_diamonds.png';
import king_of_diamonds from '../../assets/king_of_diamonds.png';
import queen_of_diamonds from '../../assets/queen_of_diamonds.png';
import jack_of_diamonds from '../../assets/jack_of_diamonds.png';
import ten_of_diamonds from '../../assets/10_of_diamonds.png';
import nine_of_diamonds from '../../assets/9_of_diamonds.png';
import eight_of_diamonds from '../../assets/8_of_diamonds.png';
import seven_of_diamonds from '../../assets/7_of_diamonds.png';
import six_of_diamonds from '../../assets/6_of_diamonds.png';
import five_of_diamonds from '../../assets/5_of_diamonds.png';
import four_of_diamonds from '../../assets/4_of_diamonds.png';
import three_of_diamonds from '../../assets/3_of_diamonds.png';
import two_of_diamonds from '../../assets/2_of_diamonds.png';
import ace_of_spades from '../../assets/ace_of_spades.png';
import king_of_spades from '../../assets/king_of_spades.png';
import queen_of_spades from '../../assets/queen_of_spades.png';
import jack_of_spades from '../../assets/jack_of_spades.png';
import ten_of_spades from '../../assets/10_of_spades.png';
import nine_of_spades from '../../assets/9_of_spades.png';
import eight_of_spades from '../../assets/8_of_spades.png';
import seven_of_spades from '../../assets/7_of_spades.png';
import six_of_spades from '../../assets/6_of_spades.png';
import five_of_spades from '../../assets/5_of_spades.png';
import four_of_spades from '../../assets/4_of_spades.png';
import three_of_spades from '../../assets/3_of_spades.png';
import two_of_spades from '../../assets/2_of_spades.png';
import ace_of_clubs from '../../assets/ace_of_clubs.png';
import king_of_clubs from '../../assets/king_of_clubs.png';
import queen_of_clubs from '../../assets/queen_of_clubs.png';
import jack_of_clubs from '../../assets/jack_of_clubs.png';
import ten_of_clubs from '../../assets/10_of_clubs.png';
import nine_of_clubs from '../../assets/9_of_clubs.png';
import eight_of_clubs from '../../assets/8_of_clubs.png';
import seven_of_clubs from '../../assets/7_of_clubs.png';
import six_of_clubs from '../../assets/6_of_clubs.png';
import five_of_clubs from '../../assets/5_of_clubs.png';
import four_of_clubs from '../../assets/4_of_clubs.png';
import three_of_clubs from '../../assets/3_of_clubs.png';
import two_of_clubs from '../../assets/2_of_clubs.png';

const PlayerDeck = () => {
    // Get cards
    var cards = carddeck.cards;

    // Shuffle cards
    const shuffled = cards.sort(() => 0.5 - Math.random());

    // Set amount of players
    let amountOfPlayers = 5;

    var cardsPerPlayer = Math.round(shuffled.length / amountOfPlayers);

    var players = [];
    for (let i = 0; i < amountOfPlayers; i++)
    {
        // Get a new set of cards for the player
        var shuffledCards = shuffled.slice(i * cardsPerPlayer, i * cardsPerPlayer + cardsPerPlayer);

        // Sort the cards
        var playerCards = shuffledCards.sort((a, b) => a.value - b.value || a.type.localeCompare(b.type))

        // Add them to the players list
        players.push({ index: i, cards: playerCards })
    }
    
    const RenderImg = string => {
        switch (string) {
            case "ace_of_hearts.png":
                return ace_of_hearts;
            case "king_of_hearts.png":
                return king_of_hearts;
            case "queen_of_hearts.png":
                return queen_of_hearts;
            case "jack_of_hearts.png":
                return jack_of_hearts;
            case "ten_of_hearts.png":
                return ten_of_hearts;
            case "nine_of_hearts.png":
                return nine_of_hearts;
            case "eight_of_hearts.png":
                return eight_of_hearts;
            case "seven_of_hearts.png":
                return seven_of_hearts;
            case "six_of_hearts.png":
                return six_of_hearts;
            case "five_of_hearts.png":
                return five_of_hearts;
            case "four_of_hearts.png":
                return four_of_hearts;
            case "three_of_hearts.png":
                return three_of_hearts;
            case "two_of_hearts.png":
                return two_of_hearts;
            case "ace_of_diamonds.png":
                return ace_of_diamonds;
            case "king_of_diamonds.png":
                return king_of_diamonds;
            case "queen_of_diamonds.png":
                return queen_of_diamonds;
            case "jack_of_diamonds.png":
                return jack_of_diamonds;
            case "ten_of_diamonds.png":
                return ten_of_diamonds;
            case "nine_of_diamonds.png":
                return nine_of_diamonds;
            case "eight_of_diamonds.png":
                return eight_of_diamonds;
            case "seven_of_diamonds.png":
                return seven_of_diamonds;
            case "six_of_diamonds.png":
                return six_of_diamonds;
            case "five_of_diamonds.png":
                return five_of_diamonds;
            case "four_of_diamonds.png":
                return four_of_diamonds;
            case "three_of_diamonds.png":
                return three_of_diamonds;
            case "two_of_diamonds.png":
                return two_of_diamonds;
            case "ace_of_spades.png":
                return ace_of_spades;
            case "king_of_spades.png":
                return king_of_spades;
            case "queen_of_spades.png":
                return queen_of_spades;
            case "jack_of_spades.png":
                return jack_of_spades;
            case "ten_of_spades.png":
                return ten_of_spades;
            case "nine_of_spades.png":
                return nine_of_spades;
            case "eight_of_spades.png":
                return eight_of_spades;
            case "seven_of_spades.png":
                return seven_of_spades;
            case "six_of_spades.png":
                return six_of_spades;
            case "five_of_spades.png":
                return five_of_spades;
            case "four_of_spades.png":
                return four_of_spades;
            case "three_of_spades.png":
                return three_of_spades;
            case "two_of_spades.png":
                return two_of_spades;
            case "ace_of_clubs.png":
                return ace_of_clubs; 
            case "king_of_clubs.png":
                return king_of_clubs;
            case "queen_of_clubs.png":
                return queen_of_clubs;
            case "jack_of_clubs.png":
                return jack_of_clubs;
            case "ten_of_clubs.png":
                return ten_of_clubs; 
            case "nine_of_clubs.png":
                return nine_of_clubs;
            case "eight_of_clubs.png":
                return eight_of_clubs;
            case "seven_of_clubs.png":
                return seven_of_clubs;
            case "six_of_clubs.png":
                return six_of_clubs; 
            case "five_of_clubs.png":
                return five_of_clubs;
            case "four_of_clubs.png":
                return four_of_clubs;
            case "three_of_clubs.png":
                return three_of_clubs;
            case "two_of_clubs.png":
                return two_of_clubs; 
            default: return '';
        }
    }

    const RenderCards = cards => {
        return <ul>
            {cards.map(card => (
                <li key={cards.indexOf(card)}>
                    <img style={{height: `100px`}} src={RenderImg(card.image)} alt={card.name}/>
                </li>)
            )}
        </ul>;
    }

    const RenderPlayers = () => {
        return <ul style={{flexDirection:'column'}}>
            {players.map(player => (
                <li key={player.index}>
                    {RenderCards(player.cards)}
                </li>)
        )}</ul>
    }

    return <div>
        {RenderPlayers()}
    </div>
    
}

export default PlayerDeck;