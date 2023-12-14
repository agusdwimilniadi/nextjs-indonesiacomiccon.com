import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  customClass?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
  customClass,
  ...rest
}) => {
  // Gabungkan kelas tambahan jika ada
  const combinedClassName = `bg-custom-yellow text-black rounded-full px-4 text-sm py-3 font-medium ${
    className || ''
  } ${customClass || ''}`;

  return (
    <button onClick={onClick} className={combinedClassName} {...rest}>
      {children}
    </button>
  );
};

export default Button;
