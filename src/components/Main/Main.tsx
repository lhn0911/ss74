import React, { useEffect, useState } from "react";
import "./Main.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  sale: string;
  price: string;
  image: string;
  size: string[];
  color: string[];
  quantity: string;
}

const MainSection = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [visibleStart, setVisibleStart] = useState(0);
  const visibleCount = 4;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/Todolist");
        if (response.status === 200) {
          setProducts(response.data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const showProductDetail = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  const handleNext = () => {
    if (visibleStart + visibleCount < products.length) {
      setVisibleStart(visibleStart + 1);
    }
  };

  const handlePrev = () => {
    if (visibleStart > 0) {
      setVisibleStart(visibleStart - 1);
    }
  };

  const visibleProducts = products.slice(
    visibleStart,
    visibleStart + visibleCount
  );

  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://bizweb.dktcdn.net/100/332/895/files/98207999-3010187859058461-7340109120432766976-o.png?v=1590652995059"
              className="d-block w-100 "
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://seotrends.com.vn/wp-content/uploads/2023/06/anh-sale-banner-sale-nen-do-chu-trang.jpg"
              className="d-block w-100 "
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://sanphamngon.com/wp-content/uploads/2019/12/shopee.jpg"
              className="d-block w-100"
              alt="Third slide"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="main-section">
        <h2 className="main-title" style={{ color: "red", fontWeight: "bold" }}>
          SẢN PHẨM NỔI BẬT
        </h2>
        <div className="navigation-buttons">
          <button
            className="nav-button"
            onClick={handlePrev}
            disabled={visibleStart === 0}
          >
            &#8592;
          </button>
          <button
            className="nav-button"
            onClick={handleNext}
            disabled={visibleStart + visibleCount >= products.length}
          >
            &#8594;
          </button>
        </div>
        <div className="categories">
          {visibleProducts.map((product) => (
            <div
              key={product.id}
              className="category-item"
              onClick={() => showProductDetail(product.id)}
            >
              <img
                src={product.image}
                alt={product.name}
                className="category-image"
              />
              <div className="category-info">
                <p className="category-title">{product.name}</p>
                <button className="category-button">
                  <span>&#10140;</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        <h2
          className="main-title"
          style={{ color: "red", fontWeight: "bold", marginTop: "20px" }}
        >
          SẢN PHẨM MỚI
        </h2>
        <div className="new-products">
          {products.map((product) => (
            <div
              key={product.id}
              className="new-product-item"
              onClick={() => showProductDetail(product.id)}
            >
              <img
                src={product.image}
                alt={product.name}
                className="new-product-image"
              />
              <div className="new-product-info">
                <p className="new-product-title">{product.name}</p>
                <p className="new-product-price">{product.price}đ</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MainSection;
