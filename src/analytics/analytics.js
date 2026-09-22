import ReactGA from "react-ga4";

export const initializeGA = () => {
  ReactGA.initialize("G-QJTRPJWLT6");

  if (window.gtag) {
    window.gtag("config", "G-QJTRPJWLT6", {
      debug_mode: true,
    });
  }
};

export const trackPageView = (page) => {
  ReactGA.send({
    hitType: "pageview",
    page: page,
  });
};

export const trackEvent = (
  action,
  category,
  label = ""
) => {
  ReactGA.event({
    action,
    category,
    label,
  });
};