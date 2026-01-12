import React from "react";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const TermsAndConditions = () => {
  return (
    <>
      <Header />
      <main
        style={styles.main}
        className="font-regular text-xs md:text-base w-full mx-auto p-6 md:p-20 bg-slate-100 text-gray-900"
      >
      <h1 style={styles.title}>
        <strong>Términos y condiciones</strong>
      </h1>
      <p>
        Bienvenido a <strong>Coban Academy</strong>. Al acceder y utilizar
        nuestros servicios, usted acepta estar sujeto a los siguientes términos
        y condiciones de uso.
      </p>

      <ol>
        <li>
          <strong>Aceptación de los términos</strong>
        </li>
      </ol>
      <p>
        Al acceder y utilizar los servicios de <strong>Coban Academy</strong>,
        usted acepta cumplir y estar sujeto a estos Términos y Condiciones.
        Si no está de acuerdo con alguno de estos términos, no debe utilizar
        nuestros servicios.
      </p>

      <ol start={2}>
        <li>
          <strong>Descripción del servicio</strong>
        </li>
      </ol>
      <p>
        <strong>Coban Academy</strong> es una plataforma educativa que ofrece
        cursos y contenido relacionado con la gestión de créditos y finanzas
        personales. Nuestros servicios incluyen:
      </p>
      <ul>
        <li>Acceso a cursos educativos en línea</li>
        <li>Materiales de aprendizaje y recursos descargables</li>
        <li>Certificados de finalización de cursos</li>
        <li>Acceso a nuestra aplicación móvil</li>
        <li>Soporte técnico y educativo</li>
      </ul>

      <ol start={3}>
        <li>
          <strong>Requisitos de elegibilidad</strong>
        </li>
      </ol>
      <p>
        Para utilizar nuestros servicios, debe tener al menos 18 años de edad.
        Al crear una cuenta, usted declara y garantiza que cumple con este
        requisito de edad.
      </p>

      <ol start={4}>
        <li>
          <strong>Registro y cuenta de usuario</strong>
        </li>
      </ol>
      <p>
        Para acceder a determinadas funciones de nuestra plataforma, es posible
        que deba crear una cuenta. Usted es responsable de:
      </p>
      <ul>
        <li>Mantener la confidencialidad de su contraseña</li>
        <li>Todas las actividades que ocurran bajo su cuenta</li>
        <li>Proporcionar información precisa y actualizada</li>
        <li>Notificarnos inmediatamente de cualquier uso no autorizado</li>
      </ul>

      <ol start={5}>
        <li>
          <strong>Suscripciones y pagos</strong>
        </li>
      </ol>
      <p>
        <strong>Coban Academy</strong> ofrece diferentes planes de
        suscripción:
      </p>
      <ul>
        <li>
          <strong>Plan Básico:</strong> Acceso limitado a cursos
          seleccionados
        </li>
        <li>
          <strong>Plan Premium:</strong> Acceso completo a todos los cursos
          y materiales
        </li>
        <li>
          <strong>Plan Gold:</strong> Acceso premium más asesoría
          personalizada
        </li>
      </ul>
      <p>
        Los pagos se procesan a través de proveedores de servicios de pago de
        terceros. Al realizar un pago, usted acepta los términos y condiciones
        de dichos proveedores.
      </p>

      <ol start={6}>
        <li>
          <strong>Política de reembolso</strong>
        </li>
      </ol>
      <p>
        Ofrecemos reembolsos bajo las siguientes condiciones:
      </p>
      <ul>
        <li>
          Solicitud de reembolso dentro de los primeros 7 días de la compra
        </li>
        <li>El usuario no ha completado más del 20% del contenido</li>
        <li>
          No se han descargado certificados de finalización
        </li>
      </ul>
      <p>
        Para solicitar un reembolso, debe ponerse en contacto con nuestro
        equipo de soporte a través de{" "}
        <a href="mailto:soporte@cobanacademy.com">soporte@cobanacademy.com</a>
      </p>

      <ol start={7}>
        <li>
          <strong>Propiedad intelectual</strong>
        </li>
      </ol>
      <p>
        Todo el contenido disponible en <strong>Coban Academy</strong>,
        incluyendo pero no limitado a textos, gráficos, logotipos, videos,
        audio y software, es propiedad de <strong>Coban Academy</strong> o de
        sus proveedores de contenido y está protegido por las leyes de
        propiedad intelectual.
      </p>
      <p>Usted no puede:</p>
      <ul>
        <li>Reproducir, duplicar o copiar contenido sin autorización</li>
        <li>Redistribuir o revender el contenido</li>
        <li>Crear trabajos derivados basados en nuestro contenido</li>
        <li>Utilizar el contenido con fines comerciales sin permiso</li>
      </ul>

      <ol start={8}>
        <li>
          <strong>Uso aceptable</strong>
        </li>
      </ol>
      <p>Al utilizar nuestros servicios, usted acepta NO:</p>
      <ul>
        <li>
          Utilizar la plataforma para actividades ilegales o no autorizadas
        </li>
        <li>
          Intentar acceder a cuentas de otros usuarios o áreas restringidas
        </li>
        <li>
          Interferir con el funcionamiento normal de la plataforma
        </li>
        <li>
          Transmitir virus, malware u otro código malicioso
        </li>
        <li>
          Compartir credenciales de acceso con otras personas
        </li>
        <li>
          Utilizar herramientas automatizadas para acceder a la plataforma
        </li>
      </ul>

      <ol start={9}>
        <li>
          <strong>Modificaciones del servicio</strong>
        </li>
      </ol>
      <p>
        <strong>Coban Academy</strong> se reserva el derecho de modificar,
        suspender o discontinuar cualquier aspecto de nuestros servicios en
        cualquier momento, con o sin previo aviso. No seremos responsables ante
        usted o cualquier tercero por cualquier modificación, suspensión o
        discontinuación de los servicios.
      </p>

      <ol start={10}>
        <li>
          <strong>Limitación de responsabilidad</strong>
        </li>
      </ol>
      <p>
        En la medida máxima permitida por la ley, <strong>Coban Academy</strong>
        , sus directores, empleados, socios y agentes no serán responsables de:
      </p>
      <ul>
        <li>
          Daños indirectos, incidentales, especiales o consecuentes
        </li>
        <li>
          Pérdida de beneficios, ingresos, datos o uso
        </li>
        <li>
          Errores u omisiones en el contenido
        </li>
        <li>
          Interrupciones o errores en el servicio
        </li>
      </ul>

      <ol start={11}>
        <li>
          <strong>Indemnización</strong>
        </li>
      </ol>
      <p>
        Usted acepta indemnizar y mantener indemne a{" "}
        <strong>Coban Academy</strong>, sus directores, empleados y agentes de
        cualquier reclamación, pérdida, responsabilidad, daño o gasto
        (incluyendo honorarios legales) que surjan de:
      </p>
      <ul>
        <li>Su uso de nuestros servicios</li>
        <li>Su violación de estos Términos y Condiciones</li>
        <li>Su violación de derechos de terceros</li>
      </ul>

      <ol start={12}>
        <li>
          <strong>Ley aplicable y jurisdicción</strong>
        </li>
      </ol>
      <p>
        Estos Términos y Condiciones se regirán e interpretarán de acuerdo con
        las leyes de Bolivia. Cualquier disputa relacionada con estos términos
        estará sujeta a la jurisdicción exclusiva de los tribunales de Bolivia.
      </p>

      <ol start={13}>
        <li>
          <strong>Modificaciones a los términos</strong>
        </li>
      </ol>
      <p>
        <strong>Coban Academy</strong> se reserva el derecho de modificar estos
        Términos y Condiciones en cualquier momento. Las modificaciones entrarán
        en vigor inmediatamente después de su publicación en la plataforma. Su
        uso continuado de los servicios después de cualquier modificación
        constituye su aceptación de los nuevos términos.
      </p>

      <ol start={14}>
        <li>
          <strong>Terminación</strong>
        </li>
      </ol>
      <p>
        Podemos terminar o suspender su acceso a nuestros servicios
        inmediatamente, sin previo aviso ni responsabilidad, por cualquier
        motivo, incluyendo pero no limitado a una violación de estos Términos y
        Condiciones.
      </p>
      <p>
        Tras la terminación:
      </p>
      <ul>
        <li>Su derecho a utilizar el servicio cesará inmediatamente</li>
        <li>Debe cesar todo uso del contenido de la plataforma</li>
        <li>
          Las disposiciones que por su naturaleza deban sobrevivir a la
          terminación seguirán vigentes
        </li>
      </ul>

      <ol start={15}>
        <li>
          <strong>Contacto</strong>
        </li>
      </ol>
      <p>
        Si tiene alguna pregunta sobre estos Términos y Condiciones, puede
        contactarnos a través de:
      </p>
      <ul>
        <li>
          Correo electrónico:{" "}
          <a href="mailto:soporte@cobanacademy.com">
            soporte@cobanacademy.com
          </a>
        </li>
        <li>
          Términos legales:{" "}
          <a href="mailto:legal@cobanacademy.com">legal@cobanacademy.com</a>
        </li>
      </ul>

      <p style={{ marginTop: "2rem", fontWeight: "bold" }}>
        Última actualización: {new Date().toLocaleDateString("es-ES", { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}
      </p>
    </main>
    <Footer />
    </>
  );
};

// Estilos en línea
const styles = {
  main: {
    lineHeight: 1.6,
    padding: "auto",
    background: "#fff",
    margin: "auto",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
};

export default TermsAndConditions;

