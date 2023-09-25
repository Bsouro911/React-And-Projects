// import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function SingleQnA({ id, title, info, activeId, toggleQuestion }) {
  //   const [showinfo, setShowinfo] = useState(false);
  const isActive = id === activeId;
  //   const toggle = () => {
  //     setShowinfo(!showinfo);
  //   };
  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button
          type="button"
          className="btn"
          onClick={() => toggleQuestion(id)}
        >
          {/* {showinfo ? <AiOutlineMinus /> : <AiOutlinePlus />} */}
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {/* {showinfo && <p>{info}</p>} */}
      {isActive && <p>{info}</p>}
    </article>
  );
}

export default SingleQnA;
