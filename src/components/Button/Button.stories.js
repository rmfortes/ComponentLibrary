import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button.js';

storiesOf('Button', module)
    .add('Primary', () => <Button
        label="Do Something"
        type="primary"
    />)
    .add('Danger', () => <Button
        label="Do Something"
        type="danger"
    />)
    .add('Success', () => <Button
        label="Do something"
        type="success"
    />)
    .add('Warning', () => <Button
        label="Do Something"
        type="warning"
    />)
    .add('Default', () => <Button
        label="Do Something"
        type="default"
    />)
    .add('Large Primary', () => <Button
        label="Do Something"
        type="primary"
        large
    />)
    .add('Large Danger', () => <Button
        label="Do Something"
        type="danger"
        large
    />)
    .add('Large Success', () => <Button
        label="Do Something"
        type="success"
        large
    />)
    .add('Large Warning', () => <Button
        label="Do Something"
        type="warning"
        large
    />)
    .add('Large Default', () => <Button
        label="Do Something"
        type="default"
        large
    />)
    .add('Primary Outline', () => <Button
        label="Do Something"
        type="primary-outline"
    />)
    .add('Danger Outline', () => <Button
        label="Do Something"
        type="danger-outline"
    />)
    .add('Success Outline', () => <Button
        label="Do Something"
        type="success-outline"
    />)
    .add('Warning Outline', () => <Button
        label="Do Something"
        type="warning-outline"
    />)
    .add('Default Outline', () => <Button
        label="Do Something"
        type="default-outline"
    />)
    .add('Primary Inline', () => <Button
        label="Do Something"
        type="primary-inline"
    />)
    .add('Danger Inline', () => <Button
        label="Do Something"
        type="danger-inline"
    />)
    .add('Success Inline', () => <Button
        label="Do Something"
        type="success-inline"
    />)
    .add('Warning Inline', () => <Button
        label="Do Something"
        type="warning-inline"
    />)
    .add('Default Inline', () => <Button
        label="Do Something"
        type="default-inline"
    />)
    .add('Large Primary Outline', () => <Button
        label="Do Something"
        type="primary-outline"
        large
    />)
    .add('Large Danger Outline', () => <Button
        label="Do Something"
        type="danger-outline"
        large
    />)
    .add('Large Success Outline', () => <Button
        label="Do Something"
        type="success-outline"
        large
    />)
    .add('Large Warning Outline', () => <Button
        label="Do Something"
        type="warning-outline"
        large
    />)
    .add('Large Default Outline', () => <Button
        label="Do Something"
        type="default-outline"
        large
    />)
    .add('Large Primary Inline', () => <Button
        label="Do Something"
        type="primary-inline"
        large
    />)
    .add('Large Danger Inline', () => <Button
        label="Do Something"
        type="danger-inline"
        large
    />)
    .add('Large Success Inline', () => <Button
        label="Do Something"
        type="success-inline"
        large
    />)
    .add('Large Warning Inline', () => <Button
        label="Do Something"
        type="warning-inline"
        large
    />)
    .add('Large Default Inline', () => <Button
        label="Do Something"
        type="default-inline"
        large
    />)