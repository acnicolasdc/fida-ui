import { Button } from 'antd'
import Figure from '@components/Icon/Figure'
import { Navigation } from './navigationBar.style'

export default function NavigationBar() {
    return (
        <Navigation
            ghost={false}
            title={<Figure />}
            subTitle="Welcome to the Fidaboard"
            extra={[
                <Button key="3">Operation</Button>,
                <Button key="2">Operation</Button>,
                <Button key="1" type="primary">
                    Primary
                </Button>,
            ]}
        />
    )
}
