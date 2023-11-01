import { useGlobalContext } from "../contexts/context";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
const ToggleTheme = () => {
  const { isDark, toggleIsDark } = useGlobalContext();
  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleIsDark}>
        {isDark ? (
          <BsFillMoonFill className="toggle-icon" />
        ) : (
          <BsFillSunFill className="toggle-icon" />
        )}
      </button>
    </section>
  );
};

export default ToggleTheme;
