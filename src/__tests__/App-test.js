import React from 'react'
import { shallow } from  'enzyme'
import ConnectedApp, { App }  from '../components/App.js'
import { Provider } from 'react-redux'
import store from '../store.js'

describe( '<App />', () => {
  it('Button disable when input is empty and available when is filled', () => {
    const  app  = shallow(<App />);
    // const app = shallow(<Provider store={store}>
    //     <App />
    //   </Provider>
    // )
    expect(app.find('button').props().disabled).toEqual(true);
    app.setState({place: 'Nueva York, Estados Unidos'})
    expect(app.find('button').props().disabled).toEqual(false);
  });
});

// describe('Searchs', () => {
//     it('each search should fetch the correct result', () => {
        // hacer un llamado a la api
        // definir el valor esperado
        //

//     })
// })

// describe('search errors', () => {

// })