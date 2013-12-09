/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
TITLE: navigation.js
AUTHOR: Corbin Combs
CREATE DATE: 10/16/2013
PURPOSE: 
LAST MODIFIED ON: 10/16/2013
LAST MODIFIED BY: Corbin Combs
MODIFICATION HISTORY:
 	10/16/2013 - Create date.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
$(document).on("pageinit","#search",function(){

	$("#submitButton").click(searchPlants);


function searchPlants(){

	var plantName = $("#plantName").val();
	
	//$.getJSON("http://corbincombs.comli.com/ggApp.php?callback=?", function(data) {
		
		//for(var i=0; i<data.length;i++){
			//$("#resultsContent").append("Value for 'a': " + data[i].plantName);
	//	}
		 $.ajax({
                    url: 'http://corbincombs.comli.com/ggApp.php?jsoncallback=?',
                    dataType: 'jsonp',
                    success: function(data){
						for(var i=0; i<data.length;i++){
							$("#resultsContent").append("Value for 'a': " + data[i].plantName);
						}
                    }
                });


//$('<img src="'+ imgPaht +'">').load(function() {
 // $(this).width(50).height(50).appendTo('#resultsContent');
//})


	


}});
