angular.module('app', []).controller('MapController', ['$scope', function MapController($scope) {
       
	$scope.init = function()
     {
		var mapOptions = {
          center: { lat: 9.963521, lng: 76.245727},
          zoom: 15
        };
        var map = new google.maps.Map(document.getElementById('mapContainer'),
            mapOptions);
		$scope.map=map;
		renderMarker();
		console.log("hi");
			
     }
	 $scope.name = 'world';
	 
	 $scope.locations = [
			   {name:"kochi biennale foundation",lat:9.963521,lon:76.245727},
			   {name:"kashi art gallery",lat:9.966793,lon:76.243392},
			   {name:"vivanta by taj",lat:9.967815,lon:76.245763},
			   {name:"st francis church",lat:9.966091,lon:76.240792},
			   {name:"sant cruz cathedral basilica church",lat:9.964963,lon:76.242921},
			   {name:"snc maritime mueseum",lat:9.958466,lon:76.238902},
			   ];
			   
		function renderMarker(){
			for (var i = 0; i <  $scope.locations.length; i++) {
				var beach =  $scope.locations[i];
				var myLatLng = new google.maps.LatLng(beach.lat, beach.lon);
				var marker = new google.maps.Marker({
									position: myLatLng,
									map: $scope.map,
									/*icon: image,
									shape: shape,*/
									title: beach.name
									/*zIndex: beach[3]*/
								});
			}
		}
			   
		
	 
	 $scope.init();

       
    }]);