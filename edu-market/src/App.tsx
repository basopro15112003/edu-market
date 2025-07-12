import "./App.css";
import { ThemeProvider } from "./components/ui/theme-providers";
import { AppRoute } from "./routes/route";

function App() {
  return (
    <>
      {" "}
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <AppRoute></AppRoute>{" "}
      </ThemeProvider>
    </>
  );
}

export default App;
