import { RotatingLines } from 'react-loader-spinner';

export const Loader = ({ height, width, color }) => {
    return (
        <RotatingLines
            visible={true}
            height={height}
            width={width}
            color={color}
            strokeWidth="5"
            strokeColor={color}
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
        />
    );
};