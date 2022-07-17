import * as React from "react";

interface ILoadingProps {}

const Loading: React.FunctionComponent<ILoadingProps> = (props) => {
  return (
    <div className="h-[50vh] flex flex-col justify-center items-center">
      <div className="max-w-[400px]">
        <img src="./imgs/loading.gif" className="h-auto w-full" alt="" />
      </div>
      <h1>Loading ...</h1>
    </div>
  );
};

export default Loading;
