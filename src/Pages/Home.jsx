import { useState } from "react";
import { Forma } from "../components/Forma";

export function Home() {
  const [forma, setForma] = useState(false);
  return (
        <Forma forma={forma} setForma={setForma} />
  );
}
