//jshint esversion:6

// Exporting of Date Function
exports.getDate = function getDate() {

    const today = new Date();
    
    const options = {
            weekday: "long",
            day: "numeric",
            month: "long"
    };

    return today.toLocaleDateString("en-US", options);
}


// Exporting of Day Function
exports.getDay = function getDay() {

    const today = new Date();
    
    const options = {
            weekday: "long",
    } ;

    return today.toLocaleDateString("en-US", options);
}