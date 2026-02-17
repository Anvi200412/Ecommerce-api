
// // // import { BrowserRouter, Routes, Route } from 'react-router-dom';
// // // import { useEffect, useState } from 'react';
// // // import AOS from 'aos';
// // // import 'aos/dist/aos.css';

// // // import Navbar from './Components/Navbar';
// // // import Footer from './Components/Footer';
// // // import Home from './Pages/Home';
// // // import Product from './Pages/Product';
// // // import Productdetails from './Components/Products/Productdetails';
// // // import CategoryPage from './Components/Categories/Categorypage';
// // // import Category from './Pages/Category';
// // // import Contact from './Pages/Contact';

// // // function App() {
// // //   const [wishlist, setWishlist] = useState([]);  

// // //   useEffect(() => {
// // //     AOS.init({ duration: 1000, once: true, easing: 'ease-in-out' });
// // //   }, []);

  
// // //   const addToWishlist = (product) => {
// // //     if (!wishlist.find((item) => item.id === product.id)) {
// // //       setWishlist([...wishlist, product]);
// // //     }
// // //   };

// // //   return (
// // //     <BrowserRouter>
// // //       {/* Pass wishlist count to Navbar */}
// // //       <Navbar wishlistCount={wishlist.length} />

// // //       <Routes>
// // //         <Route path="/" element={<Home />} />
// // //         {/* Pass addToWishlist to Product page */}
// // //         <Route path="/product" element={<Product addToWishlist={addToWishlist} />} />
// // //         <Route path="/product/:id" element={<Productdetails />} />
// // //         <Route path="/category" element={<CategoryPage />} />
// // //         <Route path="/category/:categoryName" element={<Category />} />
// // //         <Route path="/contact" element={<Contact />} />
// // //       </Routes>

// // //       <Footer />
// // //     </BrowserRouter>
// // //   );
// // // }

// // // export default App;
// // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import { useEffect, useState } from "react";
// // import AOS from "aos";
// // import "aos/dist/aos.css";

// // import Navbar from "./Components/Navbar";
// // import Footer from "./Components/Footer";
// // import Home from "./Pages/Home";
// // import Product from "./Pages/Product";
// // import Productdetails from "./Components/Products/Productdetails";
// // import CategoryPage from "./Components/Categories/Categorypage";
// // import Category from "./Pages/Category";
// // import Contact from "./Pages/Contact";
// // import Wishlist from "./Pages/Wishlist";
// // import { CartProvider, useCart } from "./Context/Cartcontext";


// // function App() {
// //   const [wishlist, setWishlist] = useState([]);

// //   useEffect(() => {
// //     AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
// //   }, []);

// //   const addToWishlist = (product) => {
// //     if (!wishlist.find((item) => item.id === product.id)) {
// //       setWishlist([...wishlist, product]);
// //     }
// //   };

// //   return (
// //     <BrowserRouter>
// //       <Navbar wishlistCount={wishlist.length} />
// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route
// //           path="/product"
// //           element={<Product addToWishlist={addToWishlist} />}
// //         />
// //         <Route path="/product/:id" element={<Productdetails />} />
// //         <Route path="/category" element={<CategoryPage />} />
// //         <Route
// //           path="/category/:categoryName"
// //           element={<Category addToWishlist={addToWishlist} />}
// //         />
// //         <Route path="/contact" element={<Contact />} />
// //         <Route path="/wishlist" element={<Wishlist wishlist={wishlist} />} />
// //       </Routes>
// //       <Footer />
// //     </BrowserRouter>
// //   );
// // }

// // export default App;
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer";
// import Home from "./Pages/Home";
// import Product from "./Pages/Product";
// import Productdetails from "./Components/Products/Productdetails";
// import CategoryPage from "./Components/Categories/Categorypage";
// import Category from "./Pages/Category";
// import Contact from "./Pages/Contact";
// import Wishlist from "./Pages/Wishlist";
// import CartPage from "./Pages/Cartpage"; // New Cart page

// import { CartProvider } from "./Context/Cartcontext"; // CartProvider

// function App() {
//   const [wishlist, setWishlist] = useState([]);

//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
//   }, []);

//   const addToWishlist = (product) => {
//     if (!wishlist.find((item) => item.id === product.id)) {
//       setWishlist([...wishlist, product]);
//     }
//   };

//   return (
//     <CartProvider> {/* Wrap the app with CartProvider */}
//       <BrowserRouter>
//         <Navbar wishlistCount={wishlist.length} />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route
//             path="/product"
//             element={<Product addToWishlist={addToWishlist} />}
//           />
//           <Route path="/product/:id" element={<Productdetails />} />
//           <Route path="/category" element={<CategoryPage />} />
//           <Route
//             path="/category/:categoryName"
//             element={<Category addToWishlist={addToWishlist} />}
//           />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/wishlist" element={<Wishlist wishlist={wishlist} />} />
//           <Route path="/cart" element={<CartPage />} /> {/* Add Cart page route */}
//         </Routes>
//         <Footer />
//       </BrowserRouter>
//     </CartProvider>
//   );
// }

// export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Productdetails from "./Components/Products/Productdetails";
import CategoryPage from "./Components/Categories/Categorypage";
import Category from "./Pages/Category";
import Contact from "./Pages/Contact";
import Wishlist from "./Pages/Wishlist";
import CartPage from "./Pages/Cartpage";
import Login from "./Pages/Login";

import { CartProvider } from "./Context/Cartcontext";
import { AuthProvider } from "./Context/AuthContext";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const addToWishlist = (product) => {
    if (!wishlist.find((item) => item.id === product.id)) {
      setWishlist([...wishlist, product]);
    }
  };

  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>

          <Routes>
            {/* Login route */}
            <Route path="/login" element={<Login />} />

            {/* Protected Website */}
            <Route
              path="/*"
              element={
                <ProtectedRoute>
                  <>
                    <Navbar wishlistCount={wishlist.length} />
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/product" element={<Product addToWishlist={addToWishlist} />} />
                      <Route path="/product/:id" element={<Productdetails />} />
                      <Route path="/category" element={<CategoryPage />} />
                      <Route path="/category/:categoryName" element={<Category addToWishlist={addToWishlist} />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/wishlist" element={<Wishlist wishlist={wishlist} />} />
                      <Route path="/cart" element={<CartPage />} />
                    </Routes>
                    <Footer />
                  </>
                </ProtectedRoute>
              }
            />
          </Routes>

        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;



