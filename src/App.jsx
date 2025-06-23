import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'reahttp://localhost:5173/aboutct-router-dom';
import './App.css';
import RootLayout from './layout/RootLayout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
