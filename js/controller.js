/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {
    $(".button-collapse").sideNav();
    //$('#traffic').openModal();
    //$('#busStatus').closeModal();
});

$(document).ready(function () {
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
});



/**
 * function to initialize datepicker
 */
$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 30 // Creates a dropdown of 15 years to control year
});

/*
 * function to send request
 * @param {type} directionsService
 * @param {type} directionsDisplay
 * @returns {undefined}
 */

function sendRequest(u) {
    //alert("here");
    // alert(u);
    console.log(u);
    var obj = $.ajax({url: u, async: false});
    var result = $.parseJSON(obj.responseText);
    return result;
}

/**
 * function to add data to the database
 * @returns {undefined}
 */
function addBus() {
    var busId = $("#Busid").val();
    var busName = $("#BusName").val();
    var gpsDeviceId = $("#GPSDevice_ID").val();
    var driverId = $("#Bus_DriverId").val();
    var routeCode = $("#Bus_RouteCode").val();
    var Agency = $("#Bus_Agency").val();
    var numberofSeats = parseInt($("#number_of_seats").val());

    var stringval = "Bus_id=" + busId + "&Bus_Name=" + busName + "&GPSDevice_ID=" + gpsDeviceId + "&Bus_DriverId=" + driverId + "&Bus_RouteCode=" + routeCode + "&Bus_Agency=" + Agency + "&Number_of_seats=" + numberofSeats;
    var theUrl = "http://166.62.103.147/~ashesics/class2016/beatrice_migaliza/MyRide/public_html/PHP/request.php?cmd=3&" + stringval;
    console.log(theUrl);
    var object = sendRequest(theUrl);

    if (object.result == 1) {
        Materialize.toast(object.message, 5000, 'rounded');
    }
    else {
        Materialize.toast(object.message, 5000, 'rounded');
    }

}

/**
 * function to add a driver to the system 
 * @returns {undefined}
 */
function adddriver() {
    var driverId = $("#driverID").val();
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var assignedBus = $("#assignedBusId").val();


    var stringval = "DriverId=" + driverId + "&firstName=" + firstName + "&lastName=" + lastName + "&AssignedBus_ID=" + assignedBus;
    var theUrl = "http://166.62.103.147/~ashesics/class2016/beatrice_migaliza/MyRide/public_html/PHP/request.php?cmd=4&" + stringval;
    console.log(theUrl);
    var object = sendRequest(theUrl);

    if (object.result == 1) {
        Materialize.toast(object.message, 4000, 'rounded');
    }
    else {
        Materialize.toast(object.message, 4000, 'rounded');
    }
}

/**
 * function to add a new bus stop
 * @returns {undefined}
 */

function addBusStop() {
    var name = $("#Bus_Stop_Name").val();
    var lon = $("#longitude").val();
    var lat = $("#latitude").val();
    var RouteId = $("#routecode").val();

    var stringVal = "Bus_Stop_Name=" + name + "&Longitude=" + lon + "&Latitude=" + lat + "&RouteId=" + RouteId;
    var theUrl = "http://166.62.103.147/~ashesics/class2016/beatrice_migaliza/MyRide/public_html/PHP/request.php?cmd=5&" + stringVal;


    var obj = sendRequest(theUrl);

    if (obj.result == 1) {
        Materialize.toast(object.message, 4000, 'rounded');
    }
    else {
        Materialize.toast(object.message, 4000, 'rounded');
    }
}


/**
 * function to add a new GPS device
 * @returns {undefined}
 */
function addNewGPSDevice() {
    var deviceId = $("#Device_Id").val();
    var description = $("#Description").val();

    var stringVal = "Device_Id=" + deviceId + "&Description=" + description;

    var theUrl = "http://166.62.103.147/~ashesics/class2016/beatrice_migaliza/MyRide/public_html/PHP/request.php?cmd=6&" + stringVal;

    var obj = sendRequest(theUrl);

    if (obj.result == 1) {
        Materialize.toast(object.message, 4000, 'rounded');
    }
    else {
        Materialize.toast(object.message, 4000, 'rounded');
    }
}

/**
 * function to add route
 * @returns {undefined}
 */
function addRoute() {
    var routeCode = $("#Route_Code").val();
    var starLong = $("#StartRoute_longitude").val();
    var startLat = $("#StartRoute_Latitude").val();
    var endLong = $("#EndLongitude").val();
    var endLat = $("#EndLatitude").val();

    var stringVal = "Route_Code=" + routeCode + "&StartRoute_longitude=" + starLong + "&StartRoute_Latitude=" + startLat + "&EndLongitude=" + endLong + "&EndLatitude=" + endLat;
    var theUrl = "http://166.62.103.147/~ashesics/class2016/beatrice_migaliza/MyRide/public_html/PHP/request.php?cmd=8&" + stringVal;

    var object = sendRequest(theUrl);

    if (object.result == 1) {
        Materialize.toast(object.message, 4000, 'rounded');
    }
    else {
        Materialize.toast(object.message, 4000, 'rounded');
    }

}

/**
 * function to register the management
 * @returns {undefined}
 */
function managementSignUp() {
    var agence = $("#companyName").val();
    var companyEmail = $("#email").val();
    var phoneNumber = $("#phoneNumber").val();
    var location = $("#location").val();

    var stringVal = "AgencyName=" + agence + "&email=" + companyEmail + "&PhoneNumber=" + phoneNumber + "&location=" + location;
    var theUrl = "http://166.62.103.147/~ashesics/class2016/beatrice_migaliza/MyRide/public_html/PHP/request.php?cmd=10&" + stringVal;
    var object = sendRequest(theUrl);
    //alert(theUrl);
    if (object.result === 1) {
        Materialize.toast(object.message, 20000, 'rounded');
    }
    else {
        Materialize.toast(object.message, 4000, 'rounded');
    }
}


/**
 * function to display the route details
 */
$(document).ready(function () {
    var theUrl = "http://166.62.103.147/~ashesics/class2016/beatrice_migaliza/MyRide/public_html/PHP/request.php?cmd=9";
    var object = sendRequest(theUrl);

    if (object.result === 1) {
        //alert("here");
        $.each(object.routes, function (i, routes) {
            var optionElement = document.createElement('option');
            optionElement.value = routes.Route_Code;
            optionElement.innerHTML = routes.Route_Code;
            $("#routecode").append(optionElement);
            //var routeElement = $('<select></select>');
            //routeElement.html('<option value="'+i+'">'+routes.Route_Code+'</option>');
            //$("#routecode").append('<option value="'+i+'">'+routes.Route_Code+'</option>');
        });
    }
    else {
        Materialize.toast(object.message, 4000, 'rounded');
    }
});

/**
 * function to validate email input
 * @param {type} e
 * @returns {undefined}
 */
function validateInput(e) {
    var email = document.SignUpForm.email;
    if (email.value === " ") {
        e.preventDefault();
    }
    if (email.value.indexOf("@", 0) < 0) {
        e.preventDefault();
    }
    if (email.value.indexOf(".", 0) < 0) {
        e.preventDefault();
    }
}

$("#email").bind("input propertychange", function () {
    if (this.value.length === 0) {
        Materialize.toast("You have not entered an email address", 4000, 'rounded');
    }
    if ((this.value.indexOf("@", 0) < 0) || (this.value.indexOf(".", 0) < 0)) {
        Materialize.toast("You entered invalid email address", 4000, 'rounded');
    }
});


/**
 * function to login the bus management
 * @returns {undefined}
 */
function managementLogin() {
    var email = $("#email").val();
    var password = $("#password").val();

    var stringVal = "email=" + email + "&Assigned_Pass=" + password;
    var theUrl = "http://166.62.103.147/~ashesics/class2016/beatrice_migaliza/MyRide/public_html/PHP/request.php?cmd=11&" +stringVal;

    var object = sendRequest(theUrl);

    if (object.result === 1) {
        //window.location="/";
        window.location= "/DashBoard.html";
    
    }
    else {
        Materialize.toast(object.message, 4000, 'rounded');
    }


}