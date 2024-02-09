console.log('global!');

function isCalendlyEvent(e) {
    return e.origin === "https://calendly.com" && e.data.event && e.data.event.indexOf("calendly.") === 0;
};
   
window.addEventListener("message", function(e) {
    if(isCalendlyEvent(e)) {
        if(e.data.event == 'calendly.event_scheduled'){
            window.location.href = location.origin+"/thanks_calendly";
        }
    }
});