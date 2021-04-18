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
function nextHour(){
    var timeMarker = $("#time-slot");

for(var i=0;i<timeOfDay.length;i++){
    // console.log(timeOfDay[tIndex].hour + timeOfDay[hIndex].amPM);
    tIndex++;
    hIndex++;
}
}

var taskEl = $("#task-info").value;
var saveTaskBtn = $("#saveButton").value;

var taskInfo = localStorage.getItem("taskInfo");

saveTaskBtn.addEventListener("click", function(event){
    event.preventDefault();
    taskEl.textContent = taskInfo;
    localStorage.setItem("taskInfo",taskInfo);
})


