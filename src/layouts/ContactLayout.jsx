import { NavLink, Outlet } from 'react-router-dom';

function ContactLayout() {
  return (
    <div>
      <h1>Contact</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt delectus
        eaque iusto ducimus at unde incidunt illum perspiciatis omnis similique
        vero quod repellendus totam nostrum beatae inventore repellat voluptatum
        quo, architecto non quaerat obcaecati hic. Minima, dolorem! Et debitis
        reiciendis ducimus provident laborum odit, aperiam deleniti porro
        aliquam eaque ipsa.
      </p>
      <nav>
        <NavLink to="faq">Faq</NavLink>
        <NavLink to="form">Form</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default ContactLayout;
