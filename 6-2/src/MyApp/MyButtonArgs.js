import '../stories/button.css';

export default function MyButtonArgs({
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
