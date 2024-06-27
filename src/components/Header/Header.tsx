import React from "react";
import "./Header.scss";

export default function Header() {
  return (
    <div className="header-container">
      <header className="header">
        <div className="top-bar">
          <span>
            Gọi CSKH: <strong>1800.9203</strong> Nhấn phím 1 - Mua hàng nhấn
            phím 2 |
          </span>
          <span> Hệ thống 60 cửa hàng</span>
        </div>
        <div className="main-bar">
          <div className="logo-container">
            <a href="#">
              <img
                src="/src/assets/imgs/logoshop.png"
                className="shoplogo"
                alt="Genviet Jeans Logo"
              />
            </a>
          </div>
          <nav className="menu">
            <ul>
              <li className="menu-item">
                <a href="#">TRANG CHỦ</a>
              </li>
              <li className="menu-item">
                <a href="#">DANH MỤC</a>
              </li>
              <li>
                <input type="text" placeholder="Nhập tên sản phẩm...." />
              </li>
              <li className="menu-item">
                <span className="material-symbols-outlined search">search</span>
              </li>
            </ul>
          </nav>
          <div className="icons">
            <a href="#" className="user-icon">
              <span className="material-symbols-outlined">person</span>
              <span style={{ fontSize: "15px" }}>Đăng nhập</span>
            </a>
            <a href="#" className="user-icon">
              <span className="material-symbols-outlined">person</span>
              <span style={{ fontSize: "15px" }}>Đăng kí</span>
            </a>
            <a href="#" className="user-icon" style={{ display: "none" }}>
              <span className="material-symbols-outlined">person</span>
              <span style={{ fontSize: "15px" }}>username</span>
            </a>
            <a href="#" className="user-icon" style={{ display: "none" }}>
              <span className="material-symbols-outlined">person</span>
              <span style={{ fontSize: "15px" }}>Đăng xuất</span>
            </a>
            <a href="#" className="cart-icon">
              <span className="material-symbols-outlined">shopping_cart</span>
              <span style={{ fontSize: "15px" }}>Giỏ hàng</span>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
