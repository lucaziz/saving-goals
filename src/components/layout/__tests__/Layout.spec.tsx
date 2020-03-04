import React from 'react';
import { shallow } from 'enzyme';
import Layout from '../Layout';

describe('Layout', () => {
  it('render children properly inside of component', () => {
    const expectedChildren = <div>Expected Content</div>;
    const defaultLayout = shallow(<Layout>{expectedChildren}</Layout>);

    expect(defaultLayout.contains(expectedChildren)).toEqual(true);
  });
});
