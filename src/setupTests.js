import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16/build';

Enzyme.configure({ adapter: new Adapter(), disableLifecycleMethods: true });
