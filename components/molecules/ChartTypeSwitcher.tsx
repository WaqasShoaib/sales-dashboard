import Button from '../atoms/Button';

type Props = {
  chartType: string;
  setChartType: (type: string) => void;
};

const types = ['Bar', 'Line', 'Pie'];

const ChartTypeSwitcher: React.FC<Props> = ({ chartType, setChartType }) => (
  <div>
    <h3 className="text-lg font-semibold text-gray-700 mb-3">Chart Type</h3>
    <div className="flex gap-2">
      {types.map(type => (
        <Button
          key={type}
          onClick={() => setChartType(type)}
          className={`${
            chartType === type 
              ? "bg-blue-600 text-white" 
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          } transition-all duration-200`}
        >
          {type}
        </Button>
      ))}
    </div>
  </div>
);

export default ChartTypeSwitcher;