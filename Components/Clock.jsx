import { useEffect, useState } from "react";
import { nowToHHMM } from "../Services/date-service";
import Txt from "./Txt";

function Clock() {
  const [time, setTime] = useState(nowToHHMM());

  useEffect(() => {
    const refresh = setInterval(() => {
      setTime(nowToHHMM());
    }, 1000);

    //le return ici va permettre de nettoyer le setIntervale en appelant la fonction clearInterval
    //pour éviter que le setInterval tourne dans le vide quand le composant n'est plus là
    return () => {
      clearInterval(refresh);
    };
  }, []);
  return (
    <>
      <Txt>{time}</Txt>
    </>
  );
}

export default Clock;
