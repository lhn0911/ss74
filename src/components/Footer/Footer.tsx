import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-item">
          <img
            src="//theme.hstatic.net/200000000133/1001205759/14/home_policy_icon_1.png?v=782"
            alt="Miễn phí vận chuyển"
          />
          <div className="footer-text">
            <p className="title">Miễn phí vận chuyển</p>
            <p className="description">Miễn phí đơn hàng từ 699.000đ</p>
          </div>
        </div>
        <div className="footer-item">
          <img
            src="//theme.hstatic.net/200000000133/1001205759/14/home_policy_icon_2.png?v=782"
            alt="Miễn phí cước đổi hàng"
          />
          <div className="footer-text">
            <p className="title">Miễn phí cước đổi hàng</p>
            <p className="description">
              Đổi trả hàng sau 7 ngày nếu không vừa ý
            </p>
          </div>
        </div>
        <div className="footer-item">
          <img
            src="//theme.hstatic.net/200000000133/1001205759/14/home_policy_icon_3.png?v=782"
            alt="Tổng Đài  Miễn Phí"
          />
          <div className="footer-text">
            <p className="title">Tổng Đài Miễn Phí</p>
            <p className="description">
              Gọi <strong>1800.1732</strong> để được tư vấn
            </p>
          </div>
        </div>
        <div className="footer-item">
          <img
            src="//theme.hstatic.net/200000000133/1001205759/14/home_policy_icon_4.png?v=782"
            alt="Thanh toán đa dạng"
          />
          <div className="footer-text">
            <p className="title">Thanh toán đa dạng</p>
            <p className="description">Phương thức thanh toán đa dạng</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="contact-info">
          <div className="hotline">
            <img
              src="https://shoponlinegiagoc.com/wp-content/uploads/2020/02/support.svg"
              alt="Hotline"
            />
            <div>
              <p className="hotline-number">0777 48 0777</p>
              <p className="hotline-hours">HOTLINE (7h30 - 21h)</p>
            </div>
          </div>
          <div className="address">
            <p>Địa chỉ:</p>
            <p>
              <i className="fa-solid fa-location-dot"></i> Chi Nhánh Miền Nam:
              66B1, Đường số 06, Khu phố 02, P.Hiệp Bình Chánh, Q.Thủ Đức,
              Tp.HCM
            </p>
            <p>
              <i className="fa-solid fa-location-dot"></i> Chi Nhánh Miền Bắc:
              Số 8, ngách 24, ngõ 221, Định Công, P.Định Công, Q.Hoàng Mai, Hà
              Nội
            </p>
            <p>
              <i className="fa-regular fa-envelope"></i> TTshop@gmail.com
            </p>
          </div>
        </div>
        <div>
          <div className="thongtin">
            <p>
              <i className="fa-solid fa-bullhorn"></i>Giới thiệu
            </p>
            <p>
              <i className="fa-regular fa-gem"></i>Quy chế hoạt động
            </p>
            <p>
              <i className="fa-solid fa-headphones-simple"></i>Liên hệ
            </p>
            <p>
              {" "}
              <i className="fa-solid fa-thumbs-up"></i>Hợp tác
            </p>
          </div>
          <div className="icon">
            <a href="">
              <i className="fa-brands fa-facebook"></i>Facebook/TTshop
            </a>
            <br />
            <a href="" style={{ color: "black" }}>
              <i className="fa-brands fa-tiktok"></i>Tiktok/TTshop
            </a>
            <br />
            <a href="" style={{ color: "red" }}>
              <i className="fa-brands fa-youtube"></i>Youtube/TTshop
            </a>
          </div>
        </div>
        <div className="policies">
          <p>
            <i className="fa-solid fa-shield-halved"></i> Chính sách bảo hành
          </p>
          <p>
            <i className="fa-solid fa-clock"></i> Chính sách cho thuê sản phẩm
          </p>
          <p>
            <i className="fa-solid fa-bell"></i> Đổi trả - hoàn tiền
          </p>
          <p>
            <i className="fa-solid fa-lock"></i> Chính sách bảo mật thông tin
          </p>
        </div>
        <div className="guide">
          <p>
            <i className="fa-solid fa-magnifying-glass"></i> Hướng dẫn tìm kiếm
            sản phẩm
          </p>
          <p>
            <i className="fa-solid fa-cart-shopping"></i> Hướng dẫn đặt hàng
          </p>
          <p>
            <i className="fa-solid fa-truck"></i> Hình thức giao nhận hàng
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
