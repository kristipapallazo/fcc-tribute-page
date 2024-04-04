const run = () => {
  const hoveredEl = document.getElementById("hovered-el");
  const captionEl = document.getElementById("img-caption");

  let initialContent = captionEl.innerHTML;

  const changeContent = (content, ttl = 250) => {
    //content = initial || new
    captionEl.style.opacity = 0;
    setTimeout(() => {
      captionEl.style.opacity = 1;
      captionEl.innerHTML = content;
    }, ttl);
  };

  hoveredEl.addEventListener("mouseover", () => {
    const newContent = "Abanian map by cities.";
    changeContent(newContent);
  });

  hoveredEl.addEventListener("mouseout", () => {
    changeContent(initialContent);
  });
};
run();
