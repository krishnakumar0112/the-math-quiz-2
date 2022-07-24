
function addUser() {
  player1_name = document.getElementById("player1_name_input").value;
  player2_name = document.getElementById("player2_name_input").value;

    //Set "player1_name" using localStorage.setItem() function
	  //Set "player2_name" using localStorage.setItem() function
    localStorage.getItem("player1_name", player1_name);
    localStorage.getItem("player2_name", player2_name);
    window.location = "game_page.html";
}
function addUser()
{
  player1_name = document.getElementById("player1_name_input").value;
  player2_name = document.getElementById("player2_name_input").value;
  window.location = "game_page.html";
  localStorage.getItem("player1_name", player1_name);
    localStorage.getItem("player2_name", player2_name);
    window.location = "game_page.html";
}