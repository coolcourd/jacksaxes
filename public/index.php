<?php
// this can be removed, but the cms data will load with the page if it's kept

$html = file_get_contents('index.html');
$data = file_get_contents('data.json');
$content = "window.data = $data";
$html = str_replace('console.log("using fetch")', $content, $html);
echo $html;