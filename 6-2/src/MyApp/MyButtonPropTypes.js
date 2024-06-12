import PropTypes from 'prop-types';
import '../stories/button.css';

export default function MyButtonPropTypes({
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
MyButtonPropTypes.propTypes = {
  /**
   * Primaryカラーを有効にするか？ このコメントは画面に表示される。
   */
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'mediam', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
