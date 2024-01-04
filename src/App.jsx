import Navbar from "./components/Navbar";
import AppLayout from "./components/AppLayout";
import { useState } from "react";
import CrashPage from "./components/CrashPage";
function App() {
  const [error, setError] = useState(null);
  return (
    <>
      {error ? (
        <CrashPage />
      ) : (
        <div className="">
          <Navbar />
          <div className="flex h-[calc(100vh-56px)] p-2">
            <AppLayout className="flex-grow" setError={setError} />
          </div>
        </div>
      )}
    </>
  );
}
export default App;
