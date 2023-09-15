import { useState } from "react";
import { Forma } from "../../components/screens/home";

export function Home() {
  const [forma, setForma] = useState(false);
  return (
        <Forma forma={forma} setForma={setForma} />
  );
}
