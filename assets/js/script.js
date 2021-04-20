var theCurrentDay = $('#currentDay')

// Momment js has the date and time for today( time when the page is opened or reloded)
function todayDate(){
    var today = moment();
$("#currentDay").text(today.format('MMMM Do YYYY, h:mm:ss a'));
}   

todayDate();

var timeOfDay = [
    {
    hour: 9,
    amPM:"am"
},
{
    hour: 10,
    amPM:"am"
},
{
    hour: 11,
    amPM:"am"
},
{
    hour: 12,
    amPM:"pm"
},{
    hour: 1,
    amPM:"pm"
},{
    hour: 2,
    amPM:"pm"
},
{
    hour: 3,
    amPM:"pm"
},
{
    hour: 4,
    amPM:"pm"
},
{
    hour: 5,
    amPM:"pm"
}
];
var tIndex =0;
var hIndex =0;

var currentHour = moment();
function nextHour(){
    var timeMarker = $("time-slot");
// each hour its own moment 
//if moment is present red
//if moment past gray
//if !moment is green
// if moment has info display

for(var i=0;i<timeOfDay.length;i++){
    // console.log(timeOfDay[tIndex].hour + timeOfDay[hIndex].amPM);
    tIndex++;
    hIndex++;
}
}
console.log(todayDate());

// var taskEl = $("#task-info").value;
// var saveTaskBtn = $("#saveButton").value;

// var taskInfo = localStorage.getItem("taskInfo");

// saveTaskBtn.addEventListener("click", function(event){
//     event.preventDefault();
//     taskEl.textContent = taskInfo;
//     localStorage.setItem("taskInfo",taskInfo);
// })

$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        // Get nearby values of the users plan 
        var text = $(this).siblings(".textarea").val();
        var time = $(this).parent().attr("id");
        // Save text in local storage
localStorage.setItem(time, text);
    })
})
