const footer = document.getElementById("end");
const hr = document.getElementById("hr");


btn.onclick = function light() {
     head.style.backgroundColor = "rgb(240, 240, 240)"
     footer.style.backgroundColor = "rgb(240, 240, 240)"
     document.body.style.backgroundColor = "#fafafa"
     i.style.color = "#fafafa"
     ul.style.backgroundColor = "#eee"
     hr.style.borderColor = "#ba8118"
     i2.style.color = "#eee"
}

btn_2.onclick = function dark() {
     i.style.color = "#1c1c1c"
     i2.style.color = "#1c1c1c"
     head.style.backgroundColor = "#1c1c1c"
     document.body.style.backgroundColor = "#1f1f1f"
     footer.style.backgroundColor = "#1c1c1c"
     ul.style.backgroundColor = "#242424"
}