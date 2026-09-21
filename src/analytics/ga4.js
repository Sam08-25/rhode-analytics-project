import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-QJTRPJWLT6");
};

export const trackPageView = (page) => {
  ReactGA.send({
    hitType: "pageview",
    page,
  });
};

export const trackEvent = (
  category,
  action,
  label = ""
) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};