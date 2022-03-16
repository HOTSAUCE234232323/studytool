function myFunction(){
  document.getElementById("dropdown").style.display = "block";
  }
function getQuestion(){
const question =  Math.floor(Math.random() * 2)+1;
console.log(question)
if(question == "1"){
document.getElementById("question").innerHTML = "";
document.getElementById("question").innerHTML= "The Cullen-Harrison Act weakened this policy, which was effectively begun by the Volstead Act. This policy ended with the 1933 ratification of the 21st Amendment, though it had been defied by (*)) speakeasies and bootleggers. Franklin Roosevelt joked <b>I think this would be a good time for a beer</b> to end, for ten points, what period of American history when alcoholic beverages were banned?";
  }

if(question == "2"){
  document.getElementById("question").innerHTML = "";
document.getElementById("question").innerHTML= "A few months after this conflict, two belligerents quarreled over the sinking of the Eilat. Gunnar Jarrings peace mission after this war partly failed due to the <b>three nos<b> of the Khartoum Resolution. After losing this war, a leader ceded power to his vice-president Zakaria Mohieddin, but popular support drew him back to office. UN Security Council Resolution 242 dealt with the territorial exchanges in this war, which began with an attack on 25 different (*)) airfields after the Straits of Tiran were closed. In this conflict, the Sinai Peninsula and the Gaza Strip were seized from Gamal Abdel Nassers Egypt. This war was fought six years prior to the Yom Kippur War. For 10 points, name this 1967 victory for Israel over its Arab enemies, concluded in less than a week.";
}
document.getElementById("getanswers").onclick = function() {
if(question == "1"){
  if(document.getElementById("answer").value == "Prohibition"){
    console.log("done");
    document.getElementById("question").innerHTML = "";
    document.getElementById("answer").value = "";
  }else{
    document.getElementById("question").innerHTML = "";
    document.getElementById("answer").value = "";
    console.log("Incorrect");
    document.getElementById("Study").style.display = "block";
  }
}
if(question == "2"){
  if(document.getElementById("answer").value == "Six-Day War"){
    console.log("done");
    document.getElementById("question").innerHTML = "";
    document.getElementById("answer").value = "";
  }else{
    document.getElementById("question").innerHTML = "";
    document.getElementById("answer").value = "";
    console.log("Incorrect");
    document.getElementById("Study").style.display = "block";
  }
}
document.getElementById("Study").onclick = function(){
  if(question == "1"){
    document.getElementById("Study").style.display = "none";
    document.getElementById("topic").innerHTML = "Prohibition";
    document.getElementById("links").innerHTML = "<a href= https://en.wikipedia.org/wiki/Prohibition_in_the_United_States>Wikipedia Page<a>";
  }
  if(question == "2"){
    document.getElementById("Study").style.display = "none";
    document.getElementById("topic").innerHTML = "Six-Day War";
    document.getElementById("links").innerHTML = "<a href= https://en.wikipedia.org/wiki/Six-Day_War>Wikipedia Page<a>";
  }
}
}
}