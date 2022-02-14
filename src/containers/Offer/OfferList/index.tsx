import { useState, useEffect } from 'react'
import { message } from 'antd'
import VirtualList from 'rc-virtual-list'
import { List } from '@components/Layout'
import CardOffer from '@components/Card/CardOffer'

const fakeDataUrl =
    'https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo'

interface IOfferListProps {
    height?: number | null
}
export const DEFAULT_CONTAINER_HEIGHT = 284
export default function OfferList({ height }: IOfferListProps) {
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
        if (
            Math.floor(e.target.scrollHeight - e.target.scrollTop) ===
            Math.floor(height || DEFAULT_CONTAINER_HEIGHT)
        ) {
            appendData()
        }
    }
    return (
        <List>
            <VirtualList
                data={data}
                height={height || DEFAULT_CONTAINER_HEIGHT}
                itemHeight={128}
                itemKey="email"
                onScroll={onScroll}
            >
                {(item: any) => <CardOffer key={item.email}></CardOffer>}
            </VirtualList>
        </List>
    )
}
