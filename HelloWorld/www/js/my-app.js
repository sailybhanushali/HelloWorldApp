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




$$('#tab2').on('tab:show', function () {
    var personHTML = Template7.templates.personTemplate({
        group:"A",
        people: [
            {
                firstName: 'John',
                lastName: 'Doe',
                img: 'http://lorempixel.com/200/200/'
            },
            {
                firstName: 'Mark',
                lastName: 'Johnson',
                img: 'http://lorempixel.com/200/200/'
            }
        ]
    });

    $$("#tab2-content").html(personHTML);
});

