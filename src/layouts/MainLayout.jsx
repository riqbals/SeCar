import logo from "../assets/images/logo-secar.png";

import HomeIcon from "../components/icons/HomeIcon";
import ChatIcon from "../components/icons/ChatIcon";
import TicketIcon from "../components/icons/TicketIcon";
import NotificationIcon from "../components/icons/NotificationIcon";
import ProfileIcon from "../components/icons/ProfileIcon";

import { useLocation, Link } from "react-router-dom";

export default function MainLayout({ children }) {
  const location = useLocation();

  // active state 
  const isHome = location.pathname === "/" || location.pathname === "/home";
  const isTicket = location.pathname === "/pesanan";
  const isChat = location.pathname === "/pesan";
  const isNotif = location.pathname === "/notifikasi";
  const isProfile = location.pathname === "/profil";

  return (
    <div className="border-t flex justify-around items-center py-2 text-xs">

      {/* FRAME HP */}
      <div className="relative w-full max-w-sm bg-white min-h-screen rounded-2xl shadow-lg flex flex-col">

        {/* HEADER */}
        <div className="flex items-center gap-2 px-4 py-3 border-b">
          <img src={logo} alt="SeCar Logo" className="w-8 h-8" />
          <h1 className="text-[15px] font-bold text-[#293A61] drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)]">
            SeCar
          </h1>
        </div>

        {/* CONTENT */}
        <div className="flex-1 p-4 overflow-y-auto pb-20">
          {children}
        </div>

        {/* BOTTOM NAVBAR */}
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-sm border-t flex justify-around items-center py-2 text-xs bg-white/90 backdrop-blur-md z-50 shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
        <Link to="/" className="flex flex-col items-center justify-center flex-1 gap-1 h-14">
            <HomeIcon active={isHome} />
            <p className={`${isHome ? "text-[#3868D5]" : "text-gray-400"} leading-none`}>
            Beranda
            </p>
        </Link>

        <Link to="/pesanan" className="flex flex-col items-center justify-center flex-1 gap-1 h-14">
            <TicketIcon active={isTicket} />
            <p className={`${isTicket ? "text-[#293A61]" : "text-gray-400"} leading-none`}>
            Pesanan
            </p>
        </Link>

        <Link to="/pesan" className="flex flex-col items-center justify-center flex-1 gap-1 h-14">
            <ChatIcon active={isChat} />
            <p className={`${isChat ? "text-[#293A61]" : "text-gray-400"} leading-none`}>
            Pesan
            </p>
        </Link>

        <Link to="/notifikasi" className="flex flex-col items-center justify-center flex-1 gap-1 h-14">
            <NotificationIcon active={isNotif} />
            <p className={`${isNotif ? "text-[#293A61]" : "text-gray-400"} leading-none`}>
            Notifikasi
            </p>
        </Link>

        <Link to="/profil" className="flex flex-col items-center justify-center flex-1 gap-1 h-14">
            <ProfileIcon active={isProfile} />
            <p className={`${isProfile ? "text-[#293A61]" : "text-gray-400"} leading-none`}>
            Profil
            </p>
        </Link>

            </div>

        </div>

    </div>
  );
}