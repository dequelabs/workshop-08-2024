const modalWrapper = document.querySelector(".ModalWrapper");
const cancel = document.querySelector(".Modal .Cancel");
const confirm = document.querySelector(".Modal .Confirm");
const modalTriggers = Array.from(document.querySelectorAll(".Like"));
// this might help with aria-hiding things outside of the modal ;)
const appWrapper = document.querySelector(".App");

const showModal = () => {
  modalWrapper.classList.add("Modal--open");
};

const hideModal = () => {
  modalWrapper.classList.remove("Modal--open");
};

modalTriggers.forEach((trigger) => {
  trigger.addEventListener("click", showModal);
});

cancel.addEventListener("click", hideModal);
confirm.addEventListener("click", hideModal);
