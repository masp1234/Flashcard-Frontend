 const LOCATION_API_KEY = 'pk.65d163e342fc47861b2fff07f691b925'
 
 
 
 window.navigator.getBattery().then(battery => {
    console.log(battery.level);
    console.log(battery.charging);
 })

 getUserDeviceLocation();

 async function getUserDeviceLocation() {
    const userDeviceLocation = await window.navigator.geolocation.getCurrentPosition(currentPosition => {
        fetchDataByUrl(`https://eu1.locationiq.com/v1/reverse?
        key=${LOCATION_API_KEY}&
        lat=${currentPosition.coords.latitude}&
        lon=${currentPosition.coords.longitude}&
        format=json`).then(location => {
            console.log(location.display_name);
        })
    }) 
        
    
 }




 