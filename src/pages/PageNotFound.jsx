import { NavLink } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className="pageNotFound-container">
      <h1>Page Not Found</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, rem
        eaque, labore aliquid soluta molestiae in quis corporis ducimus ipsa
        sint exercitationem! Dignissimos maxime necessitatibus dolorum nihil?
        Tempore nam reiciendis esse voluptates nihil laboriosam corrupti
        voluptate recusandae, eaque blanditiis ipsa adipisci ducimus placeat ut
        consequatur, voluptatibus ratione, culpa voluptatem beatae?
      </p>
      <NavLink to="/">Home</NavLink>
    </div>
  );
}

export default PageNotFound;
