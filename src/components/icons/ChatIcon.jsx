export default function ChatIcon({ active }) {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 block" fill={active ? "#293A61" : "#BABABA"}>
      <path d="M4 4h16v12H6l-2 2V4z"/>
    </svg>
  );
}