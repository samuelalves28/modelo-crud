import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';

import IndexView from './app/produto/Index';
import EditarProdutoView from './app/produto/editar_produto';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="app">
        <Route path="produto" index element={<IndexView />} />
        <Route path="produto/:id" index element={<EditarProdutoView />} />
      </Route>
    </>
  )
)

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
