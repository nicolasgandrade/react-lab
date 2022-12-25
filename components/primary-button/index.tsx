export interface PrimaryButtonProps {
  text: string;
  color?: string;
  isDisabled?: boolean;
  type: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => any;
}

export default function PrimaryButton({
  text,
  color = 'primary02',
  isDisabled = false,
  type,
  onClick,
}: PrimaryButtonProps) {
  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      className={`btn ${color}`}
      type={type}
    >
      {text}
    </button>
  );
}
