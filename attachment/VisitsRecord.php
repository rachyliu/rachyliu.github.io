<?php 

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$name = $request->name;

echo $name;

/* $file="VisitsRecord.json"; 

$json = json_decode(file_get_contents($file),TRUE); 

$json['records'][] = array('name'=>'Superman', 'pid'=>4);

file_put_contents( 'VisitsRecord.json', json_encode( $json ) ); */
?>
