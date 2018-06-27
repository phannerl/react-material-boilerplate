import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Task from './Task';
import configureStore from 'conf/redux/redux';
import { Provider } from 'react-redux';
const { store } = configureStore();
storiesOf('Task', module)
    .addDecorator(story => <Provider store={store}>{story()}</Provider>)
    .add('pure', withInfo({ inline: true })(() => <Task tag="" tasks={['1', '2', '3']}/>));
