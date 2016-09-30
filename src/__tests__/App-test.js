import React from 'react'
import { shallow } from  'enzyme'
import App from '../components/App.js'

// jest.mock('localStorage', () => {
//   const localStorage = localStorage ||
//   {
//     getItem() {
//       return "{}";
//     }
//   };
//   return localStorage
// })

describe( '<App />', () => {
  it('Button disable when input is empty and available when is filled', () => {
    const app = shallow(
      <App />
    );
    expect(app.find('button').props().disabled).toEqual(true);
    app.setState({place: 'Nueva York, Estados Unidos'})
    expect(app.find('button').props().disabled).toEqual(false);
  });
});
