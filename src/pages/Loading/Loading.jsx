import React from "react";
import loadingAnimation from "./../../assets/animation/loading.json";
import Lottie from "react-lottie";
const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return <div className="h-screen w-full flex items-center fixed bg-white"
  style={{zIndex: '9999'}}
  // redux làm thêm 1 state, overflow: y
  >
      <Lottie options={defaultOptions} height={400} width={400} />
  </div>;
};

export default Loading;
