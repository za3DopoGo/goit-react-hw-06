import { ErrorMessage, Field, Form, Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice.js";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { nanoid } from "nanoid";
const contactFormSchema = Yup.object().shape({
  name: Yup.string()
    .required("Required")
    .min(3, "Too short!")
    .max(50, "Your name must be less than 50 characters!"),
  number: Yup.string()
    .required("Required")
    .min(3, "Too short!")
    .max(50, "Your number must be less than 50 characters!"),
});

const FORM_INITIAL_VALUES = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts.items);

  const handleSubmit = (values, actions) => {
    const finalContact = { id: nanoid(), ...values };
    dispatch(addContact(finalContact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={contactFormSchema}
    >
      <Form className={css.form}>
        <label>
          <p>Name</p>
          <Field className={css.name} type="text" name="name"></Field>
          <ErrorMessage className={css.error} component="p" name="name" />
        </label>
        <label>
          <p>Number</p>
          <Field className={css.number} type="tel" name="number"></Field>
          <ErrorMessage className={css.error} component="p" name="number" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
