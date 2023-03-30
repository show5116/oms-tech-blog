import { useCallback, useEffect, useState } from 'react';

const defaultOption = {
    root: null,
    threshold: 0.5,
    rootMargin: '0px',
};

const useIntersect = (onIntersect, option) => {
    const [ref, setRef] = useState(null);
    const checkIntersect = useCallback(
        ([entry], observer) => {
            if (entry.isIntersecting) {
                onIntersect(entry, observer);
            }
        },
        [onIntersect]
    );

    useEffect(() => {
        let observer;
        if (ref) {
            observer = new IntersectionObserver(checkIntersect, {
                ...defaultOption,
                ...option,
            });
            observer.observe(ref);
        }
    }, [ref, option, checkIntersect]);

    return [ref, setRef];
};

export default useIntersect;
