function display(v1) {
	var id = document.getElementById("v1");
	id.style.display="none";
}

// Activate Carousel
$("#description").carousel();

// Enable Carousel Indicators
$(".item").click(function(){
    $("#description").carousel(1);
});

// Enable Carousel Controls
$(".left").click(function(){
    $("#description").carousel("prev");
});
