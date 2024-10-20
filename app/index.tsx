import { Redirect } from "expo-router";
import { DatabaseProvider, useDatabase } from "./DatabaseContext";

const StartPage = () => {
  const { session } = useDatabase();
  return (
    <DatabaseProvider>
      <Redirect href={session ? "/home" : "/start"} />
    </DatabaseProvider>
  );
};
export default StartPage;
