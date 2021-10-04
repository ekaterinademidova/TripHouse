$(function() {
    $('input[name="datefilter"]').daterangepicker({
        "autoApply": true,
        "locale": {
            "format": "ddd, MMM D",
            "separator": " — ",
            "daysOfWeek": [
                "Su",
                "Mo",
                "Tu",
                "We",
                "Th",
                "Fr",
                "Sa"
            ],
            "monthNames": [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
            ],
            "firstDay": 1
        },
        "minDate": new Date()
    });
});