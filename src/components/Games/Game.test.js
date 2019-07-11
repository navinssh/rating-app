import React from 'react';
import Game from "./Game";
import {Provider} from "react-redux";
import configureMockStore from "redux-mock-store";
import {shallow} from "enzyme";

const store = configureMockStore([])({});

const games = {
    "title": "Game",
    "avatar": "CallOfDuty.jpeg",
    "description": "Lorem ipsum dolor sit amet",
    "rating": 0,
    "uuid": "someGame"
};

describe('Games spec', () => {
    test('should match snapshot for available games', () => {
        const gamesComponent = shallow(
            <Provider store={store}>
                <Game game={games}/>
            </Provider>);
        expect(gamesComponent).toMatchSnapshot();
    });
});
