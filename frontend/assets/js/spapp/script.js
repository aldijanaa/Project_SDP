//Initialization of SPApp
var app = $.spapp({
    defaultView: "#login",
    templateDir: "frontend/views/",
    pageNotFound: "error_404",


});

// Generic Function to Load Stylesheet
function loadStylesheet(viewName) {
    let stylesheetId = "page-style"; 
    $("link#" + stylesheetId).remove(); 

    let cssPath = `frontend/assets/css/${viewName}.css`; // Construct path

    // Append the new stylesheet dynamically
    $("head").append(`<link id="${stylesheetId}" rel="stylesheet" href="${cssPath}">`);
}

// Generic function to show or hide navigation
function toggleNavigation(show) {
    if (show) {
        $("#globalNav").show(); // Show navigation if user is logged in
    } else {
        $("#globalNav").hide(); // Hide navigation if user is not logged in
    }
}

// View routes
app.route({
    view: "login",
    load: "login.html",
    onCreate: function() {
        loadStylesheet("login-register"); // Loads specific css for this view
        toggleNavigation(false); // Hide navigation on login page

    }
});
app.route({
    view: "register",
    load: "register.html",
    onCreate: function() {
        loadStylesheet("login-register"); 
        toggleNavigation(false); 

    }
});
app.route({
    view: "forgot-password",
    load: "forgot-password.html",
    onCreate: function() {
        loadStylesheet("forgot-reset-password"); 
        toggleNavigation(false); 

    }
});
app.route({
    view: "dashboard",
    load: "dashboard.html",
    onCreate: function() {
        loadStylesheet("dashboard");
        toggleNavigation(true); 
 
    }
});
app.route({
    view: "expenses",
    load: "expenses.html",
    onCreate: function() {
        loadStylesheet("expenses");
        toggleNavigation(true); 
 
    }
});
app.route({
    view: "view-profile",
    load: "view-profile.html",
    onCreate: function() {
        loadStylesheet("view-profile");
        toggleNavigation(true); 
 
    }
});










//Run the SPApp
app.run();