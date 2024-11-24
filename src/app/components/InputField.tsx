type InputFieldProps = {
  id: string;
  name: string;
  label: string;
  type: string;
  placeholder: string;
};

export const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  placeholder,
  id,
  name,
}) => {
  return (
    <div className='flex flex-col space-y-1'>
      <label htmlFor={label} className='text-sm font-semibold text-gray-500'>
        {label}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        className='rounded-lg border border-gray-600 bg-gray-700 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500'
        placeholder={placeholder}
      />
    </div>
  );
};
