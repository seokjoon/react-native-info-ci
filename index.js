/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import TestAppCom from './src/com/Test/App/TestAppCom';

AppRegistry.registerComponent(appName, () => TestAppCom);
