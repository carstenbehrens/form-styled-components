/* eslint-disable no-undef */
// To test the entire component (integration tests), we're going to use Enzyme's `mount` method,
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import jsdom from 'jsdom';

configure({ adapter: new Adapter() });
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = window.navigator;
