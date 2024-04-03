import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import NotFound from "pages/NotFound";
// import AddProduct from "AdminPanel/AddProduct";
// import ProductList from "AdminPanel/Products";
// import AdminLayout from "AdminPanel/Layout";
// import PasswordSettings from "AdminPanel/PasswordSettings";
// import ProductCategories from "AdminPanel/ProductCategories";
// import Staffs from "AdminPanel/Staff";
// import LogIn from "AdminPanel/LogIn";
// import RequireAuth from "AdminPanel/utils/RequireAuth";
import Homepage from "./pages/Homepage/Homepage";
import Layout from "./Components/Layout/Layout";
import Teams from "./pages/Teams/Teams";
import Team from "./pages/Team/Team";
import News from "./pages/News/News";
import PlayerDetails from "./pages/PlayerDetails/PlayerDetails";


export default function AppContainer(){
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '',
          element:
            <Homepage />,
        },
        {
          path: '/teams',
          element:
            <Teams />,
        },
        {
          path: '/teams/afghanistan',
          element:
            <Team />,
        },
        {
          path: '/teams/afghanistan/player/:id',
          element:
            <PlayerDetails />,
        },
        {
          path: '/news',
          element:
            <News />,
        },
        // {
        //   path: 'shop',
        //   element: 
        //   <Suspense fallback={<Animations />}>
        //     <Shop />,
        //   </Suspense>,
        // },
        // {
        //   path: 'aboutus',
        //   element: 
        //   <Suspense fallback={<Animations />}>
        //     <Aboutus />,
        //   </Suspense>,
        // },
        // {
        //   path: 'product/:id',
        //   element: 
        //   <Suspense fallback={<Animations />}>
        //     <ShopDetailDescription />,
        //   </Suspense>,
        // },
        
      ],
      
    },
    // {
    //   path: 'admin/signin',
    //   element: 
    //   <Suspense fallback={<Animations />}>
    //     <LogIn />,
    //   </Suspense>,
    // },
    // {
    //   path: '/admin',
    //   element: (
    //     <RequireAuth>
    //       <AdminLayout />
    //     </RequireAuth>
    //     ),
    //   children: [
    //       {
    //           path: 'staffs',
    //           element: 
    //           <Suspense fallback={<Animations />}>
    //             <Staffs />,
    //           </Suspense>
    //       },
    //       {
    //           path: 'products',
    //           element: 
    //           <Suspense fallback={<Animations />}>
    //             <ProductList />,
    //           </Suspense>
    //       },
    //       {
    //           path: 'add-product',
    //           element: 
    //           <Suspense fallback={<Animations />}>
    //             <AddProduct />,
    //           </Suspense>
    //       },
    //       {
    //           path: 'product-categories',
    //           element: 
    //           <Suspense fallback={<Animations />}>
    //             <ProductCategories />,
    //           </Suspense>
    //       },
    //       {
    //         path: 'password-settings',
    //         element: 
    //         <Suspense fallback={<Animations />}>
    //           <PasswordSettings />,
    //         </Suspense>
    //       },
    //   ]
    // },
  ])
  return <RouterProvider router={router} />;
}

