import React from 'react';

type Props = {
  children: JSX.Element;
};

const Gps = ({children}: Props) => {
  console.log('I am here');
  return <>{children}</>;
};

export default Gps;
