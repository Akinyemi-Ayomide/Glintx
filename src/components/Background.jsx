import Lottie from "lottie-react";

const Background = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10">
      <Lottie animationData={animationData} className="w-full h-full object-cover" />
    </div>
  )
}

export default Background