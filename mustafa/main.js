function feed()
{
  var feed=document.getElementById("exampleInputPassword1").value;
  var txtarea=document.getElementById("exampleFormControlTextarea1").value;
  var emailreg=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(feed=="")
{
alert("plz fill the text field");
}
else if(txtarea=="")
{
  alert("plz fill the text area");
  }
  else if(!feed.match(emailreg))
{
  alert("please enter the correct email");
  }
else
{
  alert("Thank you for the Feedback");
  }
}
