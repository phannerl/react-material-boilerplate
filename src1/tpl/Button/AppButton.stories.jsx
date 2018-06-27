import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import AppButton from './AppButton';
storiesOf('Button', module)
    .add('pure', withInfo({ inline: true })(() => <AppButton />));
