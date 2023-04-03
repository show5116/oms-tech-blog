import { isEqual } from 'lodash';

const compareProps = (prevProps, nextProps) => {
    return isEqual(prevProps, nextProps);
};

export default compareProps;
