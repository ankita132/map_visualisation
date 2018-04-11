<?php
class User {
      private $db;
      function __construct ($DB_conn)
      {
		    $this->db = $DB_conn;
		  }
	    public function fetch ($name)
      {
		    try{
          $stmt = $this->db->prepare("SELECT * FROM customers WHERE country=:name OR stadium=:name");
            $stmt->execute(array(":name"=>$name));
            $stmt->execute();
            $check = $stmt->fetchAll(PDO::FETCH_ASSOC);
            $row=$stmt->rowCount();
            if($row>0){
              return $check;
              }
            else{
              return 0;
            }
            }
		    catch(PDOException $error){
			      echo "Error: " . $error->getMessage();
	      }
	    }

    public function push ($name, $year, $country, $stadium, $experience){
      try{
        $stmt = "INSERT INTO customers (name, year, country,stadium,experience) VALUES ('$name', '$year', '$country','$stadium','$experience')";
           // use exec() because no results are returned
           $this->db->exec($stmt);
            }
      catch(PDOException $error){
          echo "Error: " . $error->getMessage();
      }
    }
  }
    ?>
