var gdcApp = angular.module('gdcApp', []);


// Moment Filter
gdcApp.filter('moment', [
    function () {
        return function (date, method) {
            var momented = moment(date);
            return momented[method].apply(momented, Array.prototype.slice.call(arguments, 2));
        };
}]);

// Pretty number Filter
gdcApp.filter('prettyNumber', function () {
    function floor(num) {
        //special floor needed to deal with floating point calculations
        if (num - Math.floor(num) >= 0.9999999999999991) {
            return Math.ceil(num);
        } else {
            return Math.floor(num);
        }
    }

    // see https://www.reddit.com/r/incremental_games/comments/2cu61a/beautifying_numbers_rounding_and_separators/cjjrodh
    return function (num, dec) {
        num = +num || 0;
        dec = +dec || 0; //how many decimal places do we want?

        if (num === 0) {
            return 0;
        }

        var suffixes = ['', 'k', 'M', 'B', 'T', 'Qa', 'Qi', 'Sx', 'Sp', 'Oc', 'No', 'De', 'UnD', 'DuD', 'TrD', 'QaD', 'QiD', 'SeD', 'SpD', 'OcD', 'NoD', 'Vi', 'UnV'];

        var ord = floor(Math.log(Math.abs(num)) / Math.log(10) / 3); //the abs to make sure our number is always positive when being put through a log operation. divide by 3 at the end because our suffixes goes up by orders of 3

        var suffix = suffixes[ord]
        if (ord && !suffix) {
            suffix = 'E' + ord * 3;
        }
        var rounded = Math.round(num / (Math.pow(10, ord * 3 - dec))) / Math.pow(10, dec);
        return rounded + suffix;
    }
});