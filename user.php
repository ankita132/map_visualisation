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
      			$user=$stmt->fetch(PDO::FETCH_ASSOC);
            if($stmt->rowCount() > 0)
          		{
                return $stmt;
		          }
            }
		    catch(PDOException $error){
			      echo "Error: " . $error->getMessage();
	      }
	    }

    public function push ($name, $year, $country, $stadium, $experience){
      try{
        $stmt = "INSERT INTO customers (name, year, country,stadium,experience) VALUES ('$username', '$year', '$country','$stadium','$experience')";
           // use exec() because no results are returned
           $this->db->exec($stmt);
        return $stmt;
      }
      catch(PDOException $error){
          echo "Error: " . $error->getMessage();
      }
    }
  }
    ?>
