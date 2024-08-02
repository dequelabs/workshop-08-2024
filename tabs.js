const wrapper = document.querySelector(".Tabs");
const tabs = Array.from(wrapper.querySelectorAll('[role="tab"]'));
const panels = Array.from(wrapper.querySelectorAll('[role="tabpanel"]'));
const PANEL_ACTIVE_CLASS = "Panel--active";

const activateTab = (activeIndex) => {
  tabs.forEach((tab, i) => {
    const isActive = i === activeIndex;
    // activate selected tab and deactivate the rest
    tab.setAttribute("aria-selected", `${isActive}`);
    // update selected tab's tab index to 0 and -1 to the rest
    tab.tabIndex = isActive ? 0 : -1;
    // activate selected tab's panel and deactivate the rest
    panels[i].classList[isActive ? "add" : "remove"](PANEL_ACTIVE_CLASS);
  });
};

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    activateTab(index);
  });

  tab.addEventListener("keydown", (e) => {
    console.log(e.key);

    /**
     * Fix me!
     *
     * Handle the following keyboard interactions:
     * (based on https://www.w3.org/WAI/ARIA/apg/patterns/tabs/examples/tabs-automatic/)
     *
     * - Right Arrow (`e.key === "ArrowRight"`):
     *     - Moves focus to the next tab.
     *     - If focus is on the last tab, moves focus to the first tab.
     *     - Activates the newly focused tab.
     * - Left Arrow (`e.key === "ArrowLeft"`):
     *     - Moves focus to the previous tab.
     *     - If focus is on the first tab, moves focus to the last tab.
     *     - Activates the newly focused tab.
     */
  });
});
