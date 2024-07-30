const EXPANDED_CLASS = "Accordion__trigger--expanded";
const ACTIVE_CLASS = "Panel--active";
const accordionItems = Array.from(
  document.querySelectorAll(".Accordion__item")
);

accordionItems.forEach((accordionItem) => {
  const trigger = accordionItem.querySelector(".Accordion__trigger");
  const panel = document.getElementById(trigger.getAttribute("aria-controls"));

  trigger.addEventListener("click", () => {
    trigger.classList.toggle(EXPANDED_CLASS);
    panel.classList.toggle(ACTIVE_CLASS);

    // Fix me! Assistive technology has no way of conveying expanded state
    // Turn a screen reader on to experience it for yourself
  });
});
