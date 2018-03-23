  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA7z2d0dY0ia66AZUhkI_fL2uzk_pG1ZaE",
    authDomain: "search-nynja.firebaseapp.com",
    databaseURL: "https://search-nynja.firebaseio.com",
    projectId: "search-nynja",
    storageBucket: "",
    messagingSenderId: "836518327326"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  $("#inputForm").on("click", function(event) {
    event.preventDefault();

    var searchInput = $("#inputForm").val().trim();

    database.ref().push(searchInput);

    console.log(searchInput);


  });