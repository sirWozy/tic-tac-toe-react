import React from 'react';
import classNames from "classnames";

const Box = ({value, onPress, winner}) => {
  return (
    <button disabled={value || winner}
            className={classNames({
              "p-10 xs:w-5 xs:h-5 sm:w-10 sm:h-10 md:w-40 md:h-40 lg:w-40 lg:h-40 text-7xl font-bold flex justify-center items-center bg-gray-300 rounded-md hover:shadow-2xl transition duration-300": true,
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