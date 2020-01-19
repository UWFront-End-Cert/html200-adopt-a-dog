function myFunction(){
  var mail = document.getElementById("input2").value.indexOf("@");
  var fname = document.getElementById("input1").value;
  submitOK = "true";
  if (fname.length > 10) {
    alert("The name may have no more than 10 characters");
    submitOK = "false";
  }
  if (mail == -1) {
    alert("Not a valid e-mail!");
    submitOK = "false";
  }

  if (submitOK == "false") {
    return false;
  }

  else{
    var arr = new Array();
    $("form").on("submit",function(e){
        e.preventDefault();
        for(let i=0;i<7;i++)
        {
          var inputVal = document.getElementById('input'+(i+1)).value;
          arr[i].push(inputVal);
          console.log(arr[i]);
        }
        alert(arr);
      });

      var data = $("form:input").serializeArray();
      console.log(data);
  }
}

var arr = new Array();
$("form").on("submit",function(e){
    e.preventDefault();
    for(let i=0;i<7;i++)
    {
      var inputVal = document.getElementById('input'+(i+1)).value;
      arr[i].push(inputVal);
      console.log(arr[i]);
    }
    alert(arr);
  });
