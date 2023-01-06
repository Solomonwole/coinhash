import { useEffect } from "react";
import RouterPage from "./router/Router";


function App() {
  useEffect(() => {
    window.addEventListener('beforeunload', clearLocalStorage);
    return () => {
      window.removeEventListener('beforeunload', clearLocalStorage);
    };
  }, []);

  const clearLocalStorage = () => {
    localStorage.clear();
  };
  return (
    <>
      <RouterPage />
    </>
  );
}

export default App;
