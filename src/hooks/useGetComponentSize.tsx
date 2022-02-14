import { useCallback, useState } from 'react'

export default function useGetComponentSize() {
    const [height, setHeight] = useState(null)
    const [width, setWidth] = useState(null)
    const ref = useCallback((node) => {
        if (node !== null) {
            setHeight(node.getBoundingClientRect().height)
            setWidth(node.getBoundingClientRect().width)
        }
    }, [])

    return { ref, height, width }
}
