export default function HomeIcon({ active }) {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 block" fill={active ? "#293A61" : "#BABABA"}>
      <path d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9.5z"/>
    </svg>
  );
}