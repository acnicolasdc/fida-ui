import React from 'react'
import { Steps } from 'antd'
import { HolderOutlined, CaretRightOutlined } from '@ant-design/icons'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { List, Item } from './draggableList.style'
import { reorder } from './draggableList.feature'
import { DEFAULT_STEPS } from './draggable.List.const'

const { Step } = Steps

export default function OfferCreate() {
    const [items, setItems] = React.useState(DEFAULT_STEPS)

    const onDragEnd = (result: any) => {
        // dropped outside the list
        if (!result.destination) {
            return
        }

        const newItems = reorder(
            items,
            result.source.index,
            result.destination.index
        )
        setItems(newItems)
    }

    return (
        <div>
            <Steps>
                {items.map(({ text, id, Icon }) => (
                    <Step
                        status="finish"
                        title={text}
                        key={id}
                        icon={<Icon />}
                    />
                ))}
            </Steps>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="characters">
                    {(provided) => (
                        <List
                            className="characters"
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {items.map((value, index) => {
                                return (
                                    <Draggable
                                        key={value.id}
                                        draggableId={`${value.id}`}
                                        index={index}
                                    >
                                        {(provided) => (
                                            <Item
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                            >
                                                <div>
                                                    <CaretRightOutlined />
                                                    <span> {value.text}</span>
                                                </div>
                                                <HolderOutlined />
                                            </Item>
                                        )}
                                    </Draggable>
                                )
                            })}
                            {provided.placeholder}
                        </List>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    )
}
