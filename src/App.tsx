import { useEffect } from 'react';
import Terminal from './components/Terminal';
import { useTextStore } from './store/textStore';
import { appendToCommandHistory } from './utility/localStorage';

export default function App() {
  const { text, appendText, clearText } = useTextStore();
  // useEffect(() => {
  //   window.addEventListener('keydown', (e) => {
  //     console.log(e);
  //     if (e.key === 'Enter') {
  //       appendToCommandHistory({
  //         id: `${Date.now()}`,
  //         type: 'command',
  //         value: text,
  //       });
  //       clearText();
  //     } else {
  //       appendText(e.key);
  //     }
  //   });
  //   return () => {
  //     window.removeEventListener('keydown', (e) => {
  //       if (e.key === 'Enter') {
  //         clearText();
  //       } else {
  //         appendText(e.key);
  //       }
  //     });
  //   };
  // }, []);
  return (
    <div className='h-dvh w-dvw bg-black'>
      <Terminal />
    </div>
  );
}
