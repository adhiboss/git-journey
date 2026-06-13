const editor = document.getElementById("editor");
const preview = document.getElementById("preview");
const themeToggle = document.getElementById("themeToggle");

function parseMarkdown(text){

  // Headings
  text = text.replace(/^# (.*$)/gim, "<h1>$1</h1>");
  text = text.replace(/^## (.*$)/gim, "<h2>$1</h2>");

  // Bold
  text = text.replace(/\*\*(.*?)\*\*/gim, "<strong>$1</strong>");

  // Italic
  text = text.replace(/\*(.*?)\*/gim, "<em>$1</em>");

  // Inline code
  text = text.replace(/`(.*?)`/gim, "<code>$1</code>");

  // Line breaks
  text = text.replace(/\n/g, "<br>");

  return text;
}

function updatePreview(){
  preview.innerHTML = parseMarkdown(editor.value);
}

editor.addEventListener("input", updatePreview);

themeToggle.addEventListener("change", () => {
  document.body.classList.toggle("light");
});

updatePreview();
