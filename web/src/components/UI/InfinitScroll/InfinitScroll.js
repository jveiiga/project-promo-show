import React, { useEffect, useRef } from 'react'

const UIInfinityScroll = ({ fetchMore }) => {
    const containerRef = useRef();
    useEffect(() => {
        const option = {
            root: null,
            rootMargin: '0px',
            threshold: 1.0,
        }
        const observer = new IntersectionObserver(([ entry ]) => {
            if ( entry.isIntersecting) {
                observer.disconnect();
                fetchMore();
            }
        }, option)
        observer.observe(containerRef.current)

        return () => {
            observer.disconnect();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return <div ref={containerRef}/>
}

export default UIInfinityScroll;