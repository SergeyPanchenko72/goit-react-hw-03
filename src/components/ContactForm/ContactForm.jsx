import css from "./ContactForm.module.css";
import { nanoid } from "nanoid";
// import { useId } from "react";
import { Formik, Form, Field } from "formik";

export default function ContactForm({ initialValues, onAdd }) {
  const handleSubmit = (values, actions) => {
    values.id = nanoid();
    onAdd(values);
    actions.resetForm();
  };
  const nameId = nanoid();
  const numberId = nanoid();

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.container}>
        <div>
          <label htmlFor={nameId}>Name</label>
          <Field className={css.input} type="text" name="name" id={nameId} />
        </div>
        <div>
          <label htmlFor={numberId}>Number</label>
          <Field
            className={css.input}
            type="text"
            name="number"
            id={numberId}
          />
        </div>

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
