import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {

  const handleSubmit = async (e) => {
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Luna Chat</span>
        <span className="title">Tạo tài khoản</span>
        <form onSubmit={handleSubmit}>
          <input required type="text" placeholder="display name" />
          <input required type="email" placeholder="email" />
          <input required type="password" placeholder="password" />
          <input required style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <span>Tải ảnh lên</span>
          </label>
          <button>Tạo tài khoản</button>
          {err && <span>Đã sảy ra lỗi, vui lòng tải lại trang</span>}
        </form>
        <p>
          Bạn đã có tài khoản? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
