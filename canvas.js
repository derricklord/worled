$(document).ready(function(){

  // Add Student Training Button
  var container = "<div id='header-img'></div>";
  var greeting = "<center><h1 id='header-title' class='lead'>Welcome Worl-ED International Academy Students</h1></center>";
  var message_center ="<center><a href='/conversations?#filter=type=inbox'><img id='message-icon' src='https://derricklord.github.io/canvas/message2.png' /></a>  <span class='lead' style='margin-left:5px;'>Message Center (Inbox)</span></center>";
  var getting_started = "<center> <a class='btn btn-secondary' href='https://worl-ed.instructure.com/courses/3' style='margin:10px;'>Getting Started</a></center>";
  var content = $("#dashboard").prepend(container);
  var contentdiv = $("#header-img");
  
  contentdiv.append(greeting);
  contentdiv.append(message_center);
  contentdiv.append(getting_started);
  
});