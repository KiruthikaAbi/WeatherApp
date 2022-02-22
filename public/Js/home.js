$(document).ready(function () {
    $("#btn").click(function () {
        var city = $("#city").val();
        if (!city) {
            alert("Please Enter City to Search");
            return;
        }

        $("#pTag").text("Loading");

        $.ajax({
            type: 'GET',
            url: `/api/weather?city=${city}`,
            success: function (data) {
                $("#pTag").text(data);
            }
        });
    });
})