$(document).ready(function() {
    $('#navBar .first-navBar .fa-bars').click(function() {
        $('#navBar').addClass('toggle');
        $('#navBar .first-navBar .fa-bars').addClass('toggle');
        $('#navBar .first-navBar').addClass('toggle');
        $('#navBar .first-navBar .first-navBar-side').addClass('toggle');
        $('#navBar .first-navBar .second-navBar-side').addClass('toggle');
        $('#navBar .second-navBar').addClass('toggle');
        $('#navBar .second-navBar ul').addClass('toggle');
        $('#navBar .second-navBar ul li a').addClass('toggle');
        $('#navBar .fa-times').addClass('toggle');
    });
    $('#navBar .fa-times').click(function() {
        $('#navBar').removeClass('toggle');
        $('#navBar .first-navBar .fa-bars').removeClass('toggle');
        $('#navBar .first-navBar').removeClass('toggle');
        $('#navBar .first-navBar .first-navBar-side').removeClass('toggle');
        $('#navBar .first-navBar .second-navBar-side').removeClass('toggle');
        $('#navBar .second-navBar').removeClass('toggle');
        $('#navBar .second-navBar ul').removeClass('toggle');
        $('#navBar .second-navBar ul li a').removeClass('toggle');
        $('#navBar .fa-times').removeClass('toggle');
    });
    $('#home .home-text .home-tab-bar #continent-fa-sort-down').click(function() {
        $(this).css('display', 'none');
        $('#home .home-text .home-tab-bar #continent-fa-sort-up').css('display', 'inline-block');
        $('#home .home-text .home-tab-bar .continent-dropdown .continent-dropdown-list').css('display', 'inline-block');
    });
    $('#home .home-text .home-tab-bar #continent-fa-sort-up').click(function() {
        $(this).css('display', 'none');
        $('#home .home-text .home-tab-bar #continent-fa-sort-down').css('display', 'inline-block');
        $('#home .home-text .home-tab-bar .continent-dropdown .continent-dropdown-list').css('display', 'none');
    });
    $('#home .home-text .home-tab-bar #country-fa-sort-down').click(function() {
        $(this).css('display', 'none');
        $('#home .home-text .home-tab-bar #country-fa-sort-up').css('display', 'inline-block');
        $('#home .home-text .home-tab-bar .country-dropdown .country-dropdown-list').css('display', 'inline-block');
    });
    $('#home .home-text .home-tab-bar #country-fa-sort-up').click(function() {
        $(this).css('display', 'none');
        $('#home .home-text .home-tab-bar #country-fa-sort-down').css('display', 'inline-block');
        $('#home .home-text .home-tab-bar .country-dropdown .country-dropdown-list').css('display', 'none');
    });
    $('#home .home-text .home-tab-bar #budget-fa-sort-down').click(function() {
        $(this).css('display', 'none');
        $('#home .home-text .home-tab-bar #budget-fa-sort-up').css('display', 'inline-block');
        $('#home .home-text .home-tab-bar .budget-dropdown .budget-dropdown-list').css('display', 'inline-block');
    });
    $('#home .home-text .home-tab-bar #budget-fa-sort-up').click(function() {
        $(this).css('display', 'none');
        $('#home .home-text .home-tab-bar #budget-fa-sort-down').css('display', 'inline-block');
        $('#home .home-text .home-tab-bar .budget-dropdown .budget-dropdown-list').css('display', 'none');
    });
})