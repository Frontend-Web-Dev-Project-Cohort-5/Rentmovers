import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm('mpzbrwqv');
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email"></label>

      <input
        id="email"
        type="email"
        name="email"
        placeholder="emai. e.g abc@mail.com"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      {/* <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      /> */}
      <button type="submit" disabled={state.submitting} >
        Submit
      </button>
    </form>
  );
}
function Newsletter() {
  return <ContactForm />;
}
export default Newsletter;
