import React from 'react';
import { render } from '@testing-library/react';
import Signup from '../Signup';
import Login from '../Login';

describe('Login', () => {
    test('renders the Login component', () => {
      render( Login );
    });
  });

test ('test', ()=>{
    expect(true).toBe(true);
})

