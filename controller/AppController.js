"use strict";

gdcApp.controller('appCtrl', function ($scope, $timeout) {

    $scope.player = {
        lines: 0,
        money: 0,
        lpd: 1,
        lps: 0,
        mps: 0,
        energy: 10,
        maxEnergy: 10,
        developTime: 1500,
        energyTime: 5000,
        level: 0,
        experience: 0,
        magicFind: 0,
        codingBonus: 0,
        moneyBonus: 0,
        inventory: [
            {

            }
        ]
    };

    $scope.upgrades = [
        {
            id: "upgrade1",
            name: "",
            amount: 0,
            baseCosts: 10,
            produces: 0.2
        },
    ]

    $scope.products = [
        {
            id: "product1",
            name: "Text based game",
            amount: 0,
            baseCosts: 10,
            produces: 0.2
        },
        {
            id: "product2",
            name: "Text based game",
            amount: 0,
            baseCosts: 10,
            produces: 0.2
        },
        {
            id: "product3",
            name: "Text based game",
            amount: 0,
            baseCosts: 10,
            produces: 0.2
        },
        {
            id: "product4",
            name: "Text based game",
            amount: 0,
            baseCosts: 10,
            produces: 0.2
        },
        {
            id: "product5",
            name: "Text based game",
            amount: 0,
            baseCosts: 10,
            produces: 0.2
        },
        {
            id: "product6",
            name: "Text based game",
            amount: 0,
            baseCosts: 10,
            produces: 0.2
        },

    ]

    $scope.develop = function () {
        $('#btnDevelop').prop("disabled", true);
        $('#btnRest').prop("disabled", true);

        $timeout(function () {
            $scope.player.lines++;
            $scope.player.energy--;

            if ($scope.player.energy) {
                $('#btnDevelop').prop("disabled", false);
            }

            $('#btnRest').prop("disabled", false);
        }, $scope.player.developTime);

        // Refill bar
        $("#dev-progress-bar").animate({
            width: "100%"
        }, $scope.player.developTime, "linear");
        $("#dev-progress-bar").animate({
            width: "0%"
        }, 150, "linear"); // this will reset the filler once he get to 100%
    };

    $scope.rest = function () {
        $('#btnRest').prop("disabled", true);
        $('#btnDevelop').prop("disabled", true);

        $timeout(function () {
            $scope.player.energy = $scope.player.maxEnergy;

            $('#btnRest').prop("disabled", false);
            $('#btnDevelop').prop("disabled", false);

        }, $scope.player.energyTime);

        // Refill bar
        $("#rest-progress-bar").animate({
            width: "100%"
        }, $scope.player.energyTime, "linear");
        $("#rest-progress-bar").animate({
            width: "0%"
        }, 150, "linear"); // this will reset the filler once he get to 100%
    }

});