import { React } from "react";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { NotFound } from "./layout/notFound";
import { Goods } from "./pages/goods";
import { Bag } from "./pages/bag";
import { Card } from "./pages/card";
import { NewCategoryForm } from "./pages/home/components/newCategoryForm";
import { EditCategoryForm } from "./pages/home/components/editCategoryForm";
import { CategoryProducts } from "./pages/home/components/categoryProduct";
import { AddProduct } from "./pages/bag/components/addProduct";
import { EditProduct } from "./pages/bag/components/editProduct";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="goods" element={<Goods />} />
          <Route path="add" element={<Bag />} />
          <Route path="pay" element={<Card />} />
          <Route path="new-category-form" element={<NewCategoryForm />} />
          <Route path="edit-category-form/:id" element={<EditCategoryForm />} />
          <Route path="category-products/:id" element={<CategoryProducts />} />
          <Route path="add-new-product" element={<AddProduct />} />
          <Route path="edit-product/:id" element={<EditProduct />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
