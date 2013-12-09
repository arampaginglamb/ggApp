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
	$(".advancedSearch").hide();
	$("#submitButton").click(searchPlants);
	$('input:radio').change(
		function(){
			if(this.value=="simple"){
				$(".advancedSearch").hide();
				$(".simpleSearch").show();
			}else{
				$(".advancedSearch").show();
				$(".simpleSearch").hide();
			}
		}
	);

function searchPlants(){

	var urlStr= new String(getString);
	var url='http://corbincombs.comli.com/ggApp.php?jsoncallback=?';
	$("#resultsContent").empty();
		$.ajax({
            url: url,
            dataType: 'jsonp',
            success: function(data){
				for(var i=0; i<data.length;i++){
					$("#resultsContent").append('<div data-role="fieldcontain">');
					$("#resultsContent").append('<img src="'+data[i].imgLoc+'" alt="'+data[i].plantName+'" height="'+data[i].imgHeight+'" width="'+data[i].imgWidth+'">');
					$("#resultsContent").append("Plant Name: " + data[i].plantName+' Plant Description: '+data[i].description+' Available in: '+data[i].potSize);
					$("#resultsContent").append('</div>');
				}
            }
        });


//$('<img src="'+ imgPaht +'">').load(function() {
 // $(this).width(50).height(50).appendTo('#resultsContent');
//})


	


}
function getString(){
	if($('input:radio').value=="simple"){
		var plantName =$("#plantName").val();
	}
	return "plantName=" + plantName;

}});
