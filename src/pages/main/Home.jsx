import MainLayout from "../../layouts/MainLayout";
import { FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [passenger, setPassenger] = useState(1);
  const [openDropdown, setOpenDropdown] = useState(null);

  const locations = [
    "Makassar",
    "Pinrang",
    "Bone",
    "Camba",
    "Parepare",
    "Palopo",
    "Barru",
    "Maros",
    "Toraja",
    "Wajo"
  ];

  // PROTECT LOGIN
  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin");
    if (!isLogin) navigate("/login");
  }, [navigate]);

  // CLOSE DROPDOWN SAAT KLIK LUAR
  useEffect(() => {
    const handleClickOutside = () => setOpenDropdown(null);
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  // COMPONENT DROPDOWN
  const Dropdown = ({ value, setValue, placeholder, icon, color }) => {
    return (
      <div className="relative">
        <div
          onClick={(e) => {
            e.stopPropagation();
            setOpenDropdown(openDropdown === placeholder ? null : placeholder);
          }}
          className="flex items-center bg-white px-3 py-3 rounded-lg gap-3 cursor-pointer"
        >
          <span className={color}>{icon}</span>

          <span className={`flex-1 ${value ? "text-black" : "text-gray-400"}`}>
            {value || placeholder}
          </span>

          <span
            className={`transition-transform ${
              openDropdown === placeholder ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </div>

        {openDropdown === placeholder && (
          <div className="absolute z-50 mt-2 w-full bg-white text-black rounded-xl shadow-lg max-h-48 overflow-y-auto">
            {locations.map((loc, i) => (
              <div
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setValue(loc);
                  setOpenDropdown(null);
                }}
                className="px-4 py-3 hover:bg-blue-100 cursor-pointer"
              >
                {loc}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <MainLayout>
      <div className="flex flex-col gap-5">

        {/* HEADER */}
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-400 text-sm">Selamat pagi,</p>
            <h2 className="text-[22px] font-bold">Halo, User!</h2>
          </div>

          <div className="bg-[#293A61] text-white w-10 h-10 flex items-center justify-center rounded-full">
            ?
          </div>
        </div>

        {/* CARD SEARCH */}
        <div className="bg-[#293A61] text-white p-5 rounded-2xl flex flex-col gap-4">

          <p className="text-sm">Mau ke mana hari ini?</p>

          {/* PENJEMPUTAN */}
          <Dropdown
            value={pickup}
            setValue={setPickup}
            placeholder="Pilih penjemputan"
            icon={<FaMapMarkerAlt />}
            color="text-blue-500"
          />

          {/* TUJUAN */}
          <Dropdown
            value={destination}
            setValue={setDestination}
            placeholder="Pilih tujuan"
            icon={<FaMapMarkerAlt />}
            color="text-red-500"
          />

          {/* JADWAL + PENUMPANG */}
          <div className="flex gap-3">

            {/* DATE */}
            <div className="flex items-center gap-2 bg-white text-black px-3 py-2 rounded-lg text-sm flex-1">
              <MdAccessTime />

              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full outline-none bg-transparent"
              />
            </div>

            {/* PENUMPANG */}
            <div className="flex items-center gap-2 bg-white text-black px-3 py-2 rounded-lg text-sm flex-1">
              <FaUser />

              <select
                value={passenger}
                onChange={(e) => setPassenger(e.target.value)}
                className="w-full outline-none bg-transparent"
              >
                {[1,2,3,4,5,6,7,8].map((num) => (
                  <option key={num} value={num}>
                    {num} Penumpang
                  </option>
                ))}
              </select>
            </div>

          </div>

          {/* BUTTON CARI PERJALANAN*/}
          <button
            onClick={() => navigate("/hasil")}
            disabled={!pickup || !destination || !date}
            className={`py-3 rounded-xl flex items-center justify-center gap-2 font-bold text-[18px] shadow-md
              ${
                pickup && destination && date
                  ? "bg-[#3868D5] text-white"
                  : "bg-gray-400 text-gray-200 cursor-not-allowed"
              }`}
          >
            <FiSearch />
            Cari Perjalanan
          </button>

        </div>

        {/* PERJALANAN TERAKHIR */}
        <div>
          <div className="flex justify-between">
            <h3 className="font-bold">Perjalanan Terakhir</h3>
            <span className="text-blue-500 text-sm cursor-pointer">Hapus</span>
          </div>

          <div className="flex gap-3 mt-2 overflow-x-auto">

            <div className="bg-[#293A61] text-white p-3 rounded-xl min-w-[140px]">
              <p>Pinrang →</p>
              <p className="font-bold">Makassar</p>
              <p className="text-xs opacity-70">Rp.450.000 • 3 penumpang</p>
            </div>

            <div className="bg-[#293A61] text-white p-3 rounded-xl min-w-[140px]">
              <p>Makassar →</p>
              <p className="font-bold">Wajo</p>
              <p className="text-xs opacity-70">Rp.300.000 • 2 penumpang</p>
            </div>

          </div>
        </div>

        {/* PROMO */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-5 rounded-2xl">
          <p className="text-sm">Promo Spesial</p>

          <h3 className="text-xl font-bold mt-1">
            Diskon 50%<br />Perjalanan Pertama
          </h3>

          <p className="text-xs mt-1 opacity-80">
            Gunakan Kode : BARU50
          </p>

          <button className="mt-3 bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold">
            Klaim Sekarang
          </button>
        </div>

      </div>
    </MainLayout>
  );
}