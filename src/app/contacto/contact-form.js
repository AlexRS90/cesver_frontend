'use client'
import { useForm, ValidationError } from "@formspree/react";
import "../styles/contacto.css";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("YOUR_FORM_ID");

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        id="nombre"
        type="name"
        name="name"
        className="input-text"
        placeholder="NOMBRE"
      />
      <input
        id="email"
        type="email"
        name="email"
        className="input-text"
        placeholder="CORREO ELECTRÓNICO"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea
        id="message"
        name="message"
        className="input-message"
        placeholder="MENSAJE"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting} className="button-enviar">
        ENVIAR
      </button>
      <ValidationError errors={state.errors} />
    </form>
  );
}
