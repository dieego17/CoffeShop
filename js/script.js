const header_icon = document.getElementById("header_icon");
const header_items = document.getElementById("header_items");

const header_search = document.getElementById("header_search");
const header_form = document.getElementById("header_form");

document.addEventListener("DOMContentLoaded", () => {
    header_form.classList.add("displaynone")
    header_items.classList.add("displaynone")
});

header_icon.addEventListener("click", () => {
 
});

header_search.addEventListener("click", () => {
  header_items.classList.remove("displayflex")
  header_items.classList.add("displaynone")
  if(header_form.classList.contains("displaynone")){
    header_form.classList.remove("displaynone")
    header_form.classList.add("displayflex")
  }else{
    header_form.classList.remove("displayflex")
    header_form.classList.add("displaynone")
  }

});

header_icon.addEventListener("click", () => {
  header_form.classList.remove("displayflex")
  header_form.classList.add("displaynone")
  if(header_items.classList.contains("displaynone")){
    header_items.classList.remove("displaynone")
    header_items.classList.add("displayflex")
  }else{
    header_items.classList.remove("displayflex")
    header_items.classList.add("displaynone")
  }

});




