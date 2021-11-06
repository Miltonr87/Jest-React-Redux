import { shallow } from 'enzyme';
import React from 'react';
import Card from './Card';

it('expect to render Card component', () => {
    expect(shallow(<Card />).length).toEqual(1);
    // verifica se somente 1 componente em Card está sendo renderizado
});

it('expect to render Card component 2', () => {
    expect(shallow(<Card />)).toMatchSnapshot();
    // tira uma foto do sistema e impede falhas em futuras atualizações
});

