export interface TextInputProps {
    type?: string,
    name?: string,
    placeholder?: string,
    label: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    value: string;
    error?: string | boolean;
    success?: string | boolean;
  }