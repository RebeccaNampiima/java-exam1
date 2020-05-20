$(document).ready(function () {
	$(".myslider").slick({
		arrows: false,
		dots: true,
		infinite: false,
		speed: 300,
		slidesToShow: 1,
	});
});

$(".news-slider").slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	dots: true,
	arrows: true,
});

function initMap() {
	let location = { lat: 58.38577, lng: 13.65044 };
	let map = new google.maps.Map(document.getElementById("map"), {
		zoom: 4,
		center: location,
	});
	let marker = new google.maps.marker({
		position: location,
		map: map,
	});
}

let map = new google.maps.Map(document.getElementById("map"), {
	center: { lat: 58.38577, lng: 13.65044 },
	zoom: 16,
	styles: [
		{
			elementType: "geometry",
			stylers: [
				{
					color: "#f5f5f5",
				},
			],
		},
		{
			elementType: "labels.icon",
			stylers: [
				{
					visibility: "off",
				},
			],
		},
		{
			elementType: "labels.text.fill",
			stylers: [
				{
					color: "#616161",
				},
			],
		},
		{
			elementType: "labels.text.stroke",
			stylers: [
				{
					color: "#f5f5f5",
				},
			],
		},
		{
			featureType: "administrative.land_parcel",
			elementType: "labels.text.fill",
			stylers: [
				{
					color: "#bdbdbd",
				},
			],
		},
		{
			featureType: "poi",
			elementType: "geometry",
			stylers: [
				{
					color: "#eeeeee",
				},
			],
		},
		{
			featureType: "poi",
			elementType: "labels.text.fill",
			stylers: [
				{
					color: "#757575",
				},
			],
		},
		{
			featureType: "poi.park",
			elementType: "geometry",
			stylers: [
				{
					color: "#e5e5e5",
				},
			],
		},
		{
			featureType: "poi.park",
			elementType: "labels.icon",
			stylers: [
				{
					color: "#696969",
				},
				{
					visibility: "on",
				},
				{
					weight: 1,
				},
			],
		},
		{
			featureType: "poi.park",
			elementType: "labels.text.fill",
			stylers: [
				{
					color: "#9e9e9e",
				},
			],
		},
		{
			featureType: "poi.school",
			elementType: "labels.icon",
			stylers: [
				{
					visibility: "on",
				},
			],
		},
		{
			featureType: "poi.sports_complex",
			elementType: "labels.icon",
			stylers: [
				{
					color: "#526469",
				},
				{
					visibility: "on",
				},
			],
		},
		{
			featureType: "road",
			elementType: "geometry",
			stylers: [
				{
					color: "#ffffff",
				},
			],
		},
		{
			featureType: "road.arterial",
			elementType: "labels.text.fill",
			stylers: [
				{
					color: "#757575",
				},
			],
		},
		{
			featureType: "road.highway",
			elementType: "geometry",
			stylers: [
				{
					color: "#dadada",
				},
			],
		},
		{
			featureType: "road.highway",
			elementType: "labels.text.fill",
			stylers: [
				{
					color: "#616161",
				},
			],
		},
		{
			featureType: "road.local",
			elementType: "labels.text.fill",
			stylers: [
				{
					color: "#9e9e9e",
				},
			],
		},
		{
			featureType: "transit.line",
			elementType: "geometry",
			stylers: [
				{
					color: "#e5e5e5",
				},
			],
		},
		{
			featureType: "transit.station",
			elementType: "geometry",
			stylers: [
				{
					color: "#eeeeee",
				},
			],
		},
		{
			featureType: "water",
			elementType: "geometry",
			stylers: [
				{
					color: "#c9c9c9",
				},
			],
		},
		{
			featureType: "water",
			elementType: "labels.text.fill",
			stylers: [
				{
					color: "#9e9e9e",
				},
			],
		},
	],
});

let marker = new google.maps.Marker({
	position: { lat: 58.38577, lng: 13.65044 },
	map: map,
	icon: "./images/marker.png",
});

$(function () {
	$("form[name='form']").validate({
		rules: {
			name: "required",
			email: {
				required: true,
				email: true,
			},
		},
		messages: {
			name: "Enter your name",
			email: "Enter a valid email address",
		},
		submitHandler: function (form) {
			form.submit();
		},
	});
});
