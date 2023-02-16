import "./App.css";
import SignIn from "./components/SignIn";
import { QueryClient, QueryClientProvider } from "react-query";
import Client from "./components/Client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App w-screen h-screen flex justify-center items-end">
        <Router>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/client" element={<Client />} />
          </Routes>
        </Router>
      </div>
    </QueryClientProvider>
  );
}

export default App;
