import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import BookDetails from './components/BookDetails/BookDetails';
import ListedBooks from './components/ListedBooks/ListedBooks';
import PagesToRead from './components/PagesToRead/PagesToRead';
import About from './components/About/About';

const router = createBrowserRouter([
  {
    path: "/react-book-vibe/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/react-book-vibe/",
        element: <Home></Home>,
        loader: () => fetch('./books.json'),
      },
      {
        path: "/react-book-vibe/bookDetails/:id",
        element: <BookDetails></BookDetails>,
        loader: () => fetch('./books.json'),
      },
      {
        path: '/react-book-vibe/pages',
        element: <PagesToRead></PagesToRead>,
        loader: () => fetch('./books.json'),

      },
      {
        path: '/react-book-vibe/listed',
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('./books.json'),
      },
      {
        path: '/react-book-vibe/about',
        element: <About></About>,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
