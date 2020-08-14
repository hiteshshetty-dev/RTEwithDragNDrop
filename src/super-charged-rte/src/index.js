import React, { useCallback, useMemo, useContext } from 'react';
import { withReact, Slate } from 'slate-react'
import { createEditor } from 'slate'
import { withHistory } from 'slate-history'
import isHotkey from 'is-hotkey';

import { RTEContext } from '../../demo/Layout';
import Toolbar from './components/toolbar/index';
import Leaf from './elements/Common/RenderLeaf';
import { toggleMark } from './elements/paragraph/utils';
import Element from './elements/Common/RenderElement'
import { TextEditor } from './elements/index';


const HOTKEYS = {
    'mod+b': 'bold',
    'mod+i': 'italic',
    'mod+u': 'underline',
    'mod+`': 'code',
}
const Index = (props) => {
    const { value, setValue } = useContext(RTEContext)
    const renderElement = useCallback((props) => <Element {...props} />, [])
    const renderLeaf = useCallback(props => <Leaf {...props} />, [])
    const editor = useMemo(() => withHistory(withReact(createEditor())), [])

    const onKeyDown = (e) => {
        for (const hotkey in HOTKEYS) {
            if (isHotkey(hotkey, e)) {
                e.preventDefault()
                const mark = HOTKEYS[hotkey]
                toggleMark(editor, mark)
            }
        }
    }
    return (
        <Slate editor={editor} value={value} onChange={setValue}>
            <Toolbar />
            <TextEditor renderElement={renderElement} renderLeaf={renderLeaf} onKeyDown={onKeyDown} />
        </Slate >
    )
}
export default Index;



