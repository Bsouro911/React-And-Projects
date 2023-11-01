import FormSearch from "./components/FormSearch";
import Gallery from "./components/Gallery";
import ToggleTheme from "./components/ToggleTheme";

const App = () => {
  return (
    <main>
      <ToggleTheme></ToggleTheme>
      <FormSearch></FormSearch>
      <Gallery></Gallery>
    </main>
  );
};
export default App;
