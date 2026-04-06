export default function TicketIcon({ active }) {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 block" fill={active ? "#293A61" : "#BABABA"}>
      <path d="M3 9a2 2 0 0 1 2-2h14v3a2 2 0 0 0 0 4v3H5a2 2 0 0 1-2-2V9z"/>
    </svg>
  );
}