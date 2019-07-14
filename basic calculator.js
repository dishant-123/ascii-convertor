function f1() 
{
	var arr=[],s=0;
	var str = document.getElementById("1");
	if(str.value.match(/^[a-zA-Z]+$/))
	{
		for(var i=0;i<str.value.length;i++)
		{
			var n = str.value.charCodeAt(i);
			arr[i]=n;
			s=s+arr[i];
		}
  }
  else
  {
		alert("Please! Enter Only Alphabet(A-Z or a-z)");
  }
  document.getElementById("1").value = arr.join("   ,");
  document.getElementById("p1").innerHTML="The sum of ascii value of word "+str.innerHTML+" = "+s;
}