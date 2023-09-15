import { PieChartBoard } from "./piaChart";
import { LineChart } from "./lineChart";
import { Users } from "./users";
import { userData } from "./users/userData.js";
import { Table } from "../mainLayout/table";
import { Grid,Flex} from "./mainLayout.styled.js";

export function MainLayout() {
  return (
    <Grid>
      <Users userData={userData} />
       <Flex>
        <LineChart />
        <PieChartBoard />
      </Flex>
      <Table />
    </Grid>
  );
}
