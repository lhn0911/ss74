import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Show.css"; // Import the CSS file

const Show = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [mainImage, setMainImage] = useState<string>("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/Todolist/${id}`
        );
        if (response.status === 200) {
          setProduct(response.data);
          setMainImage(response.data.image); // Set the main image to the product's main image
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
  };

  const handleSizeClick = (size: string) => {
    setSelectedSize(size);
  };

  const handleThumbnailClick = (image: string) => {
    setMainImage(image);
  };

  return (
    <div className="container">
      <div className="product-image">
        <img src={mainImage} alt={product.name} style={{ width: "590px" }} />
        <div className="thumbnail-container">
          {product.images &&
            product.images.map((image: string, index: number) => (
              <img
                key={index}
                src={image}
                alt={`${product.name} ${index + 1}`}
                className="thumbnail"
                onClick={() => handleThumbnailClick(image)}
                style={{ width: "100px", cursor: "pointer", margin: "5px" }}
              />
            ))}
        </div>
      </div>
      <div className="product-info">
        <h1>{product.name}</h1>
        <span className="material-symbols-outlined">
          star star star star star
        </span>
        | Đã bán: 500 sản phẩm | Mã hàng: #5110
        <p>Price: {product.price} VND</p>
        <p>Sale: {product.sale}</p>
        <button>Hướng dẫn chọn size</button>
        <p>Chọn màu sắc:</p>
        <div className="color-options">
          {product.color.map((color: string) => (
            <div
              key={color}
              className={`color-option ${
                selectedColor === color ? "selected" : ""
              }`}
              onClick={() => handleColorClick(color)}
            >
              {color}
            </div>
          ))}
        </div>
        <p>Chọn size:</p>
        <div className="size-options">
          {product.size.map((size: string) => (
            <div
              key={size}
              className={`size-option ${
                selectedSize === size ? "selected" : ""
              }`}
              onClick={() => handleSizeClick(size)}
            >
              {size}
            </div>
          ))}
        </div>
        <p>
          Chọn số lượng:
          <input type="number" />
        </p>
        <button>Thêm vào giỏ hàng</button>
      </div>
    </div>
  );
};

export default Show;
