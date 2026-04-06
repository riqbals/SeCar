export default function NotificationIcon({ active }) {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 block" fill={active ? "#293A61" : "#BABABA"}>
      <path d="M12 2a6 6 0 0 0-6 6v4l-2 2v1h16v-1l-2-2V8a6 6 0 0 0-6-6zm0 20a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2z"/>
    </svg>
  );
}