import React from 'react';
import classNames from "classnames";

const Box = ({value, onPress, winner}) => {
  return (
    <button disabled={value || winner}
            className={classNames({
              "w-80 h-80 p-10 sm:w-5 sm:h-5 md:w-40 md:h-40 lg:w-60 lg:h-60 text-7xl font-bold flex justify-center items-center bg-gray-300 rounded-md hover:shadow-2xl transition duration-300": true,
              "bg-blue-400 text-white": value === "X",
              "bg-red-400 text-white": value === "O"
            })}
            onClick={onPress}
    >
      {value}
    </button>
  );
};

export default Box;