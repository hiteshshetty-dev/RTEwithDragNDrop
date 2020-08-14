import React from 'react';
import { Editable } from 'slate-react'

const TextEditor = (props) => {

    return (
        <Editable
            renderElement={props.renderElement}
            renderLeaf={props.renderLeaf}
            placeholder="Enter some rich text…"
            spellCheck
            autoFocus
            onKeyDown={props.onKeyDown}

        />

    )
}
export default TextEditor;




