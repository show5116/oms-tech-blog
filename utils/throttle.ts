const throttle = (callback: Function, delay: number) => {
    let timer: NodeJS.Timeout = null;

    return () => {
        if (timer) return;
        timer = setTimeout(() => {
            callback();
            timer = null;
        }, delay);
    };
};

export default throttle;
