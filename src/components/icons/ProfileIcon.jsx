export default function ProfileIcon({ active }) {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 block" fill={active ? "#293A61" : "#BABABA"}>
      <path d="M12 12a5 5 0 1 0-0.001-10.001A5 5 0 0 0 12 12zm0 2c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5z"/>
    </svg>
  );
}