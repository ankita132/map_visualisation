<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">

        <title>African Cup of Nations</title>

         <!-- Bootstrap CSS CDN -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <!-- Our Custom CSS -->
         <link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.1/dist/leaflet.css"
   integrity="sha512-Rksm5RenBEKSKFjgI3a41vrjkw4EVPlJ3+OiI65vTjIdo9brlAacEuKOiQ5OFh7cOI1bkDwLqdLw3Zg0cRJAAQ=="
   crossorigin=""/>
        <link rel="stylesheet" href="./css/style.css">
    </head>
    <body>



        <div class="wrapper">
            <!-- Sidebar Holder -->
            <nav id="sidebar">
                <div class="sidebar-header">
                    <h3>African Cup of Nations</h3>
                </div>

                <ul class="list-unstyled components">
                    <li class="active">
                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">Years</a>
                        <ul class="collapse list-unstyled" id="homeSubmenu">
                            <li><a class="year" id="2017" href="#">2017</a></li>
                            <li><a class="year" id="2015" href="#">2015</a></li>
                            <li><a class="year" id="2013" href="#">2013</a></li>
                            <li><a class="year" id="2012" href="#">2012</a></li>
                        </ul>
                    </li>
                    <li>
                        <a data-toggle="modal" data-target="#myModal">Description</a>
                    </li>
                    <li>
                </ul>

                <ul class="list-unstyled add">
                    <li><a href="#" class="data">Add data</a></li>
                </ul>
            </nav>
 <form class="form-data">
 <h3 style="text-align: center">User Experience</h3><br><hr>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputname">User</label>
      <input type="text" class="form-control" id="user" placeholder="Enter your name" required>
    </div>
    <div class="form-group col-md-6">
      <label for="inputyear">Year</label>
      <select id="inputyear" class="form-control" required>
        <option selected disabled>Choose</option>
        <option>2017</option>
        <option>2015</option>
        <option>2013</option>
        <option>2012</option>
      </select>
    </div>
  </div>
    <div class="form-group col-md-6">
      <label for="inputcountry">Country</label>
      <select id="inputcountry" class="form-control">
        <option selected disabled>Choose</option>
      </select>
    </div>
    <div class="form-group col-md-6">
      <label for="inputstadium">Stadium (Optional)</label>
      <select id="inputstadium" class="form-control">
        <option selected disabled>Choose</option>
      </select>
    </div>
         <div class="form-group col-md-12">
      <label for="experience">Experience</label>
      <input type="text" class="form-control" id="experience" placeholder="Add your Experience" required>
    </div>
<div class="form-group col-md-12">
  <button type="submit" class="btn btn-info send">Submit</button>
  </div>
   </form>
  </div>
            <!-- Page Content Holder -->
            <div id="map"></div>
        </div>

 <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">

      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Description</h4>
        </div>
        <div class="modal-body">
          <p>An interactive map based visualization tool for data that is spread out across
time and space. The Total Africa Cup of Nations, officially CAN, also referred to as African Cup of Nations, or AFCON, is the main international association football competition in Africa. It is sanctioned by the Confederation of African Football (CAF) and was first held in 1957. Since 1968, it has been held every two years. The title holders at the time of a FIFA Confederations Cup qualify for that competition.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>

    </div>
  </div>

  <div class="modal fade" id="myModal2" role="dialog">
     <div class="modal-dialog">

       <!-- Modal content-->
       <div class="modal-content">
         <div class="modal-header">
           <button type="button" class="close" data-dismiss="modal">&times;</button>
           <h4 class="modal-title">Experiences</h4>
         </div>
         <div class="modal-body">
          </div>
         <div class="modal-footer">
           <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
         </div>
       </div>

     </div>
   </div>



        <script src="https://unpkg.com/leaflet@1.3.1/dist/leaflet.js"
   integrity="sha512-/Nsx9X4HebavoBvEBuyp3I7od5tA0UzAxs+j83KgC8PU0kgB4XiK4Lfe4y4cgBtaRJQEIFCW+oC506aPT2L1zw=="
   crossorigin=""></script>
        <!-- jQuery CDN -->
         <script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
         <!-- Bootstrap Js CDN -->
         <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
                 <script src="./js/map.js"></script>
                 <script src="./js/activity.js"></script>
                 <script src="./js/backend.js"></script>
    </body>
</html>
