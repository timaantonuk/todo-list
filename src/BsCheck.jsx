import * as React from 'react';

function BsCheck({isDarkTheme}) {
  return (
    <svg
      stroke='currentColor'
      fill={`${isDarkTheme ? 'white' : 'currentColor'}`}
      strokeWidth={0}
      viewBox='0 0 16 16'
      height='1.4em'
      width='1.4em'
      
    >
      <path d='M13.5 2l-7.5 7.5-3.5-3.5-2.5 2.5 6 6 10-10z' />
    </svg>
  );
}

export default BsCheck;
