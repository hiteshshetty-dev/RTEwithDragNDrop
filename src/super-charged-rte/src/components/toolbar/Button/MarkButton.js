import { useSlate } from 'slate-react'
import React from 'react';

import Button from '../../common/Button';
import Icon from '../../common/Icon';
import { toggleMark, isMarkActive } from '../../../elements/paragraph/utils';

const MarkButton = ({ format, icon }) => {
    const editor = useSlate()
    return (
        <Button
            active={isMarkActive(editor, format)}
            onMouseDown={event => {
                event.preventDefault()
                toggleMark(editor, format)
            }}
        >
            <Icon>{icon}</Icon>
        </Button>
    )
}

export default MarkButton;