import * as React from 'react';
import * as ReactDom from 'react-dom';

export function mount(parent: HTMLElement) {
    ReactDom.render(<h1></h1>, parent);
}
