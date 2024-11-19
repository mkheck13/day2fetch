
// JSON is short for JS Object Notation

function GetJson(){
    fetch('../data/data.JSON').then(
        response => response.json()
    ).then(
        data => console.log(data.studentNames[1].house)
    )
}
GetJson();

function GetChucked(){
    fetch('https://api.chucknorris.io/jokes/random').then(
        response => response.json()
    ).then(
        data => console.log(data["value"])
    )
}
GetChucked();

function GetCar(){
    fetch('https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json&page=2').then(
        response => response.json()
    ).then(
        data => console.log(data.Results[2].Mfr_Name)
    )
}
GetCar();