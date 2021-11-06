import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

// Digita "yarn test -- --coverage" pra saber quantos % de cobertura os testes estão antigindo por cada componente do projeto.
