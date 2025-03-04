import React, { useRef, useState } from 'react'

export default function test() {
    const [items, setItems] = useState([
        'Tai Xỉu', 'Tiger and Dragon fight', 'sss Item 3', 'Item 4', 'sadasasdấds', '1111111', '22222222222' ,'33333333333'
    ]);
    const ulRef = useRef();
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    // Start dragging
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.clientX);  // Track the initial position of the mouse
        setScrollLeft(ulRef.current.scrollLeft); // Get current scroll position
        e.preventDefault();  // Prevent default drag behavior
    };

    // Mouse movement when dragging
    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const x = e.clientX - startX;  // Calculate how far the mouse has moved
        ulRef.current.scrollLeft = scrollLeft - x;  // Adjust the scroll position
    };

    // Stop dragging
    const handleMouseUp = () => {
        setIsDragging(false);
    };

    // Prevent mouse drag on text selection
    const handleMouseLeave = () => {
        if (isDragging) {
        setIsDragging(false);
        }
    };
  return (
    <ul className='nav-tabs'  
        ref={ulRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
    >
        {items.map((item, index) => (
            <li
                key={index}
                >
                {item}
            </li>
        ))}
    </ul>
  )
}
