var country = "US";
var state = "All";

$("#state").change(function(){
    state = $("#state").find(":selected").val();
    $("#widget").append(state);
});
