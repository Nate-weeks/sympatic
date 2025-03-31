import Experience from "./components/Experience";
import { Suspense } from "react";
import "./App.css"

function App() {
  return (
    <main className="h-screen">
      <Suspense
        fallback={
          <div className="h-screen w-screen flex items-center justify-center">
            <img src="/assets/loader.gif" alt="loader" />
          </div>
        }
      >
        <Experience />
        <div
          id="bg"
          className="max-md:bg-no-repeat max-md:bg-cover fixed -z-10 inset-0 h-screen w-screen bg-[url('/assets/bg.png')] bg-custom brightness-100"
        />
      
      </Suspense>
    </main>
  );
}

export default App;
