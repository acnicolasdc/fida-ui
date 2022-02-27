import { useState } from 'react'
import { Modal, Steps, Button } from 'antd'
import DraggableList from './components/DraggableList'
import DynamicForm from './components/DynamicForm'

const { Step } = Steps
const __LAST_STEP__ = 2
export default function OfferCreate() {
    const [visible, setVisible] = useState<boolean>(false)
    const [step, setStep] = useState<number>(0)
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
                    <DraggableList />
                ) : (
                    <DynamicForm step={step} />
                )}
            </Modal>
        </>
    )
}
