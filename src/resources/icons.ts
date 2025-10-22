import { IconType } from "react-icons";

import {
  HiArrowUpRight,
  HiOutlineLink,
  HiArrowTopRightOnSquare,
  HiEnvelope,
  HiCalendarDays,
  HiArrowRight,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineDocument,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

import {
  PiHouseDuotone,
  PiUserCircleDuotone,
  PiGridFourDuotone,
  PiBookBookmarkDuotone,
  PiImageDuotone,
} from "react-icons/pi";

import {
  SiJavascript,
  SiNextdotjs,
  SiFigma,
  SiSupabase,
  SiTwinmotion,
  SiUnrealengine,
  SiAutodeskmaya,
  SiBlender,
  SiAdobe,
  SiAdobecreativecloud,
  SiPython,
  SiCplusplus,
} from "react-icons/si";

import {
  FaDiscord,
  FaGithub,
  FaLinkedin,
  FaX,
  FaThreads,
  FaXTwitter,
  FaFacebook,
  FaPinterest,
  FaWhatsapp,
  FaReddit,
  FaTelegram,
  FaUnity,
  FaMeta,
  FaItchIo, // CHANGED: FaItchIo moved here from 'react-icons/fa'
} from "react-icons/fa6";

// import { FaItchIo } from "react-icons/fa"; // REMOVED: No longer needed

import { FiGlobe } from "react-icons/fi";
import { DiVisualstudio } from "react-icons/di";
import { TbSql, TbBrandCSharp } from "react-icons/tb";

export const iconLibrary: Record<string, IconType> = {
  // --- EXISTING ICONS (STRUCTURE & SOCIAL) ---
  arrowUpRight: HiArrowUpRight,
  arrowRight: HiArrowRight,
  email: HiEnvelope,
  globe: HiOutlineGlobeAsiaAustralia,
  person: PiUserCircleDuotone,
  grid: PiGridFourDuotone,
  book: PiBookBookmarkDuotone,
  openLink: HiOutlineLink,
  calendar: HiCalendarDays,
  home: PiHouseDuotone,
  gallery: PiImageDuotone,
  discord: FaDiscord,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  github: FaGithub,
  linkedin: FaLinkedin,
  x: FaX,
  twitter: FaXTwitter,
  threads: FaThreads,
  arrowUpRightFromSquare: HiArrowTopRightOnSquare,
  document: HiOutlineDocument,
  rocket: HiOutlineRocketLaunch,

  // EXISTING TECH
  javascript: SiJavascript,
  nextjs: SiNextdotjs,
  supabase: SiSupabase,
  figma: SiFigma,

  // EXISTING SOCIAL
  facebook: FaFacebook,
  pinterest: FaPinterest,
  whatsapp: FaWhatsapp,
  reddit: FaReddit,
  telegram: FaTelegram,
  
  // --- ADDED TOOL & ENGINE MAPPINGS ---
  unity: FaUnity,
  unrealengine: SiUnrealengine,
  twinmotion: SiTwinmotion,
  meta: FaMeta,
  visualstudio: DiVisualstudio,
  autodeskmaya: SiAutodeskmaya,
  blender: SiBlender,
  adobe: SiAdobe,
  adobecc: SiAdobecreativecloud,
  spatial: FiGlobe,
  
  // --- ADDED LANGUAGE MAPPINGS ---
  python: SiPython,
  cplusplus: SiCplusplus,
  csharp: TbBrandCSharp,
  sql: TbSql,
  
  // --- ITCH.IO SOCIAL MAPPING ---
  "itch.io": FaItchIo, // Now correctly mapped from fa6
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;