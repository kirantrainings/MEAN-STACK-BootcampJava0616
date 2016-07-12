<!DOCTYPE html>
<html>

<head>
    <meta charset="ISO-8859-1">
    <title>Log In here</title>
    <link href='http://fonts.googleapis.com/css?family=Raleway:500' rel='stylesheet' type='text/css'>
    <link href='WebContent/css/style.css' rel='stylesheet'>
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"> </head>

<body style="backgroundcolor:blue">
    <div class="middlePage" style="width:350px">
        <div class="page-header">
            <h1 class="logo">Citi Bank</h1> </div>
        <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">Log In</h3> </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-12" style="border-left:1px solid #ccc">
                        <form class="form-horizontal" action="LoginController" method="post">
                            <input id="textinput" name="userName" type="text" placeholder="Enter User Name" class="form-control input-md" style="width:250px" required>
                            <br>
                            <input id="textinput" name="password" type="text" placeholder="Enter Password" class="form-control input-md" style="width:250px" required>
                            <br>
                            <div class="spacing">
                                <input type="checkbox" name="checkboxes" id="checkboxes-0" value="1"><small> Remember me</small></div>
                            <button id="singlebutton" name="singlebutton" class="btn btn-info btn-sm pull-left" type="submit">Sign In</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
</body>

</html>