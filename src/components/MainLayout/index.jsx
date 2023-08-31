import { PieChartBoard } from "../PieChart";
import { LineChart } from "../LineChart";
import { Users } from "../Users";
import { data } from "../Users/data";
import { Table } from "../Table";
import { Grid,Flex} from "../../styled/MainLayout/MainLayout.styled";

export function MainLayout() {
  return (
    <Grid>
      <Users data={data} />
      <Flex>
        <LineChart />
        <PieChartBoard />
      </Flex>
      <Table />
    </Grid>
  );
}
