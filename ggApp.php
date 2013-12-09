
<?php 
header("Access-Control-Allow-Origin: *");
	$sqlCon=mysql_connect('mysql6.000webhost.com','a3928530_user','pass123') or die (mysql_error());
	$dbSelected = mysql_select_db("a3928530_plants", $sqlCon) or die(mysql_error());
	$sth = mysql_query("SELECT * FROM plantList");
	$rows = array();
	$i=0;
	while($r = mysql_fetch_assoc($sth)) {
		$results[$i] = array(
			'plantName' =>$r['plantName'],
			'description' => $r['description'],
			'imgLoc' => $r['imgLoc'],
			'imgWidth' => $r['imgWidth'],
			'imgHeight' => $r['imgHeight'],
			'potSize' => $r['potSize']
		);
		$i++;
	}
	 print $_GET['jsoncallback']. '('.json_encode($results).')';
	 


	
?>

