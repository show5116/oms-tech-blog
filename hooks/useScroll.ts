import { useEffect, useState } from 'react';
import throttle from 'utils/throttle';

const useScroll = (direction: 'up' | 'down') => {
    let prevScroll: number;

    if (typeof window !== 'undefined') {
        prevScroll = window.scrollY;
    }

    const [scrollingUp, setScrollingUp] = useState(false);

    const updateScroll = () => {
        const currScroll = window.scrollY;
        const isScrolled = direction === 'up' ? prevScroll > currScroll : prevScroll < currScroll;
        setScrollingUp(isScrolled);
        prevScroll = currScroll;
    };

    const handleScroll = throttle(updateScroll, 100);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });
    return scrollingUp;
};
export default useScroll;
