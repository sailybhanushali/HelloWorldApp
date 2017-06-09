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

$$(document).on('page:init', function (e) {
    // Page Data contains all required information about loaded and initialized page 
    var page = e.detail.page;
    if (page.name == "message") {
        var myMessages = myApp.messages($$(page.container).find('.messages'), {
            autoLayout: true
        });
    }

    else if (page.name == "gallery") {
       

        var galleryData = {
            photos: [
                {
                    url: 'http://lorempixel.com/1024/1024/sports/1/',
                    caption: 'Caption 1 Text'
                },
                {
                    url: 'http://lorempixel.com/1024/1024/sports/2/',
                    caption: 'Second Caption Text'
                },
                // This one without caption
                {
                    url: 'http://lorempixel.com/1024/1024/sports/3/',
                },
                {
                    url: 'http://lorempixel.com/1024/1024/sports/1/',
                    caption: 'Caption 1 Text'
                },
                {
                    url: 'http://lorempixel.com/200/1024/sports/2/',
                    caption: 'Second Caption Text'
                },
                // This one without caption
                {
                    url: 'http://lorempixel.com/1024/224/sports/3/',
                },
            ],
            theme: 'dark',
            type: 'standalone'
        };

        console.log("gallery is to be initialized!");

        var personHTML = Template7.templates.galleryTemplate(galleryData);
        $$(page.container).find('#gallery').html(personHTML);

        
        var myPhotoBrowserPopupDark = myApp.photoBrowser(galleryData);
        $$($$(page.container).find('.image-grid')).on('click', function () {
            myPhotoBrowserPopupDark.open($$(this).attr("data-index"));
        });
        //end
        console.log("gallery is initialized!");
    }
});






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


for (var i = 1; i <= 60; i++)
{
    contactsData.groups[1].people.push({
        firstName: 'Bob',
        lastName: 'Doe' + i,
        img: 'http://lorempixel.com/200/200/'
    });
}

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

for (var i = 1; i <= 60; i++) {
    messageData.people.push({
        from: "From"+i,
        time: "12:12",
        message: "Message here",
        description: "Description here"
    })
}

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
};

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
                    $$('#city').text(results.name);
                }

            });
        }
    });
}

// Error callback

function onWeatherError(error) {
    console.log('code: ' + error.code + '\n' +
        'message: ' + error.message + '\n');
}


getWeatherLocation();