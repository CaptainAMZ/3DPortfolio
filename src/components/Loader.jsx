import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-load"></span>
      <p className="mt-10 text-base font-extrabold text-[#F1F1F1]">
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default Loader;
