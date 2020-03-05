import React from 'react';
import Lottie from 'react-lottie';
import errorLottie from "../assets/lottie/error-cross"
import successLottie from "../assets/lottie/success"

const MessageResult = (props) => {

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: null,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    switch (props.result) {
        case "success":
            defaultOptions.animationData = successLottie;
            return (
                <Lottie
                    options={defaultOptions}
                    height={75}
                    width={75}
                    isStopped={false}
                    isPaused={false}
                />
            );

        case "error":
            defaultOptions.animationData = errorLottie;
            return (
                <Lottie
                    options={defaultOptions}
                    height={75}
                    width={75}
                    isStopped={false}
                    isPaused={false}
                />
            );

        default:
            return null
    }
};

export default MessageResult;