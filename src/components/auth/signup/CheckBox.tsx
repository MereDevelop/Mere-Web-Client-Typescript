interface CheckBoxProps {
  name: string;
  className: string;
  isSelected: boolean;
}

const CheckBox: React.FC<CheckBoxProps> = ({ name, className }) => {
  return (
    <button type='button' className={className}>
      {name}
    </button>
  );
};

export default CheckBox;
