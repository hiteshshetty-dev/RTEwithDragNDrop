import { useSlate } from 'slate-react'
import React from 'react';

import Button from '../../common/Button';
import Icon from '../../common/Icon';
import { isBlockActive, toggleBlock } from '../../../elements/paragraph/utils';
const BlockButton = ({ format, icon }) => {
    const editor = useSlate()
    return (
        <Button
            active={isBlockActive(editor, format)}
            onMouseDown={event => {
                event.preventDefault()
                toggleBlock(editor, format)
            }}
        >
            <Icon>{icon}</Icon>
        </Button>
    )
}
export default BlockButton;