const form = document.querySelector("#forms form");
const notification = form.querySelector(".Notification--info");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const ACTIVE_ERROR_CLASS = "Error--active";
const ACTIVE_NOTIFICATION_CLASS = "Notification--active";

// least greedy possible email validation
const isValidEmail = (emailAddress) => /^\S+@\S+\.\S+$/.test(emailAddress);

// pre-form-validation cleanup
const cleanUp = () => {
  // hide all error messages
  Array.from(form.querySelectorAll(".Error")).forEach((element) =>
    element.classList.remove(ACTIVE_ERROR_CLASS)
  );

  // hide notification (success message)
  notification.classList.remove(ACTIVE_NOTIFICATION_CLASS);
};

// renders a given input's error by adding the `ACTIVE_ERROR_CLASS` to it
const renderError = (input) => {
  // find the field wrapper
  const wrapper = input.closest(".Field");
  const error = wrapper && wrapper.querySelector(".Error");

  if (!error) {
    console.error("Unable to find error for input", input);
    return;
  }

  error.classList.add(ACTIVE_ERROR_CLASS);
};

/**
 * Form validation should:
 * - focus first erroneous input
 * - render descriptive error messages that are
 *   programmatically associated with the relevant input(s)
 */
const validateForm = (e) => {
  e.preventDefault();
  let hasError = false;
  cleanUp();

  // validate that they've entered a first name
  if (!firstName.value) {
    renderError(firstName);
    hasError = true;
  }

  // validate that they've entered a last name
  if (!lastName.value) {
    renderError(lastName);
    hasError = true;
  }

  // validate that they've entered a valid email
  if (!email.value || !isValidEmail(email.value)) {
    renderError(email);
    hasError = true;
  }

  if (!hasError) {
    notification.classList.add(ACTIVE_NOTIFICATION_CLASS);
  }
};

// attach form submission handler
form.addEventListener("submit", validateForm);
