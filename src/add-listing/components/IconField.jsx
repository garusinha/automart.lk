import React from "react";
import {
  FaClipboardList,
  FaTag,
  FaCar,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaDollarSign,
  FaUser,
  FaPhone,
  FaCheckCircle,
  FaExclamationCircle,
  FaInfoCircle,
  FaQuestionCircle,
  FaCarBattery,
  FaCarCrash,
  FaCarSide,
  FaRoad,
  FaIndustry,
  FaTachometerAlt,
} from "react-icons/fa";

const iconMap = {
  "fa-solid fa-car": <FaCar />,
  "fa-solid fa-money-bill": <FaDollarSign />,
  FaChargingStation: <FaCarBattery />,
  "fa-solid industry-car": <FaIndustry />,
  FaCalendarAlt: <FaCalendarAlt />,
  FaRoad: <FaRoad />,
  FaCarTransmission: <FaCarSide />, // Replace with the correct icon if needed
  "fa-solid fa-tachometer-alt": <FaTachometerAlt />,
  clipboard: <FaClipboardList />,
  tag: <FaTag />,
  car: <FaCar />,
  calendar: <FaCalendarAlt />,
  location: <FaMapMarkerAlt />,
  dollar: <FaDollarSign />,
  user: <FaUser />,
  phone: <FaPhone />,
  checkCircle: <FaCheckCircle />,
  exclamationCircle: <FaExclamationCircle />,
  infoCircle: <FaInfoCircle />,
  questionCircle: <FaQuestionCircle />,
  battery: <FaCarBattery />,
  crash: <FaCarCrash />,
  sideCar: <FaCarSide />,
};

function IconField({ icon }) {
  // Use the 'icon' prop
  return <div>{iconMap[icon] || null}</div>; // Fallback to null if the icon is not found
}

export default IconField;
