import React from 'react';
import Games from './Games';
import {shallow} from "enzyme";
import Game from "./Game";

const games = {
    "someGame": {
        "title": "Game",
        "avatar": "CallOfDuty.jpeg",
        "description": "Lorem ipsum dolor sit amet",
        "rating": 0,
        "uuid": "someGame"
    }
};

describe('Games spec', () => {
    test('should match snapshot for available games', () => {
        const gamesComponent = shallow(<Games games={games}/>);
        expect(gamesComponent).toMatchSnapshot();
    });
    test('should have rendered 1 game', () => {
        const gamesComponent = shallow(<Games games={games}/>);
        const game = gamesComponent.find(Game);
        expect(game).toHaveLength(1);
    });
});
