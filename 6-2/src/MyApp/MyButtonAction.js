import PropTypes from 'prop-types';
import '../stories/button.css';

export default function MyButtonAction({
  primary = false,
  backgroundColor = null,
  size = 'medium',
  label = 'Button',
  ...props
}) {

  const mode = primary ? 'storybook-button--primary' : 'storybook-button--seondary';

  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}

    </button>
  );
};

// PropTypesでControlsタブの定義を指定できる。
MyButtonAction.propTypes = {
  /**
   * Primaryカラーを有効にするか？ このコメントは画面に表示される（けどなぜかでなくなった）
   */
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,

  // これを書いているけどWhiteボタンのアクションが動かんなぁ

  /**
   * 例：
   * () => console.log('Hello, Index!!'),
   */
  onClick: PropTypes.func,
};
