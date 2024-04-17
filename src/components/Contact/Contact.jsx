import css from "./Contact.module.css";
import { BsFillPersonFill } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={css.container}>
      <div>
        <p>
          <BsFillPersonFill className={css.icon} />
          {name}
        </p>

        <p>
          <BsTelephoneFill className={css.icon} />
          {number}
        </p>
      </div>
      <button type="button" className={css.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
