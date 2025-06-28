import Button from '../atoms/Button';

type Props = {
  chartType: string;
  setChartType: (type: string) => void;
};

const types = ['Bar', 'Line', 'Pie'];

const ChartTypeSwitcher: React.FC<Props> = ({ chartType, setChartType }) => (
  <div className="flex gap-2 mb-4">
    {types.map(type => (
      <Button
        key={type}
        onClick={() => setChartType(type)}
        className={chartType === type ? "bg-blue-800" : ""}
      >
        {type}
      </Button>
    ))}
  </div>
);

export default ChartTypeSwitcher;
