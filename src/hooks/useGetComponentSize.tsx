import { useCallback, useState, useEffect } from 'react'

export default function useGetComponentSize() {
    const [height, setHeight] = useState(null)
    const [width, setWidth] = useState(null)
    const ref = useCallback((node) => {
        if (node !== null) {
            setHeight(node.getBoundingClientRect().height)
            setWidth(node.getBoundingClientRect().width)
        }
    }, [])
    // Adding this effect doesn't re-calculate the height???
    useEffect(() => {
        window.addEventListener('resize', ref)
        return (): void => {
            window.removeEventListener('resize', ref)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [height, width])
    return { ref, height, width }
}
