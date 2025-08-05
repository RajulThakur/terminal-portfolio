import Dimension from "./Dimension";

export default function FolderTitle() {
  return (
    <div className='text-title flex items-center gap-3 font-semibold'>
      <img src='/folder.png' className='h-4' />
      <div className='flex items-center gap-1'>
        <span className="hidden md:block">yellowflash</span>
        <span className="hidden md:block">&#x2014;</span>
        <span>-zsh</span>
        <span className="hidden md:block">&#x2014;</span>
        <Dimension/>
      </div>
    </div>
  );
}
