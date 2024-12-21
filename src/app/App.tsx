
import { Context } from "@/context";
import { AppRouter } from "@/routes";

const App = () => {
  return (
    <>
      <Context>
        <AppRouter />
      </Context>
    </>
  );
};

export default App;
