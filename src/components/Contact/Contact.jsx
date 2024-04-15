import css from "./Contact.module.css";

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={css.container}>
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button type="button" className={css.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
