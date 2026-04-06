import { useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/images/logo-secar.png";

// ICON
import emailIcon from "../../assets/icons/login-icon/email-icon.svg";
import lockIcon from "../../assets/icons/login-icon/lock-icon.svg";
import carIcon from "../../assets/icons/login-icon/driver-icon.svg";
import userIcon from "../../assets/icons/login-icon/name-icon.svg";
import phoneIcon from "../../assets/icons/login-icon/telephone-icon.svg";
import simIcon from "../../assets/icons/login-icon/sim-icon.svg";
import locationIcon from "../../assets/icons/login-icon/location-icon.svg";
import eyeOffIcon from "../../assets/icons/login-icon/eye-off-icon.svg";

export default function Login() {
  const [tab, setTab] = useState("masuk");
  const [role, setRole] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("isLogin", "true");
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4">

        {/* HEADER */}
        <div className="flex items-center justify-center gap-2">
          <img src={logo} className="w-[84px] h-[84px]" />
          <h1 className="text-[60px] font-bold text-[#293A61] drop-shadow-[0_3px_4px_rgba(0,0,0,0.4)]">
            SeCar
          </h1>
        </div>

        {/* TAB */}
        <div className="flex bg-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => { setTab("masuk"); setRole(null); }}
            className={`flex-1 py-2 text-[24px] font-bold ${
              tab === "masuk" ? "bg-[#293A61] text-white" : "text-gray-600"
            }`}
          >
            Masuk
          </button>

          <button
            onClick={() => setTab("daftar")}
            className={`flex-1 py-2 text-[24px] font-bold ${
              tab === "daftar" ? "bg-[#293A61] text-white" : "text-gray-600"
            }`}
          >
            Daftar
          </button>
        </div>

        {/* ================= LOGIN ================= */}
        {tab === "masuk" && (
          <>
            <div className="flex items-center border p-2 rounded-lg gap-2">
              <img src={emailIcon} className="w-5 h-5 opacity-60" />
              <input placeholder="Email" className="outline-none w-full text-[16px]" />
            </div>

            <div className="flex items-center border p-2 rounded-lg gap-2">
              <img src={lockIcon} className="w-5 h-5 opacity-60" />
              <input type="Kata Sandi" placeholder="Kata Sandi" className="outline-none w-full text-[16px]" />
            </div>

            <button
              onClick={handleLogin}
              className="bg-[#3868D5] text-white py-2 rounded-lg text-[24px] font-bold transition-all duration-200 hover:opacity-90 active:scale-95"
            >
              Masuk
            </button>
          </>
        )}

        {/* ================= PILIH ROLE ================= */}
        {tab === "daftar" && !role && (
          <>
            <button
              onClick={() => setRole("sopir")}
              className="flex items-center gap-2 border p-2 rounded-lg text-[24px] font-bold"
            >
              <img src={carIcon} className="w-5 h-5" />
              Driver
            </button>

            <button
              onClick={() => setRole("penumpang")}
              className="flex items-center gap-2 border p-2 rounded-lg text-[24px] font-bold"
            >
              <img src={userIcon} className="w-5 h-5" />
              Penumpang
            </button>
          </>
        )}

        {/* ================= FORM DAFTAR ================= */}
        {tab === "daftar" && role && (
          <>
            <button
              onClick={() => setRole(null)}
              className="text-[#3868D5] text-[16px] font-semibold text-left"
            >
              ← Kembali
            </button>

            {/* NAMA */}
            <div className="flex items-center border p-2 rounded-lg gap-2">
              <img src={userIcon} className="w-5 h-5 opacity-60" />
              <input placeholder="Nama lengkap" className="outline-none w-full text-[16px]" />
            </div>

            {/* EMAIL */}
            <div className="flex items-center border p-2 rounded-lg gap-2">
              <img src={emailIcon} className="w-5 h-5 opacity-60" />
              <input placeholder="Email" className="outline-none w-full text-[16px]" />
            </div>

            {/* NO HP */}
            <div className="flex items-center border p-2 rounded-lg gap-2">
              <img src={phoneIcon} className="w-5 h-5 opacity-60" />
              <input placeholder="Nomor ponsel" className="outline-none w-full text-[16px]" />
            </div>

            {/* KHUSUS DRIVER */}
            {role === "sopir" && (
              <>
                <div className="flex items-center border p-2 rounded-lg gap-2">
                  <img src={simIcon} className="w-5 h-5 opacity-60" />
                  <input placeholder="Nomor SIM" className="outline-none w-full text-[16px]" />
                </div>

                <div className="flex items-center border p-2 rounded-lg gap-2">
                  <img src={locationIcon} className="w-5 h-5 opacity-60" />
                  <input placeholder="Alamat" className="outline-none w-full text-[16px]" />
                </div>
              </>
            )}

            {/* PASSWORD */}
            <div className="flex items-center border p-2 rounded-lg gap-2">
              <img src={lockIcon} className="w-5 h-5 opacity-60" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Kata sandi"
                className="outline-none w-full text-[16px]"
              />

              <img
                src={eyeOffIcon}
                onClick={() => setShowPassword(!showPassword)}
                className="w-5 h-5 opacity-60 cursor-pointer"
              />
            </div>

            {/* KONFIRMASI */}
            <div className="flex items-center border p-2 rounded-lg gap-2">
              <img src={lockIcon} className="w-5 h-5 opacity-60" />

              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Konfirmasi kata sandi"
                className="outline-none w-full text-[16px]"
              />

              <img
                src={eyeOffIcon}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="w-5 h-5 opacity-60 cursor-pointer"
              />
            </div>

            <button className="bg-[#3868D5] text-white py-2 rounded-lg text-[24px] font-bold transition-all duration-200 hover:opacity-90 active:scale-95">
              Daftar
            </button>
          </>
        )}

      </div>
    </div>
  );
}