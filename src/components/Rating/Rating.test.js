import React from 'react';
import Rating from "./Rating";
import {shallow} from "enzyme";

describe('Rating spec', () => {
    const onclickMock = jest.fn();
    test('should match snapshot for rating', () => {
        const ratingComponent = shallow(<Rating rating={3} onClick={onclickMock}/>);
        expect(ratingComponent).toMatchSnapshot();
    });

    test('if only 3 stars are active', () => {
        const ratingComponent = shallow(<Rating rating={3} onClick={onclickMock}/>);
        expect(ratingComponent.find('.rating--star.active')).toHaveLength(3);
    });

    test('if each star is called with respective rating', () => {
        const ratingComponent = shallow(<Rating rating={3} onClick={onclickMock}/>);
        ratingComponent.find('.rating--star').forEach((node, index) => {
            node.simulate('click');
            expect(onclickMock).toHaveBeenCalledWith(index + 1);
        });
    });
});
