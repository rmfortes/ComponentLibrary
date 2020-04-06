import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button.js';

let onClick = (x) => {
    console.log("I've Been Clicked!");
    this.setState({
        clicked: true
    });
}

storiesOf('Button', module)
    .add('Primary', () => <Button
        label="Do Something"
        type="primary"
        onClick={onClick}
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