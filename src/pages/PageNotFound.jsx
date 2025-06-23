import { NavLink } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className="pageNotFound-container">
      <h1>PageNotFound</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, quae
        consequatur ullam atque deserunt quam ducimus non aut alias dolor
        blanditiis. Iste reiciendis debitis quae velit quod totam ad vel omnis
        ratione voluptatem laborum reprehenderit libero fugiat, doloribus,
        itaque, enim minima amet distinctio repellendus in et dicta perferendis.
        Quos, vero.
      </p>
      <NavLink to="/">Home Page</NavLink>
    </div>
  );
}

export default PageNotFound;
