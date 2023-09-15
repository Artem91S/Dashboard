import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Header } from "../../components/screens/dashboard/header";
import { MainLayout } from "../../components/screens/dashboard/mainLayout";
import { SideBar } from "../../components/screens/dashboard/sideBar";
import {
  Wrapper,
  Container,
} from "./Dashboard.styled.js";

const queryClient = new QueryClient()
export function Dashboard() {
  return (
    <QueryClientProvider client={queryClient}>
      <Wrapper>
        <SideBar />
        <Container>
          <Header />
        </Container>
        <Container>
          <MainLayout />
        </Container>
      </Wrapper>
    </QueryClientProvider>
  );
}
