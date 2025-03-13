export const Input = ({
  value,
  onChange,
}: {
  value: number;
  onChange: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <input
      type="number"
      className="rounded-md shadow-md p-4"
      value={String(value)}
      onChange={(e) => onChange(Number(e.target.value))}
    />
  );
};
