// Detectar sistema operativo y retornar la URL apropiada
import { activityLogs, ActivityCodes } from './activityLogger';

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
      
    },"37e332b9438287cca25c3f0f5df12b4b471a8d99619ed7375311a4df6488cdcf7e05a1ceed58b8c7a2c725115d0d2b4075f56e54e795dbe56b32524ae9c840af3e4cbf09bc479e55ba5f6fa12aa61c1b17a050de42fb6a9290f3712b99b08e0114c3d309103ab1c3a7fa6992a1a6b2e2ac192c93b5d6ea0cc7e210073e880fbf");
    
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
      
    },"37e332b9438287cca25c3f0f5df12b4b471a8d99619ed7375311a4df6488cdcf7e05a1ceed58b8c7a2c725115d0d2b4075f56e54e795dbe56b32524ae9c840af3e4cbf09bc479e55ba5f6fa12aa61c1b17a050de42fb6a9290f3712b99b08e0114c3d309103ab1c3a7fa6992a1a6b2e2ac192c93b5d6ea0cc7e210073e880fbf");
  
  }
  return {handleLog};
}

