import React from 'react';
import Add from '../../../assets/icons/Add';
import CaretRight from '../../../assets/icons/CaretRight';
import Ellipsis from '../../../assets/icons/Ellipsis';
import Eye from '../../../assets/icons/Eye';
import FileArrowDown from '../../../assets/icons/FileArrowDown';
import Home from '../../../assets/icons/Home';
import Info from '../../../assets/icons/Info';
import PenToSquare from '../../../assets/icons/PenToSquare';
import ShareNodes from '../../../assets/icons/ShareNodes';
import Document from '../../../assets/icons/Document';
import BookOpen from '../../../assets/icons/BookOpen';
import User from '../../../assets/icons/User';
import BullHorn from '../../../assets/icons/BullHorn';
import { CircleXmark } from '../../../assets/icons/CircleXmark';
import AngleDown from '../../../assets/icons/AngleDown';
import Bars from '../../../assets/icons/Bars';
import Star from '../../../assets/icons/Star';
import CircleQuestion from '../../../assets/icons/CircleQuestion';
import AngleLeft from '../../../assets/icons/AngleLeft';
import Video from '../../../assets/icons/Video';
import Tag from '../../../assets/icons/Tag';
import { iconsType } from './types';
import {
  Check,
  Seeker,
  Trash,
  Articulos,
  Certificados,
  Coas,
  Comentarios,
  Companias,
  DepartamentoTecnico,
  EnsayoLaboratorio,
  Equipos,
  Especificaciones,
  InformacionTecnica,
  InputActividad,
  Marcas,
  Marketing,
  Oem,
  Peligro,
  ReferenciaAplicaciones,
  RevistasTecnicas,
  SustitucionProducto,
  Rss,
  TipoEquipos,
  Webinars,
  Calculator,
  Disable,
} from '../../../assets/icons';
import { Pdf } from '../../../assets/icons/Pdf';
import { GeneratePdf } from '../../../assets/icons/GeneratePdf';
import { Mp4 } from '../../../assets/icons/Mp4';
import { Youtube } from '../../../assets/icons/Youtube';
import { Rusia } from '../../../assets/icons/Russia';
import { UnitedKingdom } from '../../../assets/icons/UnitedKingdom';
import { Spain } from '../../../assets/icons/Spain';
import { PdfSend } from '../../../assets/icons/PdfSend';
import { CircleCheck } from '../../../assets/icons/CircleCheck';
import { Chile } from '../../../assets/icons/Chile';
import { AngleUp } from '../../../assets/icons/AngleUp';
import WorldFlag from '../../../assets/icons/WorldFlag';
import Aleman from '../../../assets/icons/Aleman';
import { China } from '../../../assets/icons/China';
import TeaditApplication from '../../../assets/icons/TeaditApplication';
import InstallationPockets from '../../../assets/icons/InstallationPockets';
import IndustrialMeetingsBook from '../../../assets/icons/IndustrialMeetingsBook';
import FluidSealing from '../../../assets/icons/FluidSealing';
import EngineeringAndConstruction from '../../../assets/icons/EngineeringAndConstruction';
import AutomaticLubrication from '../../../assets/icons/AutomaticLubrication';
import Filtration from '../../../assets/icons/Filtration';
import Pumps from '../../../assets/icons/Pumps';
import CompatibilityGuide from '../../../assets/icons/CompatibilityGuide';
import Guide from '../../../assets/icons/Guide';
import Ventec from '../../../assets/icons/Ventec';
export const icons: iconsType[] = [
  'Add',
  'AngleLeft',
  'BookOpen',
  'BullHorn',
  'CaretRight',
  'Document',
  'Ellipsis',
  'Eye',
  'FileArrowDown',
  'Home',
  'Info',
  'PenToSquare',
  'ShareNodes',
  'User',
  'Video',
  'CircleQuestion',
  'Star',
  'Tag',
  'Bars',
  'AngleDown',
  'CircleXmark',
  'Trash',
  'Disable',
  'Check',
  'Pdf',
  'GeneratePdf',
  'Mp4',
  'Youtube',
  'Rusia',
  'UnitedKingdom',
  'Spain',
  'PdfSend',
  'CircleCheck',
  'Chile',
  'AngleUp',
  'Articulos',
  'Certificados',
  'Coas',
  'Comentarios',
  'Companias',
  'DepartamentoTecnico',
  'EnsayoLaboratorio',
  'Equipos',
  'Especificaciones',
  'InformacionTecnica',
  'InputActividad',
  'Marcas',
  'Marketing',
  'Oem',
  'Peligro',
  'ReferenciaAplicaciones',
  'RevistasTecnicas',
  'Rss',
  'SustitucionProducto',
  'TipoEquipos',
  'Webinars',
  'Calculator',
  'WorldFlag',
  'Germany',
  'China',
  'TeaditApplications',
  'InstallationPockets',
  'IndustrialMeetingsBook',
  'FluidSealing',
  'EngineeringConstruction',
  'AutomaticLubrication',
  'Filtration',
  'Pumps',
  'CompatibilityGuide',
  'Guide',
  'Ventec',
];

export const iconList = (size: number, color: string, src?: string) => {
  return {
    Home: <Home color={color} size={size} />,
    CaretRight: <CaretRight size={size} color={color} />,
    Eye: <Eye size={size} color={color} />,
    Info: <Info size={size} color={color} />,
    Ellipsis: <Ellipsis size={size} color={color} />,
    FileArrowDown: <FileArrowDown size={size} color={color} />,
    PenToSquare: <PenToSquare size={size} fill={color} />,
    ShareNodes: <ShareNodes size={size} fill={color} />,
    Add: <Add size={size} fill={color} />,
    Document: <Document size={size} color={color} />,
    BookOpen: <BookOpen size={size} color={color} />,
    BullHorn: <BullHorn size={size} color={color} />,
    User: <User size={size} color={color} />,
    Video: <Video size={size} color={color} />,
    AngleLeft: <AngleLeft size={size} color={color} />,
    CircleQuestion: <CircleQuestion size={size} color={color} />,
    Star: <Star size={size} color={color} />,
    Bars: <Bars size={size} color={color} />,
    AngleDown: <AngleDown size={size} color={color} />,
    Tag: <Tag size={size} color={color} />,
    CircleXmark: <CircleXmark size={size} color={color} />,
    Image: <img alt="icon" src={src} width={size} height={size} />,
    Trash: <Trash size={size} color={color} />,
    Disable: <Disable size={size} color={color} />,
    Check: <Check size={size} color={color} />,
    Seeker: <Seeker size={size} color={color} />,
    Pdf: <Pdf size={size} color={color} />,
    GeneratePdf: <GeneratePdf size={size} color={color} />,
    Mp4: <Mp4 size={size} color={color} />,
    Youtube: <Youtube size={size} color={color} />,
    Rusia: <Rusia size={size} />,
    UnitedKingdom: <UnitedKingdom size={size} />,
    Spain: <Spain size={size} />,
    PdfSend: <PdfSend size={size} color={color} />,
    CircleCheck: <CircleCheck size={size} color={color} />,
    Chile: <Chile size={size} color={color} />,
    AngleUp: <AngleUp size={size} color={color} />,
    Articulos: <Articulos size={size} color={color} />,
    Certificados: <Certificados size={size} color={color} />,
    Coas: <Coas size={size} color={color} />,
    Comentarios: <Comentarios size={size} color={color} />,
    Companias: <Companias size={size} color={color} />,
    DepartamentoTecnico: <DepartamentoTecnico size={size} color={color} />,
    EnsayoLaboratorio: <EnsayoLaboratorio size={size} color={color} />,
    Equipos: <Equipos size={size} color={color} />,
    Especificaciones: <Especificaciones size={size} color={color} />,
    InformacionTecnica: <InformacionTecnica size={size} color={color} />,
    InputActividad: <InputActividad size={size} color={color} />,
    Marcas: <Marcas size={size} color={color} />,
    Marketing: <Marketing size={size} color={color} />,
    Oem: <Oem size={size} color={color} />,
    Peligro: <Peligro size={size} color={color} />,
    ReferenciaAplicaciones: (
      <ReferenciaAplicaciones size={size} color={color} />
    ),
    TeditApplications: <TeaditApplication size={size} color={color} />,

    RevistasTecnicas: <RevistasTecnicas size={size} color={color} />,
    Rss: <Rss size={size} color={color} />,
    SustitucionProducto: <SustitucionProducto size={size} color={color} />,
    TipoEquipos: <TipoEquipos size={size} color={color} />,
    Webinars: <Webinars size={size} color={color} />,
    Calculator: <Calculator size={size} color={color} />,
    WorldFlag: <WorldFlag size={size} />,
    Germany: <Aleman size={size} />,
    China: <China size={size} />,
    TeaditApplications: <TeaditApplication size={size} color={color} />,
    InstallationPockets: <InstallationPockets size={size} color={color} />,
    IndustrialMeetingsBook: (
      <IndustrialMeetingsBook size={size} color={color} />
    ),
    FluidSealing: <FluidSealing size={size} color={color} />,
    EngineeringConstruction: (
      <EngineeringAndConstruction color={color} size={size} />
    ),
    AutomaticLubrication: <AutomaticLubrication size={size} color={color} />,
    Filtration: <Filtration size={size} color={color} />,
    Pumps: <Pumps size={size} color={color} />,
    CompatibilityGuide: <CompatibilityGuide size={size} color={color} />,
    Guide: <Guide size={size} color={color} />,
    Ventec: <Ventec size={size} color={color} />,
  };
};
