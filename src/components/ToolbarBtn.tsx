import { ReactNode } from 'react';
export default function ToolbarBtn({
  children,
  style,
}: {
  children: ReactNode;
  style: string;
}) {
  return (
    <button className={`size-3.5 rounded-full focus:outline-none flex items-center justify-center ${style}`}>
      {children}
    </button>
  );
}
