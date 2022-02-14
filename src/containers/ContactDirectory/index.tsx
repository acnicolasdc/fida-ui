import { useState, useEffect } from 'react'
import { Avatar, message, Input, Button } from 'antd'
import { CopyOutlined } from '@ant-design/icons'
import VirtualList from 'rc-virtual-list'
import { CardBasic } from '@components/Card'
import { ListContainer } from './contactDirectory.style'

const fakeDataUrl =
    'https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo'
const ContainerHeight = 250
export default function ContactDirectory() {
    const [data, setData] = useState([])

    const appendData = () => {
        fetch(fakeDataUrl)
            .then((res) => res.json())
            .then((body) => {
                setData(data.concat(body.results))
                message.success(`${body.results.length} more items loaded!`)
            })
    }

    useEffect(() => {
        appendData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const onScroll = (e: any) => {
        if (e.target.scrollHeight - e.target.scrollTop === ContainerHeight) {
            appendData()
        }
    }
    return (
        <CardBasic title="Contact Directory" bordered={false}>
            <Input.Search placeholder="Search by name" />
            <ListContainer>
                <VirtualList
                    data={data}
                    height={ContainerHeight}
                    itemHeight={47}
                    itemKey="email"
                    onScroll={onScroll}
                >
                    {(item: any) => (
                        <ListContainer.Item key={item.email}>
                            <ListContainer.Item.Meta
                                avatar={<Avatar src={item.picture.large} />}
                                title={
                                    <a href="https://ant.design">
                                        {item.name.last}
                                    </a>
                                }
                                description={item.email}
                            />
                            <Button shape="circle" icon={<CopyOutlined />} />
                        </ListContainer.Item>
                    )}
                </VirtualList>
            </ListContainer>
        </CardBasic>
    )
}
