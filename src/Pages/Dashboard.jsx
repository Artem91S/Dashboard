import { useState, useEffect } from "react";
import axios from "axios";
import { DataContext } from "../Hooks/Context";
import { Header } from "../components/Header";
import { MainLayout } from "../components/MainLayout";
import { SideBar } from "../components/SideBar";
import {
  Wrapper,
  Container,
} from "../styled/Dashboard/Dashboard.styled";

export function Dashboard() {
  const [serverDate, setServerDate] = useState("");

  useEffect(() => {
    async function fetchDate() {
      try {
        const resp = await axios.get("http://vindev.cx.ua/dashboard");
        setServerDate(resp?.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchDate();
  }, []);

  return (
    <DataContext.Provider value={serverDate}>
      <Wrapper>
        <SideBar />
        <Container>
          <Header />
        </Container>
        <Container>
          <MainLayout />
        </Container>
      </Wrapper>
    </DataContext.Provider>
  );
}
