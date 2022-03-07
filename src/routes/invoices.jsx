import { Link, NavLink, Outlet, useSearchParams } from "react-router-dom";
import { getInvoices } from "../data";

export default function Invoices() {
  const invoices = getInvoices();
  const [searchParams, setSearchParams ] = useSearchParams();

  function handleFilter(event) {
    let filter = event.target.value;
    if(filter) {
      setSearchParams({ filter })
    } else {
      setSearchParams({})
    }
  }

  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        <input type="text" value={searchParams.get("filter") || ""} onChange={handleFilter} />
        {invoices.filter((invoice) => {
          
          return invoice.name.toLowerCase().startsWith(searchParams.get('filter'));
        }).map((invoice) => (
          <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "green",
              };
            }}
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </NavLink>
        ))}

        <Outlet />
      </nav>
    </div>
  );
}
