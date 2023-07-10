<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="index.js"></script>
    <!-- <link rel="stylesheet" href="style.css"> -->
    <title>Document</title>
</head>
<body>
    <div style=" font-size: 30px;  color: rgb(101, 13, 209); text-align: left;">
        <div style="font-size: 30px; color: red; margin: 0 auto; text-align: center;">
            Here is User's Registered Data
        </div>
        <table class="table table-bordered">
            <thead>
                <tr>
                  <th>Name </th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Male</th>
                  <th>Female</th>
                  <th>City</th>

                </tr>
                <tbody>
                    <tr>
                      <td  id="data1">The User Name is:</td>
                      <td  id="data2">The User Email is:</td>
                      <td  id="data3">The User Password is:</td>
                      <td  id="data4">The User Gender:</td>
                      <td  id="data5">The User gender is:</td>
                      <td  id="data6">The User City is:</td>
                    </tr>
               </tbody>
              </thead>
        </table>
       <!--java script code-->
    <script>
        
        //displaying the value from local storage to another page by their respective Ids
document.getElementById("data1").innerHTML=localStorage.getItem("txtValue1");
document.getElementById("data2").innerHTML=localStorage.getItem("txtValue2");
document.getElementById("data3").innerHTML=localStorage.getItem("txtValue3");
if(document.getElementById('data4').checked==true)
{
document.getElementById("data4").innerHTML=localStorage.getItem("txtValue4");
}
else
{
document.getElementById("data5").innerHTML=localStorage.getItem("txtValue5");
}
document.getElementById("data6").innerHTML=localStorage.getItem("txtValue6");
    </script>
</body>
</html>