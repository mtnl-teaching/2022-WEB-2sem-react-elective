export default function MyAltButton({ onClick, text }) {
  return (
    <h3 className="stolen-color alt-button" onClick={onClick}>
      {text}
    </h3>
  );
}
