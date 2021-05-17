/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import {name as appName} from './app.json';
import { store } from './src/utilities/store';

const ReduxProvider = () => <App />;

AppRegistry.registerComponent(appName, () => ReduxProvider);
