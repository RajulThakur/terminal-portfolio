import { useEffect, useState } from 'react';

interface DimensionType {
  height: number;
  width: number;
}
export default function Dimension() {
  const [dim, setDim] = useState<DimensionType | undefined>();
  useEffect(() => {
    setDim({ height: window.innerHeight, width: window.innerWidth });
    window.addEventListener('resize', () => {
      setDim({ height: window.innerHeight, width: window.innerWidth });
    });
  }, []);
  return <div className='text-center w-24 tracking-wider '>
    {dim?.height}x{dim?.width}
  </div>;
}
