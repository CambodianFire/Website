function display(v1) {
	var id = document.getElementById("v1");
	id.style.display="none";
}

// Activate Carousel
$("#description").carousel();

// Enable Carousel Indicators
$(".item").click(function(){
    $("#description").carousel(0);
});

$(".item").click(function(){
    $("#description").carousel(1);
});

$(".item").click(function(){
    $("#description").carousel(2);
});

$(".item").click(function(){
    $("#description").carousel(3);
});

$(".item").click(function(){
    $("#description").carousel(4);
});

$(".item").click(function(){
    $("#description").carousel(5);
});

// Enable Carousel Controls
$(".left").click(function(){
    $("#description").carousel("prev");
});

$(".right").click(function(){
    $("#description").carousel("next");
});
