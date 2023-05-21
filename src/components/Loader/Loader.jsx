import { RotatingLines } from "react-loader-spinner";
import { Wrap } from "./Loader.styled";

export const Loader = () => {
  return (
    <Wrap>
      <RotatingLines
        strokeColor="#5cd3a8"
        strokeWidth="5"
        animationDuration="0.85"
        width="96"
        visible={true}
      />
    </Wrap>
  );
};

