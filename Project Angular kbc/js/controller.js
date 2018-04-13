app.controller("myctrl", ($scope, myfactory, $localStorage, ) => {
    var promise = myfactory.get();

    promise.then(function (data) {
        $scope.result = data;
    }, function (err) {
        $scope.result = err;
    });

    $scope.submit = (id, pass) => {
        alert("Searching for " + id);
        var bool = false;
        for (var i in $scope.result) {
            if ($scope.result[i].name == id && $scope.result[i].pass == pass) {
                console.log("true");
                alert("Logging you in  " + id);
                var x = location.href = "pages/welcome.html";
                $scope.storage = $localStorage;
                $scope.storage.id = id;
                bool = true;
            }
        }
        if (!bool) {
            alert("Sorry user not found!!");
        }
    }
});

app2.controller("myctrl2", ($scope, $localStorage, myfactory) => {

    $scope.welcome = $localStorage;
    $scope.id = 0;
    $scope.clicked = true;
    $scope.count = 0;

    var promise = myfactory.get();
    promise.then(function (data) {
        $scope.result = data;
        console.log($scope.result);
        var arr = [];
        angular.forEach($scope.result, function (i, data) {
            arr.push($scope.result);
        })
    }, function (err) {
        $scope.result = err;
    });

    $scope.start = () => {
            $scope.id1 = 0;
            $scope.id2 = 0;
        },
        $scope.check = () => {

            if ($scope.result[$scope.id1].answer == $scope.radioValue) {
                $scope.count++;
            }
            console.log($scope.count)
        },


        $scope.next = () => {
            $scope.color();
            $scope.check();
            $scope.id1++;
            $scope.id2++;
            $scope.no++;
            $scope.deselect();
        },
        $scope.prev = () => {
            console.log($scope.id1);
            $scope.id1--;
            $scope.id2--;
            $scope.no--;

        },
        $scope.no = 0;

    $scope.color = () => {
            if ($scope.no == 0) {

                if ($scope.radioValue)
                    $scope.answered0 = true;

            }
            if ($scope.no == 1) {
                if ($scope.radioValue)
                    $scope.answered1 = true;
            }

            if ($scope.no == 2) {
                if ($scope.radioValue)
                    $scope.answered2 = true;
            }

            if ($scope.no == 3) {
                if ($scope.radioValue)
                    $scope.answered3 = true;
            }

            if ($scope.no == 4) {
                if ($scope.radioValue)
                    $scope.answered4 = true;
            }
        },
        $scope.deselect = () => {
            console.log("hola")
            $scope.radioValue = false;
        }

    $scope.sent = () => {
        $scope.score = $scope.count;
        if($scope.count == 4){
            $scope.prize = "Hurray!! You have won 1 Crore"
            
        }
        else if ($scope.count == 3){
             $scope.prize = "Congratulations!! You have won 50 Lakh"
        }
        
        else if ($scope.count == 2){
             $scope.prize = "Wonderful!! You have won 25 Lakh"
        }
         else if ($scope.count == 1){
             $scope.prize = "Yay!! You have won 10 Lakh"
        }
        else if ($scope.count == 0){
            $scope.prize = "Bad Day, You won Nothing !"
        }
        $scope.message = "Your score is : "
        return true;
    }
    
    $scope.logout=()=>{
        locatin.href="../login.html"        
    }

});
