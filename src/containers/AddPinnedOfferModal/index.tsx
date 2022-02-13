import React from 'react'
import { Modal } from 'antd'
import ButtonAdd from '@components/Button/ButtonAdd'

export default function AddPinnedOfferModal() {
    const [visible, setVisible] = React.useState(false)
    const [confirmLoading, setConfirmLoading] = React.useState(false)
    const [modalText, setModalText] = React.useState('Content of the modal')

    const showModal = () => {
        setVisible(true)
    }

    const handleOk = () => {
        setModalText('The modal will be closed after two seconds')
        setConfirmLoading(true)
        setTimeout(() => {
            setVisible(false)
            setConfirmLoading(false)
        }, 2000)
    }

    const handleCancel = () => {
        console.log('Clicked cancel button')
        setVisible(false)
    }

    return (
        <>
            <ButtonAdd onClick={showModal}>Add</ButtonAdd>
            <Modal
                title="Offer List"
                visible={visible}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <p>{modalText}</p>
            </Modal>
        </>
    )
}
