import { Minus, X } from 'lucide-react';
import ToolbarBtn from './ToolbarBtn';
import FolderTitle from './FolderTitle';

export default function ToolBar() {
  const toolBarBtn = [
    {
      id: 'cross',
      style: 'bg-cross',
      children: <X size={10} strokeWidth={3.5} />,
    },
    {
      id: 'mini',
      style: 'bg-mini',
      children: <Minus size={10} strokeWidth={3.5} />,
    },
    {
      id: 'expand',
      style: 'bg-expand',
      children: <Minus size={10} strokeWidth={3.5} />,
    },
  ];

  return (
    <div className='fixed top-0 right-0 left-0 flex h-12 items-center justify-center rounded-t-2xl bg-slate-900 px-3 py-2'>
      <div className='absolute left-4 flex w-auto gap-1.5'>
        {toolBarBtn.map((btn) => (
          <ToolbarBtn key={btn.id} style={btn.style} children={btn.children} />
        ))}
      </div>
      <FolderTitle />
    </div>
  );
}
