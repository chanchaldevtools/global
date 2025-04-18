import React, { useEffect, useRef } from 'react';

const GoogleTranslate = () => {
  const scriptLoadedRef = useRef(false); // Tracks if the script is already loaded

  useEffect(() => {
    if (!scriptLoadedRef.current) {
      const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          { pageLanguage: 'en' },
          'google_translate_element'
        );
      };

      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);

      window.googleTranslateElementInit = googleTranslateElementInit;

      scriptLoadedRef.current = true; // Mark script as loaded
    }

    return () => {
      if (scriptLoadedRef.current) {
        // delete window.googleTranslateElementInit;
      }
    };
  }, []);

  return (
    <div>
      <div id="google_translate_element"></div>
      <style>{`
  .goog-te-banner-frame {
    display: none !important;
  }
  body {
    top: 0px !important;
  }
  .goog-logo-link,
  #goog-gt-tt,
  .goog-te-gadget-simple span,
  .VIpgJd-ZVi9od-ORHb-OEVmcd {
    display: none !important;
  }
  .goog-te-gadget {
    color: transparent !important;
   
    font-size: 11px !important;
    
    white-space: nowrap;
    height: 0px !important;
  }
    #google_translate_element{
    // margin-top: -21px;}
  .goog-te-gadget .goog-te-combo {
    color: #ffffff !important;
    font-size: 13px !important;
    line-height: 1.5; /* Adjusts the spacing between items */
    
    font-weight: 500;
    padding: 7px 10px;
    background: transparent;
  }
  a.VIpgJd-ZVi9od-l4eHX-hSRGPd {
    display: none;
  }
  select.goog-te-combo {
    border-radius: 0px;
    width: 30%;
    margin: 0;
  }
  .select_container::before {
    background: transparent;
    content: "";
    display: inline-block;
    height: 0px;
    position: absolute;
    right: 0px !important;
    top: 0;
    width: 50px;
  }
  select {
    border: none;
   
    font-weight: 600;
    height: auto;
    width: 100%;
  }
      #google_translate_element {
        margin-left: -153px;}
  
  .select_container::after {
    color: #fff;
    content: "";
   
    font-size: 10px;
    position: absolute;
    right: 19px;
    top: 22%;
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
  }
  .select_container {
    // max-width: 100%;
    position: relative;
  }
    
  @media only screen and (max-width: 770px) {
    select.goog-te-combo {
      border-radius: 0px !important;
      // width: 100% !important;
      margin: 0 !important;
      padding: 13px 0px !important;
    }
    .goog-te-gadget .goog-te-combo {
            margin: 9px 0px 4px 0px !important;
            font-size: 12px !important;
            padding: 0 !important;
        }
      #google_translate_element {
    margin-left: -307px;
}
    sub_header_div_1_p {
      font-size: 12px !importent;
    }
  }
    @media only screen and (max-width: 550px) {
      .goog-te-gadget .goog-te-combo {
            margin: 3px 0px 4px 0px !important;
            font-size: 10px !important
        }
      
        #google_translate_element {
        margin-left: -271px;}
    }
`}</style>

    </div>
  );
};

export default GoogleTranslate;
