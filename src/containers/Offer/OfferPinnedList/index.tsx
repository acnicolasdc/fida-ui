import { useState, useEffect } from 'react'
import VirtualList from 'rc-virtual-list'
import { List, Avatar, message } from 'antd'
import { FileSyncOutlined } from '@ant-design/icons'
import { CardBasic } from '@components/Card'
import OfferAddPinnedModal from '@containers/Offer/OfferAddPinnedModal'
import ButtonCircleRemove from '@components/Button/ButtonCircleRemove'

const fakeDataUrl =
    'https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo'
const ContainerHeight = 284
export default function OfferPinnedList() {
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
        <CardBasic
            title="Pinned Offers"
            bordered={false}
            extra={[<OfferAddPinnedModal />]}
        >
            <List>
                <VirtualList
                    data={data}
                    height={ContainerHeight}
                    itemHeight={47}
                    itemKey="email"
                    onScroll={onScroll}
                >
                    {(item: any) => (
                        <List.Item key={item.email}>
                            <List.Item.Meta
                                avatar={
                                    <Avatar
                                        icon={<FileSyncOutlined />}
                                        style={{ backgroundColor: '#87d068' }}
                                    />
                                }
                                title={
                                    <a href="https://ant.design">
                                        {item.name.last}
                                    </a>
                                }
                                description={item.email}
                            />
                            <ButtonCircleRemove size="small" />
                        </List.Item>
                    )}
                </VirtualList>
            </List>
        </CardBasic>
    )
}
