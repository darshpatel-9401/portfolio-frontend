// The CMS stores an icon NAME (for example "FaReact"). This file turns the name into the real icon.
// To offer a new icon: import it here and add it to iconMap (and to the ICONS list in the admin panel).
import {
  FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaPython,
  FaDatabase, FaCloud, FaRobot, FaGitAlt, FaDocker, FaLaptopCode, FaShieldAlt, FaChartLine, FaCogs,
} from 'react-icons/fa'

const iconMap = {
  FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaPython,
  FaDatabase, FaCloud, FaRobot, FaGitAlt, FaDocker, FaLaptopCode, FaShieldAlt, FaChartLine, FaCogs,
}

export const getIcon = (name) => iconMap[name] || FaCode
