import React, { useMemo } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { Modal, Steps, Button, Form, Select, Input } from 'antd'
import {
    UserOutlined,
    SolutionOutlined,
    LoadingOutlined,
    SmileOutlined,
} from '@ant-design/icons'
const reorder = (list: any, startIndex: any, endIndex: any): any => {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)

    return result
}
const { Step } = Steps
const __LAST_STEP__ = 2
export default function OfferCreate() {
    const [items, setItems] = React.useState([
        { id: 1, text: 'Login', icon: <UserOutlined /> },
        { id: 2, text: 'Verification', icon: <SolutionOutlined /> },
        { id: 3, text: 'Pay', icon: <LoadingOutlined /> },
        { id: 4, text: 'Done', icon: <SmileOutlined /> },
    ])
    const [visible, setVisible] = React.useState(false)
    const [step, setStep] = React.useState<number>(0)
    const isTheLastStep = step === __LAST_STEP__
    const showModal = () => {
        setVisible(true)
    }

    const handleOk = () => {
        setStep((prevState) => {
            if (isTheLastStep) return prevState
            return prevState + 1
        })
    }

    const handleCancel = () => {
        setVisible(false)
    }
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
    const getCurrentSteps = (index: number) =>
        ({
            0: () => (
                <>
                    <Form.Item required>
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item>
                        <Select placeholder="input placeholder" options={[]} />
                    </Form.Item>
                    <Form.Item>
                        <Select placeholder="input placeholder" options={[]} />
                    </Form.Item>
                </>
            ),
            1: () => (
                <>
                    <Form.Item>
                        <Select placeholder="input placeholder" options={[]} />
                    </Form.Item>
                    <Form.Item>
                        <Select placeholder="input placeholder" options={[]} />
                    </Form.Item>
                    <Form.Item>
                        <Select placeholder="input placeholder" options={[]} />
                    </Form.Item>
                    <Form.Item>
                        <Select placeholder="input placeholder" options={[]} />
                    </Form.Item>
                </>
            ),
            2: () => (
                <>
                    <Form.Item required tooltip="This is a required field">
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item>
                        <Select placeholder="input placeholder" options={[]} />
                    </Form.Item>
                    <Form.Item>
                        <Select placeholder="input placeholder" options={[]} />
                    </Form.Item>
                </>
            ),
        }[index])
    const currentForm = useMemo(() => getCurrentSteps(step), [step])
    return (
        <>
            <Button onClick={showModal} type="primary">
                Create Offer
            </Button>
            <Modal
                title={
                    <Steps
                        type="navigation"
                        size="small"
                        className="site-navigation-steps"
                        current={step}
                    >
                        <Step status="finish" title="Candidate" />
                        <Step status="wait" title="Requirements" />
                        <Step status="process" title="Process" />
                    </Steps>
                }
                closable={false}
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                {isTheLastStep ? (
                    <div>
                        <Steps>
                            {items.map(({ text, id, icon }) => (
                                <Step
                                    status="finish"
                                    title={text}
                                    key={id}
                                    icon={icon}
                                />
                            ))}
                        </Steps>
                        <DragDropContext onDragEnd={onDragEnd}>
                            <Droppable droppableId="characters">
                                {(provided) => (
                                    <div
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
                                                        <div
                                                            ref={
                                                                provided.innerRef
                                                            }
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                        >
                                                            {value.text}
                                                        </div>
                                                    )}
                                                </Draggable>
                                            )
                                        })}
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        </DragDropContext>
                    </div>
                ) : (
                    <Form layout="vertical">{currentForm}</Form>
                )}
            </Modal>
        </>
    )
}
