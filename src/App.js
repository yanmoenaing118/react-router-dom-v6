import { Outlet, Link } from "react-router-dom";
function App() {
  return (
    <>
      <header className="App">
        <h1>Home Page</h1>
        <nav>
          <Link to="/">Home</Link> |<Link to="/invoices">Invoices</Link> |
          <Link to="/expenses">Expenses</Link>
        </nav>
      </header>

      <Outlet />
    </>
  );
}

export default App;
