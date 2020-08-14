import React, { useContext } from 'react'
import { useDrag, useDrop } from 'react-dnd';
import { Editor, Transforms } from 'slate';
import { useSlate } from 'slate-react';

import './RenderElement.css'
import { Element } from '../utils/renderElement';
import { RTEContext } from '../../../../demo/Layout';
const ContainerElement = (props) => {
    const { value } = useContext(RTEContext)
    const editor = useSlate()
    const getPathOfNode = (childNode) => {
        for (const [node, path] of Editor.nodes(editor, { at: value.length })) {
            if (JSON.stringify(node) === JSON.stringify(childNode)) {
                return path;
            }
        }

    }
    const path = getPathOfNode(props.element)

    const [, drag] = useDrag({
        item: {
            type: 'container',
            path: getPathOfNode(props.element),
            dropped: false,
            canDrop: true
        },
    });
    const [, drop] = useDrop({
        accept: 'container',
        drop: (item, monitor) => {
            const lenOfItem = item.path.length
            let counter = 0;
            if (path && item.canDrop && lenOfItem < path.length) {
                for (let i = 0; i < item.path.length; i++) {
                    if (item.path[i] === path[i]) {
                        counter++;
                    }
                }
                if (counter === lenOfItem) {
                    item.canDrop = false
                }
            }
            if (!item.dropped && item.canDrop) {
                Transforms.moveNodes(editor, { at: item.path, to: path })
            }
            item.dropped = true
        },
    })

    return (
        <div className="dropContainer" ref={drop}>
            <div className="container" ref={drag}>
                <Element {...props} />
            </div>
        </div>


    )
}
export default ContainerElement;
