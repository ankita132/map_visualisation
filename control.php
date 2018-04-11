<?php
require_once './connect.php';
if (isset($_POST['functionname']))
{
  $functionname = $_POST['functionname'];
  if($functionname == 'push'){
    $name = $_POST['name'];
    $year = $_POST['year'];
    $country = $_POST['country'];
    $stadium = $_POST['stadium'];
    $experience = $_POST['experience'];
    echo $user->push($name, $year, $country, $stadium, $experience);
  }
  else if($functionname == 'fetch'){
    $name = $_POST['name'];
    echo $user->fetch($name);
  }
}
 ?>
