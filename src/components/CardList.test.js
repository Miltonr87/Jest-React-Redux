import { shallow } from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('expect to render CardList component 2', () => {
    const mockRobots = [
        {
            id: 1,
            name: 'John Snow',
            username: 'JohJohn',
            email: 'John@gmail.com'
        }
    ] // dados mockados de acordo com o que se espera da props em CardList 
    expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
    // tira uma foto do sistema e impede falhas em futuras atualizações
});