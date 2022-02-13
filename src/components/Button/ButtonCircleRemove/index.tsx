import { Button, ButtonProps } from 'antd'
import { CloseOutlined } from '@ant-design/icons'

export default function DownloadOutlined({
    children,
    ...restProps
}: ButtonProps) {
    return (
        <Button
            type="primary"
            shape="circle"
            icon={<CloseOutlined />}
            {...restProps}
        />
    )
}
