const cont = document.querySelector(".portfolio");
let cards = document.getElementById("card_1");
let card1 = document.getElementById("card_2");
let card2 = document.getElementById("card_3");
let card3 = document.getElementById("card_4");


btn.onclick = function light() {
     head.style.backgroundColor = "rgb(240, 240, 240)"
     portf.style.backgroundColor = "#eee"
     document.body.style.backgroundColor = "#fafafa"
     cont.style.backgroundColor = "#fafafa"
     footer.style.backgroundColor = "rgb(240, 240, 240)"
     i.style.color = "#fafafa"
     cards.style.backgroundColor = "rgb(240, 240, 240)"
     card1.style.backgroundColor = "rgb(240, 240, 240)"
     card2.style.backgroundColor = "rgb(240, 240, 240)"
     card3.style.backgroundColor = "rgb(240, 240, 240)"
     ul.style.backgroundColor = "#eee"
     i2.style.color = "#eee"
}

btn_2.onclick = function dark() {
     cards.style.backgroundColor = "#1c1c1c"
     card1.style.backgroundColor = "#1c1c1c"
     card2.style.backgroundColor = "#1c1c1c"
     card3.style.backgroundColor = "#1c1c1c"
     cont.style.backgroundColor = "#1f1f1f"
     i.style.color = "#1c1c1c"
     i2.style.color = "#1c1c1c"
     head.style.backgroundColor = "#1c1c1c"
     document.body.style.backgroundColor = "#1f1f1f"
     footer.style.backgroundColor = "#1c1c1c"
     ul.style.backgroundColor = "#242424"
}