var grade=[8,6,34,5,21,1,23,3];
var sum=0;
if (grade.length>0) 
{
	for (var i = 0; i < grade.length; i++) {
		sum+=grade[i];
	}
	document.write(sum/grade.length);
}
else
	document.write("empty array");