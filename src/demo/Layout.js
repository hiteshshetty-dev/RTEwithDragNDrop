import React, { useState, createContext } from 'react'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd';
import TextEditor from '../super-charged-rte/src/index';

const initialValue = [
    {

        type: 'paragraph',
        children: [
            { text: 'This is editable test ' },
            { text: 'rich', bold: true },
            { text: ' text, ' },
            { text: 'much', italic: true },
            { text: ' better than a ' },
            { text: '<textarea>', code: true },
            { text: '!' },
        ],

    },
    {

        type: 'paragraph',
        children: [
            {
                text:
                    "Since it's rich text, you can do things like turn a selection of text ",
            },
            { text: 'bold', bold: true },
            {
                text:
                    ', or add a semantically rendered block quote in the middle of the page, like this:',
            },
        ],
    },
    {

        type: 'block-quote',
        children: [{ text: 'A wise quote.' }],

    },
    {
        type: 'paragraph',
        children: [{ text: 'Try it out for yourself!' }],

    },
]

export const RTEContext = createContext();

export function Layout() {
    const [value, setValue] = useState(initialValue)
    const providerValue = {
        value,
        setValue
    }


    return (
        <DndProvider backend={HTML5Backend}>
            <RTEContext.Provider value={providerValue}>
                <TextEditor />
            </RTEContext.Provider>
        </DndProvider>


    )
}
