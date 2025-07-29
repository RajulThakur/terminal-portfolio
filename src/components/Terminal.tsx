import PrefixLine from './PrefixLine';
import ToolBar from './Toolbar';

export default function Terminal() {
  return (
    <div className='pt-13 font-terminal'>
      <ToolBar />
      <PrefixLine/>
    </div>
  );
}
