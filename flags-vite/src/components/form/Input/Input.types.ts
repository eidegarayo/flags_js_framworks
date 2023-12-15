export interface StyledInputProps {}

interface OptionalInputProps {}

export interface DefaultProps extends StyledInputProps, OptionalInputProps {
  type: string;
  role: string;
}

export interface InputProps extends Partial<DefaultProps> {
  ariaLabel: string;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  title: string;
  type: string;
  value: string;
}
