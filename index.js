const addBox = document.querySelector(".add-box");
const popupBox = document.querySelector(".popup-box");
const titleTag = document.querySelector("input");
const descTag = document.querySelector("textarea");
const closePopupBox = document.querySelector(".popup-box header i");
const addBtn = document.querySelector("button");
addBtn.disabled = true;

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const notes = JSON.parse(localStorage.getItem("notes") || "[]");
addBox.addEventListener("click", () => {
  popupBox.classList.add("show");
});

closePopupBox.addEventListener("click", () => {
  popupBox.classList.remove("show");
});

titleTag.addEventListener("keydown", () => {
  if (titleTag.value.length > 1 || descTag.value.length > 1) {
    addBtn.style.cssText = "opacity:100%; cursor:pointer;";
    addBtn.disabled = false;
  } else {
    addBtn.style.cssText = "opacity:50%; cursor:not-allowed;";
    addBtn.disabled = true;
  }
});

descTag.addEventListener("keydown", () => {
  if (titleTag.value.length > 1 || descTag.value.length > 1) {
    addBtn.style.cssText = "opacity:100%; cursor:pointer;";
    addBtn.disabled = false;
  } else {
    addBtn.style.cssText = "opacity:50%; cursor:not-allowed;";
    addBtn.disabled = true;
  }
});

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("hello");
  if (titleTag.value || descTag.value) {
    let date = new Date();
    months[date.getMonth()] + " " + date.getDate() + "," + date.getFullYear();

    let noteInfo = {
      title: titleTag.value,
      description: descTag.value,
      date:
        months[date.getMonth()] +
        " " +
        date.getDate() +
        "," +
        date.getFullYear(),
    };
    console.log(noteInfo);
    notes.push(noteInfo);
    localStorage.setItem("notes", JSON.stringify(notes));
    closePopupBox.click();
  }
});
