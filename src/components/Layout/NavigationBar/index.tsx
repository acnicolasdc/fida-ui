import { PageHeaderProps } from 'antd'
import Figure from '@components/Icon/Figure'
import { Navigation } from './navigationBar.style'

export default function NavigationBar({ extra }: PageHeaderProps) {
    return (
        <Navigation
            ghost={false}
            title={<Figure />}
            subTitle="Welcome to the Fidaboard"
            extra={extra}
        />
    )
}
