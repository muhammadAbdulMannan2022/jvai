"use client"

import { useState, useEffect, useRef } from "react"

export default function GradientCursor() {
    const [isClient, setIsClient] = useState(false)
    const targetPos = useRef({ x: 0, y: 0 })
    const cursorPos = useRef({ x: 0, y: 0 })
    const requestRef = useRef(null)
    const cursorRef = useRef(null)

    useEffect(() => {
        setIsClient(true)
    }, [])

    useEffect(() => {
        if (!isClient) return

        const handleMouseMove = (e) => {
            targetPos.current = { x: e.clientX, y: e.clientY }
        }

        window.addEventListener("mousemove", handleMouseMove)

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
        }
    }, [isClient])

    useEffect(() => {
        if (!isClient) return

        const animate = () => {
            const lerp = (a, b, n) => a + (b - a) * n
            cursorPos.current.x = lerp(cursorPos.current.x, targetPos.current.x, 0.15)
            cursorPos.current.y = lerp(cursorPos.current.y, targetPos.current.y, 0.15)

            if (cursorRef.current) {
                const size = 40
                cursorRef.current.style.transform = `translate(${cursorPos.current.x - size / 2}px, ${cursorPos.current.y - size / 2}px)`
            }

            requestRef.current = requestAnimationFrame(animate)
        }

        requestRef.current = requestAnimationFrame(animate)

        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current)
        }
    }, [isClient])

    if (!isClient) return null

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 w-10 h-10 rounded-full border-2 border-[#0044ff] pointer-events-none z-[9999]"
            style={{
                transition: "none",
            }}
        />
    )
}
