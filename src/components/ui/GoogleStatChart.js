import { Chart, Doughnut } from "react-google-charts";

function GoogleStatChart() {
    return (
        <Chart
            chartType="ScatterChart"
            data={[["Age", "Weight"], [4, 5.5], [8, 12]]}
            width="100%"
            height="400px"
            legendToggle
        />
    )
}
export default GoogleStatChart;