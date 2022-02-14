import { Button, ButtonProps } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

export default function ButtonAdd({ children, ...restProps }: ButtonProps) {
    return (
        <Button type="text" icon={<PlusOutlined />} {...restProps}>
            {children || 'Add'}
        </Button>
    )
}
