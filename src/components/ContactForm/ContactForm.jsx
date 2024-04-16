import css from "./ContactForm.module.css";
import { nanoid } from "nanoid";
// import { useId } from "react";
import { Formik, Form, Field } from "formik";
import { ErrorMessage } from "formik";

export default function ContactForm({ initialValues, onAdd, FeedbackSchema }) {
  const handleSubmit = (values, actions) => {
    values.id = nanoid();
    onAdd(values);
    actions.resetForm();
  };
  const nameId = nanoid();
  const numberId = nanoid();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.container}>
        <div>
          <label htmlFor={nameId}>Name</label>
          <Field className={css.input} type="text" name="name" id={nameId} />
          <ErrorMessage name="name" component="span" />
        </div>
        <div>
          <label htmlFor={numberId}>Number</label>
          <Field
            className={css.input}
            type="text"
            name="number"
            id={numberId}
          />
          <ErrorMessage name="number" component="span" />
        </div>

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
