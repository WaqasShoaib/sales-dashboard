import Input from '../atoms/Input';

type Props = {
  threshold: number;
  setThreshold: (n: number) => void;
};

const FilterInput: React.FC<Props> = ({ threshold, setThreshold }) => (
  <div className="mb-4 flex items-center gap-2">
    <label>Show sales above:</label>
    <Input
      type="number"
      value={threshold}
      onChange={e => setThreshold(Number(e.target.value))}
      min={0}
      max={10000}
      style={{ width: 100 }}
    />
  </div>
);

export default FilterInput;
