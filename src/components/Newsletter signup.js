import React from 'react';
// import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  // const [state, handleSubmit] = useForm('mpzbrwqv');
  // if (state.succeeded) {
  //   return <p>Thanks for joining!</p>;
  // }
  return (
    // <div class="container">
    //   <h1>FormSubmit Demo</h1>
    <form
      target="_blank"
      action="https://formsubmit.co/2aae2a93395e2f69c83049029eb46c35"
      method="POST"
      r
    >
      <div class="form-group">
        <div class="form-row">
          <div class="col">
            <input
              type="text"
              name="name"
              class="form-control"
              placeholder="Full Name"
              required
            />
          </div>
          <div class="col">
            <input
              type="email"
              name="email"
              class="form-control"
              placeholder="Email Address"
              required
            />
          </div>
        </div>
      </div>

      <button
        id="submitBtn"
        type="submit"
        class="btn btn-lg btn-dark btn-block"
      >
        Get aboard
      </button>
    </form>
    // </div>
  );
}
function Newsletter() {
  return <ContactForm />;
}
export default Newsletter;
