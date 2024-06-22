$(document).ready(function () {
  const marqueeElementsDisplayed = parseInt(
    $(".marquee-content").css("--marquee-elements-displayed")
  );
  const marqueeContent = $("ul.marquee-content");
  const root = document.documentElement;
  for (let i = 0; i < marqueeElementsDisplayed; i++) {
    marqueeContent.append(marqueeContent.children().eq(i).clone(true));
  }
  root.style.setProperty(
    "--marquee-elements",
    marqueeContent.children().length
  );
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-header");
    const content = item.querySelector(".accordion-content");

    header.addEventListener("click", () => {
      // close other items
      accordionItems.forEach((otherItem) => {
        if (otherItem !== item && otherItem.classList.contains("active")) {
          otherItem.classList.remove("active");
          otherItem.querySelector(".accordion-content").style.height = 0;
        }
      });

      item.classList.toggle("active");

      if (item.classList.contains("active")) {
        content.style.height = `${content.scrollHeight}px`;
      } else {
        content.style.height = 0;
      }
    });
  });
});
