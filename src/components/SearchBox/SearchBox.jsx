import css from "./SearchBox.module.css";

export default function SearchBox({ value, onSearch }) {
  return (
    <div className={css.container}>
      <p>Find contacts by name</p>
      <input
        className={css.input}
        value={value}
        onChange={(evt) => onSearch(evt.target.value)}
        type="text"
      />
    </div>
  );
}
