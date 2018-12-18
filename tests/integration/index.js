/* eslint-disable no-undef */
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';
import { reducer as formReducer } from 'redux-form';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import ContactFormContainer from '../../src/containers/ContactFormContainer';

describe('ContactContainer', () => {
  let store;
  let onSave;
  let subject;
  beforeEach(() => {
    store = createStore(combineReducers({ form: formReducer }));
    onSave = sinon.stub().returns(Promise.resolve());
    const props = {
      onSave,
    };
    subject = mount(
      <Provider store={store}>
        <ContactFormContainer {...props} />
      </Provider>,
    );
  });

  it('calls onSave after being submitted', () => {
    const form = subject.find('form');
    const input = subject.find('input').first();
    const textArea = subject.find('textarea');
    const secondInput = subject.find('input').at(1);

    // Our form, when connected to Redux-Form, won't submit unless it's
    // valid. Here we enter the needed values.
    input.simulate('change', { target: { value: 'Joe' } });
    textArea.simulate('change', { target: { value: 'Hi, how are you today?' } });
    secondInput.simulate('change', { target: { value: 'carsten.behrens1@googlemail.com' } });
    form.simulate('submit');
    expect(onSave.callCount).to.equal(1);
  });
});
