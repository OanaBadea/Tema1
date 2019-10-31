function distance(first, second)  {
	//TODO: implementați funcția
	// TODO: implement the function
	
		if(!(first instanceof Array)||!(second instanceof Array))
	{
		throw new Error("InvalidType");
	}
	
	
	var first_sort = first.reduce(function(a,b){
    	if (a.indexOf(b) < 0 ) a.push(b);
    	return a;
	},[]);
  
	var second_sort = second.reduce(function(c,d){
    	if (c.indexOf(d) < 0 ) c.push(d);
		return c;
	 },[]);
	
			
	var count1 = Object.keys(first_sort).length;
	var count2 = Object.keys(second_sort).length;
	

	
	


	


	if(count1>count2)
	{
		return count1-count2;
	}
	else
		if(count2>count1)
		{
			return count2-count1;
		}
	else
		if(count1==0 && count2==0)
			return 0;
	


	

	
	
}
	
	
	




module.exports.distance = distance