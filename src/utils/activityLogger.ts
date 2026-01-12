// Generar un UID de sesión único
export const generateSessionUid = (length: number = 16): string => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    result += chars[randomIndex];
  }
  
  return result;
};

// Obtener o crear sessionUid
export const getSessionUid = (): string => {
  if (typeof window === 'undefined') return '';
  
  const storageKey = 'coban_session_uid';
  let sessionUid = sessionStorage.getItem(storageKey);
  
  if (!sessionUid) {
    sessionUid = generateSessionUid();
    sessionStorage.setItem(storageKey, sessionUid);
  }
  
  return sessionUid;
};

// Tipos para el logger
interface MetaData {
  [key: string]: any;
}

interface ActivityLogPayload {
  sessionUid: string;
  code: string;
  metaData: {
    data: MetaData;
  };
}

// Configuración de la API
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.cobanacademy.com';
const JWT_TOKEN = process.env.NEXT_PUBLIC_JWT_TOKEN || '';

// Función para enviar logs de actividad
export const activityLogs = async (
  code: string,
  metaData: MetaData = {},
  jwt?: string
): Promise<void> => {
  try {
    const sessionUid = getSessionUid();
    
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };
    
    // Agregar JWT si existe
    if (jwt) {
      headers['Authorization'] = `Bearer ${jwt}`;
    }
    
    const payload: ActivityLogPayload = {
      sessionUid,
      code,
      metaData: {
        data: {
          ...metaData,
          timestamp: new Date().toISOString(),
          userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : '',
          url: typeof window !== 'undefined' ? window.location.href : '',
        },
      },
    };
    
    // No esperamos respuesta para no bloquear la UI
    fetch(`${API_BASE_URL}/api/custom/activity-log`, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload),
      // No esperamos respuesta
      keepalive: true,
    }).catch(error => {
      // Solo logueamos en desarrollo
      if (process.env.NODE_ENV === 'development') {
        console.error('Error sending activity log:', error);
      }
    });
  } catch (error) {
    // Silenciosamente fallar para no afectar la UX
    if (process.env.NODE_ENV === 'development') {
      console.error('Error in activityLogs:', error);
    }
  }
};

// Códigos de actividad predefinidos (puedes expandir según necesites)
export const ActivityCodes = {
  PAGE_VIEW: 'LANDING_PAGE_START',
  DOWNLOAD_APP: 'LANDING_PAGE_DOWNLOAD_CLICK',
  CONTACT_WHATSAPP: 'LANDING_PAGE_CONTACT_US',
  SOCIALS: 'LANDING_PAGE_SOCIALS',
  SECTIONS: 'LANDING_PAGE_SECTIONS',
  ANDROID_DOWNLOAD: 'LANDING_PAGE_ANDROID',
  IOS_DOWNLOAD: 'LANDING_PAGE_IOS',
  HERO_VIEW: 'hero_view',
  PRICING_VIEW: 'pricing_view',
  FAQ_OPEN: 'faq_open',
  TESTIMONIAL_VIEW: 'testimonial_view',
  TEAM_VIEW: 'team_view',
  FORM_SUBMIT: 'form_submit',
  VIDEO_PLAY: 'video_play',
} as const;

// Hook personalizado para usar en componentes
export const useActivityLogger = () => {
  const logActivity = (code: string, metaData: MetaData = {}) => {
    activityLogs(code, metaData);
  };
  
  // Helper para loguear clicks en redes sociales
  const logSocialClick = (network: string, source: 'header' | 'footer') => {
    activityLogs(ActivityCodes.SOCIALS, {
      network,      // 'facebook', 'twitter', 'linkedin', etc.
      source,       // 'header' o 'footer'
      action: 'social_click',
    }, JWT_TOKEN);
  };
  
  // Helper para loguear navegación a secciones
  const logSectionNavigation = (section: string, source: 'header' | 'footer') => {
    activityLogs(ActivityCodes.SECTIONS, {
      section,      // 'como-funciona', 'precios', 'ayuda', etc.
      source,       // 'header' o 'footer'
      action: 'section_navigation',
    }, JWT_TOKEN);
  };
  
  // Helper para loguear descargas de app store
  const logAppStoreClick = (platform: 'android' | 'ios', source: 'header' | 'footer') => {
    const code = platform === 'android' ? ActivityCodes.ANDROID_DOWNLOAD : ActivityCodes.IOS_DOWNLOAD;
    activityLogs(code, {
      platform,     // 'android' o 'ios'
      source,       // 'header' o 'footer'
      action: 'app_store_click',
    }, JWT_TOKEN);
  };
  
  return { logActivity, logSocialClick, logSectionNavigation, logAppStoreClick, ActivityCodes };
};

