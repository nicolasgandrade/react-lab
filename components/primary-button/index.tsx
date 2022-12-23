export interface PrimaryButtonProps {
  text: string;
  color?: string;
  isDisabled?: boolean;
  onClick?: () => any;
}

export default function PrimaryButton({
  text,
  color = 'primary02',
  isDisabled = false,
  onClick,
}: PrimaryButtonProps) {
  return (
    <button disabled={isDisabled} onClick={onClick} className={`btn ${color}`}>
      {text}
    </button>
  );
}
