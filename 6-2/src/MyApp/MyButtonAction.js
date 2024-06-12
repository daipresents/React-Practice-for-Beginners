import PropTypes from 'prop-types';
import '../stories/button.css';

export default function MyButtonAction({
  primary = false,
  backgroundColor = null,
  size = 'medium',
  label = 'Button',
  handleClick,
  ...props
}) {

  const mode = primary ? 'storybook-button--primary' : 'storybook-button--seondary';

  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      onClick={handleClick}
      {...props}
    >
      {label}
    </button>
  );
};

// PropTypesでControlsタブの定義を指定できる。
MyButtonAction.propTypes = {
  /**
   * Primaryカラーを有効にするか？ このコメントは画面に表示される。
   */
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  // onClick: PropTypes.func,
  // onXXXでなくてもOKだが、このままではActionタブに表示されない。ので以下が必要。
  // 1. .storybook/preview.jsに「actions: { argTypesRegex: "^(on|handle)[A-Z].*" },」を追加すれば表示される
  handleClick: PropTypes.func,
};
