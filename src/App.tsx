import { ModeToggle } from "./components/mode-toogle";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col h-screen w-screen">
        <div className="sticy top-0 z-50 w-full border-b-2 border-border/40 bg-background/95 py-2 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 max-w-screen-2xl items-center justify-between px-20">
            <h1>Boilerplate</h1>
            <ModeToggle />
          </div>
        </div>
        <div className="flex flex-grow items-center justify-center">
          <h1 className="text-2xl">Welcome!</h1>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
