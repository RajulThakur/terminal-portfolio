import BlockCursor from './BlockCursor';
import Path from './Path';

export default function PrefixLine() {
  return (
    <div className='flex gap-2'>
      <div className='text-terminal flex gap-2'>
        yellowflash@yellow-MacBook-Air <Path />
      </div>
      <BlockCursor/>
      {/* <TextArea /> */}
    </div>
  );
}
