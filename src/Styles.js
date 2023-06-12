import { useEffect } from "react";
import Test from "./Test";
import Bootstrap from "./Bootstrap";
import Tailwind from "./Tailwind";
import { Title } from "./Components";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

import "./assets/css/style.css";
import "./assets/css/index.scss";
import styles from "./assets/css/App.module.css";

function Styles() {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      // analytic data send
    }
  }, []);

  return (
    <div className={styles.App}>
      <Title>{process.env.NODE_ENV}</Title>

      <Title theme="dark">{process.env.NODE_ENV}</Title>

      <p className="env">
        <span>Test</span>
        {process.env.REACT_APP_API_URL}
      </p>

      <Test />

      {process.env.NODE_ENV === "development" && (
        <>
          <img src="/logo192.png" alt="Logo" />
        </>
      )}
      <Bootstrap />
      <br />
      <Tailwind />
    </div>
  );
}

export default Styles;
