import cn from 'classnames';
import './SelectStyle.css';

export default function SelectStyle({ mode }) {
  return (
    <>
      <div className={`box ${mode === 'light' ? 'light' : 'dark'}`}>
        こんにちは、世界！
      </div>

      <div className={mode === 'light' ? 'light' : 'dark'}>
        こんにちは、世界！
      </div>

      <div className={(mode !== 'light') && 'dark'}>
        こんにちは、世界！
      </div>

      <div className={cn('box', mode === 'light' ? 'light' : 'dark')}>
        こんにちは、世界！
      </div>

      <div className={cn(
        'box',
        {
          light: mode === 'light',
          dark: mode === 'dark'
        }
      )}>
        こんにちは、世界！!!!
      </div >
      <div className={cn(
        'box',
        [
          'panel',
          {
            light: mode === 'light',
            dark: mode === 'dark'
          }
        ]
      )}>
        こんにちは、世界！!!!!!!!
      </div >
    </>
  )
}
