import { NavLink, Outlet } from 'react-router-dom';

function ContactLayout() {
  return (
    <div>
      <h1>Contact</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
        doloribus voluptatum, minus unde quisquam illo vero aspernatur
        voluptatem qui, dolorem aperiam iusto dignissimos quo ad odit veniam
        perferendis odio error illum, officia aliquid. Minima officia, rem
        repellat reprehenderit, id impedit aut dignissimos saepe fuga possimus
        natus autem, quo explicabo architecto.
      </p>
      <nav>
        <NavLink to="faq">FAQ</NavLink>
        <NavLink to="form">Form</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default ContactLayout;
