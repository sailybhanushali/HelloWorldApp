// Initialize your app
var myApp = new Framework7({
    precompileTemplates: true,
    pushState: true,
    material: true});

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
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
}


$$('#tab2').on('tab:show', function () {
    var personHTML = Template7.templates.personTemplate(contactsData);

    $$("#tab2-content").html(personHTML);
});

