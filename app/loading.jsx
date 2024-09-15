'use client';
import ClipLoader from "react-spinners/ClipLoader";
const override = {
    display: 'block',
    margin: '100px auto'
}

const color = '#3b82f6'
const LoadingPage = ({ loading }) => {
    return (
        <ClipLoader
            color={color}
            loading={loading}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
        />
    )
}

export default LoadingPage