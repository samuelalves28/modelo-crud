import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';

import ProdutoView from './app/produto/Index';
import EditarProdutoView from './app/produto/upsert_produto';
import IndexView from './app/IndexView';
import DashboardView from './app/dashbord';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="app" element={<IndexView />}>
        <Route path="dashbord" index element={<DashboardView />} />
        <Route path="produto" element={<ProdutoView />} />
        <Route path="produto/c/:id" element={<EditarProdutoView />} />
      </Route>
    </>
  )
)

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
