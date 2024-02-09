
document.addEventListener("DOMContentLoaded", function(){


    function isCalendlyEvent(e) {
        return e.origin === "https://calendly.com" && e.data.event && e.data.event.indexOf("calendly.") === 0;
    }

    window.addEventListener("message", function(e) {
        if(isCalendlyEvent(e)) {
            if (e.data.event == 'calendly.event_scheduled') {
                fbq('trackCustom', 'chedule-a-call-form');
            }
        }
    });

    if (typeof addQueryParam !== 'function') {
        function addQueryParam(url, param, value) {
          if (value) {
            if (url.indexOf('?') !== -1) {
              url += '&' + param + '=' + encodeURIComponent(value);
            } else {
              url += '?' + param + '=' + encodeURIComponent(value);
            }
          }
          return url;
        }
      }
    $(document).on('click', '.schedule-a-call', function (e){
        e.preventDefault();
        var calendly_url = 'https://calendly.com/crowdo/meet-google-call?hide_landing_page_details=1&hide_gdpr_banner=1&hide_event_type_details=1';
        calendly_url = addQueryParam(calendly_url, 'utm_source', utm_source);
        calendly_url = addQueryParam(calendly_url, 'utm_medium', utm_medium);
        calendly_url = addQueryParam(calendly_url, 'utm_campaign', utm_campaign);
        calendly_url = addQueryParam(calendly_url, 'utm_content', utm_content);
        calendly_url = addQueryParam(calendly_url, 'utm_term', utm_term);
        Calendly.initPopupWidget({url: calendly_url});
    });
});