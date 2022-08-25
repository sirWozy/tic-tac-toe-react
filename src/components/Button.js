import React from 'react';

const Button = ({onPress}) => {
  return (
    <button className="rounded-md bg-blue-500 hover:bg-blue-400 transition-all py-2.5 px-5  mt-6 text-white font-bold" onClick={onPress}>
      Reset Board
    </button>
  );
};

export default Button;