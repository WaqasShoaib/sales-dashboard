import Input from '../atoms/Input';

type Props = {
  threshold: number;
  setThreshold: (n: number) => void;
};

const FilterInput: React.FC<Props> = ({ threshold, setThreshold }) => (
  <div>
    <h3 className="text-lg font-semibold text-gray-700 mb-3">Sales Filter</h3>
    <div className="flex items-center gap-3">
      <label className="text-sm font-medium text-gray-600">Show sales above:</label>
      <Input
        type="number"
        value={threshold}
        onChange={e => setThreshold(Number(e.target.value))}
        min={0}
        max={150000}
        step={1000}
        className="w-32"
        placeholder="0"
      />
    </div>
  </div>
);

export default FilterInput; 