// Detectar sistema operativo y retornar la URL apropiada
import { activityLogs, ActivityCodes } from './activityLogger';

// JWT Token desde variables de entorno
const JWT_TOKEN = process.env.NEXT_PUBLIC_JWT_TOKEN || '';

export const getAppStoreUrl = (): string => {
  // URLs de las tiendas (reemplaza con tus URLs reales)
  const APP_STORE_URL = 'https://apps.apple.com/app/cobanacademy';
  const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.cobanacademy.cobanacademy&hl=es_BO';

  // Detectar el sistema operativo
  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;

  // iOS (iPhone, iPad, iPod)
  if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
    return APP_STORE_URL;
  }

  // macOS
  if (navigator.platform && /Mac/.test(navigator.platform)) {
    return APP_STORE_URL;
  }

  // Por defecto, Google Play (Android y otros)
  return PLAY_STORE_URL;
};

// Hook personalizado para usar en componentes de cliente
export const useAppDownload = () => {
  const handleDownload = () => {
    const url = getAppStoreUrl();
    const platform = url.includes('apple') ? 'iOS' : 'Android';
    
    // Loguear la actividad
    activityLogs(ActivityCodes.DOWNLOAD_APP, {
      platform,
      url,
      action: 'app_download_click',
      
    }, JWT_TOKEN);
    
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return { handleDownload };
};

export const useAppLogs=()=>{
  const handleLog=( code: string)=>{
    const url=getAppStoreUrl();
    const platform = url.includes('apple') ? 'iOS' : 'Android';
    
    activityLogs(code, {
      platform,
      url,
      action: 'Section Navbar',
      
    }, JWT_TOKEN);
  
  }
  return {handleLog};
}

