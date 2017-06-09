// Initialize your app
var myApp = new Framework7({
    precompileTemplates: true,
    template7Pages: true ,
    pushState: true,
    material: true});

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main');

var view2 = myApp.addView('#view2');
var view3 = myApp.addView('#view3');

var contactsData = {
    groups: [
        {
            group: "A",
            people: [
                {
                    firstName: 'Adam',
                    lastName: 'Doe',
                    img: 'http://lorempixel.com/200/200/'
                },
                {
                    firstName: 'Alan',
                    lastName: 'Johnson',
                    img: 'http://lorempixel.com/200/200/'
                }
            ]
        },
        {
            group: "B",
            people: [
                {
                    firstName: 'Bob',
                    lastName: 'Doe',
                    img: 'http://lorempixel.com/200/200/'
                },
                {
                    firstName: 'Bean',
                    lastName: 'Doe',
                    img: 'http://lorempixel.com/200/200/'
                },
                {
                    firstName: 'Buzz',
                    lastName: 'Johnson',
                    img: 'http://lorempixel.com/200/200/'
                }
            ]
        }
    ]
};

var messageData = {
    people: [
        {
            from: "From1",
            time: "12:12",
            message: "Message here",
            description: "Description here"
        },
        {
            from: "From2",
            time: "11:11",
            message: "Message here",
            description: "Description here"
        }
    ]
};

$$('#view2').on('tab:show', function () {
    var personHTML = Template7.templates.personTemplate(contactsData);

    $$("#contacts").html(personHTML);
});


var personHTML = Template7.templates.messageTemplate(messageData);
$$("#index").html(personHTML);


//Location access
function getWeatherLocation() {

    navigator.geolocation.getCurrentPosition
        (onWeatherSuccess, onWeatherError, { enableHighAccuracy: true });
}

// Success callback for get geo coordinates

var onWeatherSuccess = function (position) {

    Latitude = position.coords.latitude;
    Longitude = position.coords.longitude;

    getWeather(Latitude, Longitude);
}

// Get weather by using coordinates

function getWeather(latitude, longitude) {

    // Get a free key at http://openweathermap.org/. Replace the "Your_Key_Here" string with that key.
    var OpenWeatherAppKey = "89160a32178326b0809926e1b8d0b1ee";

    var queryString =
        'http://api.openweathermap.org/data/2.5/weather?lat='
        + latitude + '&lon=' + longitude + '&appid=' + OpenWeatherAppKey + '&units=imperial';

    $$.getJSON(queryString, function (results) {

        if (results.weather.length) {

            $$.getJSON(queryString, function (results) {

                if (results.weather.length) {

                    $$('#location').text(results.name);
          
                }

            });
        }
    }).fail(function () {
        console.log("error getting location");
    });
}

// Error callback

function onWeatherError(error) {
    console.log('code: ' + error.code + '\n' +
        'message: ' + error.message + '\n');
}


getWeatherLocation();