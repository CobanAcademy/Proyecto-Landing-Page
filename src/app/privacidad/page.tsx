import React from "react";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <main
        style={styles.main}
        className="font-regular text-xs md:text-base w-full mx-auto p-6  md:p-20 bg-white text-gray-900"
      >
      <h1 style={styles.title}>
        <strong>Política de privacidad</strong>
      </h1>
      <p>
        A nombre de <strong>Coban Academy</strong> te damos la bienvenida.{" "}
        <strong>En Coban Academy</strong> (<strong>&ldquo;Coban&rdquo;</strong>,{" "}
        <strong>&ldquo;nosotros&rdquo;</strong>, <strong>&ldquo;nos&rdquo;</strong>
        ), respetamos la privacidad del usuario y queremos que comprenda cómo
        recopilamos, utilizamos y compartimos sus datos...
      </p>
      <ol>
        <li>
          <strong>Datos recopilados</strong>
        </li>
      </ol>
      <p>
        Recopilamos determinados datos del usuario directamente, como
        información que este introduce por sí mismo, datos sobre su consumo de
        contenido...
      </p>
      <p>
        <strong>1.1 Datos proporcionados</strong>
      </p>
      <p>
        Podremos recopilar diferentes datos del usuario o sobre este, en
        función de cómo utilice los Servicios. A continuación, se muestran
        algunos ejemplos para ayudar al usuario a comprender mejor los datos
        que recopilamos.
      </p>
      <p>
        Al crear una cuenta y utilizar los Servicios, incluso a través de una
        plataforma de terceros, recopilamos los datos que el usuario nos
        proporciona directamente, lo que incluye:
      </p>
      <table>
        <tbody>
          <tr>
            <td>
              <p>
                <strong>Categoría de datos personales</strong>
              </p>
            </td>
            <td>
              <p>
                <strong>Descripción</strong>
              </p>
            </td>
            <td>
              <p>
                <strong>Bases legales del procesamiento de los datos</strong>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <strong>Datos de la cuenta</strong>
              </p>
            </td>
            <td>
              <p>
                Para utilizar determinadas funciones (como acceder al
                contenido), es necesario crear una cuenta de usuario, para lo
                que debemos recopilar y almacenar la dirección de correo
                electrónico, la contraseña y la configuración de la cuenta del
                usuario. Al utilizar ciertas funciones del sitio, es posible
                que al usuario se le solicite que envíe información adicional,
                como su profesión, la información de la identificación emitida
                por el Gobierno, una foto de verificación, su fecha de
                nacimiento, las habilidades que le interesan y su número de
                teléfono. Al crear la cuenta, le asignaremos un número de
                identificación único.
              </p>
            </td>
            <td>
              <p>Ejecución del contrato</p>
              <p>
                Intereses legítimos (prestación de servicios, verificación de
                la identidad, seguridad y prevención del fraude, comunicación)
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <strong>Datos del perfil</strong>
              </p>
            </td>
            <td>
              <p>
                El usuario también puede elegir proporcionar información en su
                perfil, como una foto, un título, una biografía, un idioma, un
                enlace a un sitio web, perfiles de redes sociales u otros
                datos. Los Datos del perfil del usuario estarán visibles
                públicamente para otros usuarios.
              </p>
            </td>
            <td>
              <p>Ejecución del contrato</p>
              <p>
                Intereses legítimos (mejora del funcionamiento de la
                plataforma, transmisión de información de la fuente de
                contenidos)
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <strong>Contenido compartido</strong>
              </p>
            </td>
            <td>
              <p>
                Algunas partes de los Servicios permiten al usuario interactuar
                con otros usuarios o compartir contenido públicamente, por
                ejemplo, al cargar cursos y otro contenido educativo, al
                publicar reseñas sobre contenido, al formular o contestar
                preguntas, al enviar mensajes a estudiantes o instructores, o
                al publicar fotografías u otro trabajo que el usuario cargue.
                Dicho contenido compartido podrá ser visible públicamente para
                otros usuarios en función del lugar donde se publique.
              </p>
            </td>
            <td>
              <p>Ejecución del contrato</p>
              <p>
                Intereses legítimos (prestación de servicios, mejora del
                funcionamiento de la plataforma)
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <strong>Datos de aprendizaje</strong>
              </p>
            </td>
            <td>
              <p>
                Cuando el usuario accede a contenido, recopilamos algunos
                datos, como los cursos, las tareas, los laboratorios, los
                espacios de trabajo y los exámenes que ha comenzado y
                completado; los créditos y las compras de contenido y
                suscripciones; las suscripciones; los certificados de
                finalización; los intercambios del usuario con instructores,
                profesores asistentes y otros estudiantes; y los trabajos, las
                respuestas a preguntas y otros elementos enviados para cumplir
                los requisitos de los cursos y del contenido relacionado.
              </p>
            </td>
            <td>
              <p>Ejecución del contrato</p>
              <p>
                Intereses legítimos (prestación de servicios, mejora del
                funcionamiento de la plataforma)
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <strong>Datos de pago de los usuarios</strong>
              </p>
            </td>
            <td>
              <p>
                Si el usuario realiza compras, recopilamos algunos datos sobre
                ellas (como el nombre, la dirección de facturación y el código
                postal del usuario), según sea necesario para procesar el
                pedido. Asimismo, existe la opción de guardar estos datos para
                procesar futuros pedidos. El usuario debe proporcionar algunos
                datos de pago y facturación directamente a nuestros proveedores
                de servicios de pago, como el nombre, la información de la
                tarjeta de crédito, la dirección de facturación y el código
                postal. También podemos recibir información limitada, como el
                hecho de que el usuario tenga una nueva tarjeta y los últimos 4
                dígitos de dicha tarjeta, por parte de los proveedores de
                servicios de pago para facilitar los pagos. Por motivos de
                seguridad, <strong>Coban</strong> no recopila ni almacena datos
                confidenciales del titular de la tarjeta, como todos los
                números de la tarjeta de crédito o los datos de autenticación
                de la tarjeta.
              </p>
            </td>
            <td>
              <p>Ejecución del contrato</p>
              <p>Obligación legal</p>
              <p>
                Intereses legítimos (simplificación del pago, seguridad y
                prevención del fraude, cumplimiento de normativas)
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <strong>
                  Datos sobre las cuentas del usuario en otros servicios
                </strong>
              </p>
            </td>
            <td>
              <p>
                Podremos obtener determinada información a través de las redes
                sociales u otras cuentas en línea del usuario si están
                conectadas a su cuenta de <strong>Coban</strong>. Si el usuario
                inicia sesión en <strong>Coban</strong> a través de Facebook o
                de otra plataforma o servicio de terceros, solicitaremos su
                permiso para acceder a determinada información sobre esa otra
                cuenta. Por ejemplo, en función de la plataforma o del
                servicio, podremos recopilar el nombre, la foto de perfil, el
                número de ID de la cuenta, la dirección de correo electrónico
                de inicio de sesión, la ubicación, la ubicación física de los
                dispositivos de acceso, el sexo, el cumpleaños y la lista de
                amigos o contactos del usuario.
              </p>
              <p>
                Dichas plataformas o servicios ponen la información a nuestra
                disposición a través de sus API. La información que recibimos
                depende de la información que el usuario (a través de su
                configuración de privacidad) o la plataforma o servicio deciden
                proporcionarnos.
              </p>
              <p>
                Si el usuario accede o utiliza nuestros Servicios a través de
                una plataforma o servicio de terceros, o si hace clic en
                cualquier enlace de terceros, la recopilación, el uso y el uso
                compartido de los datos del usuario también estarán sujetos a
                las políticas de privacidad y a otros acuerdos de dichos
                terceros.
              </p>
            </td>
            <td>
              <p>
                Intereses legítimos (verificación de la identidad, mejora de la
                experiencia del usuario)
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <strong>Sorteos, promociones y encuestas</strong>
              </p>
            </td>
            <td>
              <p>
                Podremos invitar al usuario a realizar una encuesta o a
                participar en una promoción (como un concurso, un sorteo o un
                desafío), ya sea a través de los Servicios o de una plataforma
                de terceros. Si participa, recopilaremos y almacenaremos los
                datos que el usuario nos proporcione como parte de su
                participación, como su nombre, dirección de correo electrónico,
                dirección postal, fecha de nacimiento o número de teléfono.
                Dichos datos estarán sujetos a esta Política de privacidad, a
                menos que se indique lo contrario en las normas oficiales de la
                promoción o en otra política de privacidad. Los datos
                recopilados se utilizarán para administrar la promoción o la
                encuesta, por ejemplo, para informar a los ganadores y
                distribuir las recompensas. Para recibir una recompensa, puede
                que el usuario deba permitirnos publicar parte de su
                información públicamente (por ejemplo, en la página de un
                ganador). Cuando utilicemos una plataforma de terceros para
                administrar una encuesta o promoción, se aplicará la política
                de privacidad de dicho tercero.
              </p>
            </td>
            <td>
              <p>&middot; Ejecución del contrato</p>
              <p>
                &middot; Intereses legítimos (administración de promociones,
                entrega de premios, cumplimiento de normativas)
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <strong>Comunicaciones y asistencia</strong>
              </p>
            </td>
            <td>
              <p>
                Si el usuario se pone en contacto con nosotros para solicitar
                asistencia o informar de un problema o inquietud
                (independientemente de si ha creado o no una cuenta),
                recopilaremos y almacenaremos su información de contacto,
                mensajes y otros datos sobre el usuario, como su nombre,
                dirección de correo electrónico, mensajes, ubicación, ID de
                usuario de <strong>&nbsp;Coban</strong> , ID de transacciones
                de reembolsos y cualquier otro dato que nos proporcione o que
                recopilemos a través de medios automatizados (que tratamos a
                continuación). Utilizamos estos datos para responder al usuario
                e investigar su duda o inquietud, de conformidad con esta
                Política de privacidad.
              </p>
            </td>
            <td>
              <p>
                &middot; Intereses legítimos (atención al cliente y asistencia
                técnica)
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        Almacenamos los datos que se han indicado anteriormente y los asociamos
        con la cuenta del usuario.
      </p>
      <p>
        <strong>1.2 Datos recopilados automáticamente</strong>
      </p>
      <p>
        Cuando el usuario accede a los Servicios (por ejemplo, al explorar
        contenido), recopilamos algunos datos a través de medios automatizados,
        lo que incluye:
      </p>
      <p>
        Los datos indicados anteriormente se recopilan mediante el uso de
        archivos de registro del servidor y tecnologías de seguimiento, como se
        detalla en la sección &ldquo;Cookies y herramientas de recopilación de
        datos&rdquo; más abajo. Los almacenamos y los asociamos con la cuenta
        del usuario.
      </p>
      <table>
        <tbody>
          <tr>
            <td>
              <p>
                <strong>Categoría de datos personales</strong>
              </p>
            </td>
            <td>
              <p>
                <strong>Descripción</strong>
              </p>
            </td>
            <td>
              <p>
                <strong>Bases legales del procesamiento de los datos</strong>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <strong>Datos del sistema</strong>
              </p>
            </td>
            <td>
              <p>
                Datos técnicos sobre el equipo o el dispositivo del usuario,
                como la dirección IP, el tipo de dispositivo, el tipo y la
                versión del sistema operativo, el identificador único del
                dispositivo, el navegador, el idioma del navegador, el dominio
                y otros datos del sistema, y los tipos de plataformas.
              </p>
            </td>
            <td>
              <p>Ejecución del contrato</p>
              <p>
                Intereses legítimos (prestación de servicios, atención al
                cliente y asistencia técnica, seguridad y prevención del
                fraude, comunicación, mejora de productos)
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <strong>Datos de uso</strong>
              </p>
            </td>
            <td>
              <p>
                Estadísticas de uso sobre las interacciones del usuario con los
                Servicios, como el contenido al que ha accedido, el tiempo
                empleado en las páginas o el Servicio, las páginas visitadas,
                las funciones utilizadas, las consultas de búsqueda, los datos
                sobre los clics, la fecha y la hora, las referencias y otros
                datos relacionados con el uso de los Servicios.
              </p>
            </td>
            <td>
              <p>
                Intereses legítimos (prestación de servicios, mejora de la
                experiencia del usuario, mejora de productos)
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <strong>Datos geográficos aproximados</strong>
              </p>
            </td>
            <td>
              <p>
                Se trata de una ubicación geográfica aproximada que incluye
                información como el país, la ciudad y las coordenadas
                geográficas, calculada en función de la dirección IP.
              </p>
            </td>
            <td>
              <p>
                Intereses legítimos (mejora de la experiencia del usuario,
                seguridad y prevención del fraude, cumplimiento de normativas)
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <strong>1.3 Datos de terceros</strong>
      </p>
      <p>
        Si el usuario es una empresa existente o potencial de{" "}
        <strong>Coban</strong>, además de la información que nos facilite,
        podremos recopilar determinada información de contacto empresarial de
        fuentes comerciales externas.
      </p>
      <ol>
        <li>
          <strong> Cómo obtenemos los datos </strong>
        </li>
      </ol>
      <p>
        Utilizaremos herramientas, como cookies, señalizaciones web y
        tecnologías de seguimiento similares para recopilar los datos
        mencionados anteriormente. Algunas de estas herramientas ofrecen la
        posibilidad de excluir voluntariamente la recopilación de datos.
      </p>
      <p>
        <strong>
          2.1 Cookies y herramientas de recopilación de datos
        </strong>
      </p>
      <p>
        Utilizamos cookies, que son pequeños archivos de texto que almacena tu
        navegador, para recopilar, almacenar y compartir datos sobre tus
        actividades en distintos sitios web, incluido <strong>Coban</strong>.
        Nos permiten recordar aspectos sobre sus visitas a <strong>Coban</strong>
        , como su idioma preferido, y facilitar el uso del sitio. Para obtener
        más información sobre las cookies, visite&nbsp;
        <a href="https://cookiepedia.co.uk/all-about-cookies">
          https://cookiepedia.co.uk/all-about-cookies
        </a>
        . También podemos usar píxeles transparentes en los correos
        electrónicos para realizar un seguimiento de los porcentajes de entrega
        y apertura.
      </p>
      <p>
        <strong>Coban</strong> y los proveedores de servicios que actúan en
        nuestro nombre (como Google Analytics y anunciantes de terceros)
        utilizan archivos de registro del servidor y herramientas de
        recopilación de datos automatizadas, como cookies, etiquetas, secuencias
        de comandos, enlaces personalizados, huellas digitales del dispositivo o
        navegador y señalizaciones web (en conjunto,&nbsp;
        <strong>
          &ldquo;Herramientas de recopilación de datos&rdquo;
        </strong>
        ) al acceder y utilizar los Servicios. Cuando el usuario utiliza los
        Servicios, de forma automática, estas Herramientas de recopilación de
        datos realizan un seguimiento de determinados Datos del sistema y Datos
        de uso (como se detalla en la sección 1) y los recopilan. En algunos
        casos, relacionamos los datos recopilados a través de esas Herramientas
        de recopilación de datos con otros datos que recopilamos, como se
        describe en esta Política de privacidad.
      </p>
      <p>
        <strong>
          2.2 Por qué utilizamos Herramientas de recopilación de datos
        </strong>
      </p>
      <p>
        <strong>Coban</strong> utiliza los siguientes tipos de Herramientas de
        recopilación de datos para los fines que se describen a continuación:
      </p>
      <ul>
        <li>
          <strong>
            <u>Estrictamente necesarias:</u>
          </strong>
          &nbsp;Estas Herramientas de recopilación de datos permiten al usuario
          acceder al sitio, proporcionan el funcionamiento básico (como iniciar
          sesión o acceder a contenido), protegen el sitio, protegen frente a
          inicios de sesión fraudulentos y detectan y evitan el uso indebido o
          no autorizado de la cuenta del usuario. Son necesarias para que los
          Servicios funcionen correctamente, por lo que, si el usuario las
          desactiva, algunas partes del sitio dejarán de funcionar o no estarán
          disponibles.
        </li>
        <li>
          <strong>
            <u>Funcionales:</u>
          </strong>
          &nbsp;Estas Herramientas de recopilación de datos recuerdan
          información sobre el navegador y las preferencias del usuario,
          proporcionan funciones adicionales del sitio, personalizan el
          contenido para que sea más relevante para el usuario y recuerdan las
          configuraciones relacionadas con la apariencia y el comportamiento de
          los Servicios (como el idioma o el nivel del volumen de la
          reproducción de vídeo preferidos).
        </li>
        <li>
          <strong>
            <u>Rendimiento:</u>
          </strong>
          &nbsp;Estas Herramientas de recopilación de datos ayudan a medir y
          mejorar los Servicios proporcionando datos de rendimiento y uso,
          recuentos de visitas, fuentes de tráfico o desde dónde se descargó la
          aplicación. Estas herramientas nos ayudan a probar diferentes
          versiones de <strong>Coban</strong> para averiguar qué funciones o
          contenido prefieren los usuarios y determinar qué mensajes de correo
          electrónico se abren.
        </li>
        <li>
          <strong>
            <u>Publicidad:</u>
          </strong>
          &nbsp;Estas Herramientas de recopilación de datos se utilizan para
          proporcionar anuncios relevantes (en este sitio y en otros) basados
          en nuestros conocimientos sobre el usuario, como sus Datos de uso y
          sus Datos del sistema (como se detalla en la Sección 1), y en los
          conocimientos que estos proveedores de servicios de publicidad tienen
          sobre el usuario según sus datos de seguimiento. Los anuncios se
          pueden basar en su actividad reciente o en la actividad con el paso
          del tiempo, y en otros sitios y servicios. Para ayudar a ofrecer
          publicidad personalizada, podemos proporcionar a estos proveedores de
          servicios una versión oculta y anónima de la dirección de correo
          electrónico del usuario (en un formato ilegible para el ser humano) y
          del contenido que comparte públicamente en los Servicios.
        </li>
        <li>
          <strong>
            <u>Redes sociales:</u>
          </strong>
          &nbsp;Estas Herramientas de recopilación de datos permiten el
          funcionamiento de las redes sociales, como compartir contenido con
          amigos y redes. Estas cookies pueden realizar un seguimiento de un
          usuario o dispositivo en otros sitios y crear un perfil de los
          intereses del usuario con fines de publicidad dirigida.
        </li>
      </ul>
      <p>
        El usuario puede establecer el navegador web para que le avise de los
        intentos de colocar cookies en el equipo, para limitar los tipos de
        cookies que permite o para rechazar las cookies en general. Si lo hace,
        es posible que el usuario no pueda utilizar algunas o todas las
        funciones de los Servicios, y su experiencia puede ser diferente o
        menos funcional. Para obtener más información acerca de cómo gestionar
        las Herramientas de recopilación de datos, consulte la Sección 6.1
        (Opciones del usuario con respecto al uso de sus datos) a continuación.
      </p>
      <ol>
        <li>
          <strong> Para qué utilizamos los datos </strong>
        </li>
      </ol>
      <p>
        Entre otras finalidades, utilizamos los datos del usuario para
        proporcionar nuestros Servicios, comunicarnos con el usuario, solucionar
        problemas, proteger del fraude y del uso indebido, mejorar y actualizar
        nuestros Servicios, analizar el modo en que la gente utiliza nuestros
        Servicios, ofrecer publicidad personalizada y según lo exija la ley o
        sea necesario por motivos de seguridad e integridad. Conservamos los
        datos del usuario durante el tiempo que sea necesario para cumplir con
        los fines para los que fueron recopilados.
      </p>
      <p>
        Utilizamos los datos que recopilamos a través del uso que el usuario
        hace de los Servicios para:
      </p>
      <ul>
        <li>
          Proporcionar y administrar los Servicios, lo que incluye facilitar la
          participación en el contenido educativo y mostrar contenido
          personalizado.
        </li>
        <li>
          Procesar las solicitudes y los pedidos de contenido educativo,
          productos, servicios específicos, información o funciones que realiza
          el usuario (datos de la cuenta, datos de aprendizaje, datos de pago
          del estudiante, datos del sistema y comunicaciones y asistencia).
        </li>
        <li>
          Ponernos en contacto con el usuario en relación con su cuenta (datos
          de la cuenta; contenido compartido; datos de aprendizaje; sorteos,
          promociones y encuestas; datos del sistema, y comunicaciones y
          asistencia).
        </li>
        <ul>
          <li>Responder a las preguntas e inquietudes del usuario.</li>
          <li>
            Enviar al usuario mensajes administrativos e información, como
            mensajes de instructores, estudiantes y profesores asistentes,
            notificaciones de cambios en nuestro Servicio y actualizaciones de
            nuestros acuerdos.
          </li>
          <li>
            Enviar al usuario información, mediante correo electrónico o
            mensajes de texto, sobre su progreso en los cursos y el contenido
            relacionado, programas de recompensas, nuevos servicios, nuevas
            funciones, promociones, boletines y otro contenido creado por el
            instructor disponible (que puede excluir voluntariamente en
            cualquier momento).
          </li>
          <li>
            Enviar al usuario notificaciones push a su dispositivo inalámbrico
            para proporcionar actualizaciones y otros mensajes relevantes (que
            puede gestionar en la página de opciones o configuración de la
            aplicación móvil).
          </li>
        </ul>
        <li>
          Gestionar las cuentas y las preferencias de la cuenta del usuario y
          personalizar su experiencia (datos de la cuenta, datos de aprendizaje,
          datos de pago de los estudiantes, datos de pago de los instructores,
          datos del sistema, datos de uso y datos de las cookies).
        </li>
        <li>
          Facilitar el funcionamiento técnico de los Servicios, lo que incluye
          la solución de problemas, la protección de los Servicios y la
          prevención del fraude y el uso indebido (datos de la cuenta, datos de
          pago de los estudiantes, datos de pago de los instructores,
          comunicaciones y asistencia, datos del sistema y ubicación geográfica
          aproximada).
        </li>
        <li>
          Solicitar opiniones de los usuarios (datos de la cuenta y
          comunicaciones y asistencia).
        </li>
        <li>
          Productos, servicios, encuestas y promociones comerciales (datos de la
          cuenta; datos de aprendizaje; sorteos, promociones y encuestas; datos
          de uso y datos de las cookies).
        </li>
        <li>
          Planes de suscripción comerciales para clientes potenciales (datos de
          la cuenta, datos de aprendizaje y datos de las cookies).
        </li>
        <li>
          Obtener más información sobre el usuario al vincular sus datos con
          datos adicionales a través de proveedores externos de datos o al
          analizar los datos con la ayuda de proveedores de servicios de
          análisis (datos de la cuenta, datos sobre las cuentas del usuario en
          otros servicios, datos de uso y datos de las cookies).
        </li>
        <li>
          Identificar a usuarios únicos en los distintos dispositivos (datos de
          la cuenta, datos del sistema y datos de las cookies).
        </li>
        <li>
          Adaptar los anuncios en los distintos dispositivos (datos de las
          cookies).
        </li>
        <li>
          Mejorar nuestros Servicios y desarrollar nuevos productos, servicios y
          funciones (todas las categorías de datos).
        </li>
        <li>
          Analizar las tendencias y el tráfico, y realizar un seguimiento de las
          compras y de los datos de uso (datos de la cuenta, datos de
          aprendizaje, datos de pago de los estudiantes, comunicaciones y
          asistencia, datos del sistema, datos de uso, datos geográficos
          aproximados, y datos de las cookies).
        </li>
        <li>
          Anunciar los Servicios en sitios web y aplicaciones de terceros (datos
          de la cuenta y datos de las cookies).
        </li>
        <li>
          Según lo exija o lo permita la ley (todas las categorías de datos).
        </li>
        <li>
          Si, a nuestra absoluta discreción, lo consideramos necesario para
          garantizar la seguridad o la integridad de nuestros Servicios,
          usuarios o empleados, o de terceros o el público (todas las
          categorías de datos).
        </li>
      </ul>
      <ol>
        <li>
          <strong> Con quién compartimos los datos </strong>
        </li>
      </ol>
      <p>
        Compartimos algunos datos sobre el usuario con{" "}
        <u>
          empresas que nos prestan servicios, nuestros socios comerciales,
          proveedores de análisis y enriquecimiento de datos, proveedores de
          redes sociales del usuario, empresas que nos ayudan a realizar
          promociones y encuestas
        </u>
        ,{" "}
        <u>
          y empresas de publicidad que nos ayudan a promocionar nuestros
          servicios
        </u>
        ,{" "}
        <u>
          para la seguridad y el cumplimiento legal, durante un cambio en el
          control, tras una agregación/despersonalización y con el permiso del
          usuario:
        </u>{" "}
        También podemos compartir los datos del usuario según sea necesario para
        la seguridad, el cumplimiento legal o como parte de una
        reestructuración corporativa. Por último, podemos compartir datos de
        otras maneras si se agregan o se despersonalizan, o si obtenemos el
        consentimiento del usuario.
      </p>
      <p>
        A continuación, describimos con quién y para qué podemos compartir los
        datos del usuario:
      </p>
      <ul>
        <li>
          <strong>
            <u>Con proveedores de servicios, contratistas y agentes:</u>
          </strong>
          &nbsp;Compartimos los datos del usuario con empresas externas que
          prestan servicios en nuestro nombre, como procesamiento de pagos,
          prevención del fraude y el uso indebido, análisis de datos, servicios
          de marketing y publicidad (incluida publicidad redirigida), servicios
          de correo electrónico y hosting, y atención al cliente y asistencia.
          Estos proveedores de servicios pueden acceder a los datos personales
          del usuario y se les exige que los utilicen únicamente como se lo
          indicamos para proporcionar nuestro servicio solicitado. (Todas las
          categorías de datos).
        </li>
        <li>
          <strong>
            <u>Con socios comerciales</u>
          </strong>
          <u>:</u>&nbsp;Tenemos acuerdos con otros sitios web y plataformas
          para distribuir nuestros Servicios y dirigir el tráfico a{" "}
          <strong>Coban</strong>. En función de la ubicación del usuario,
          podremos compartir sus datos con estos socios de confianza. (Datos de
          la cuenta, datos de aprendizaje, comunicaciones y asistencia, y datos
          del sistema).
        </li>
        <li>
          <strong>
            <u>Con servicios de análisis y enriquecimiento de datos</u>
          </strong>
          <u>:</u>&nbsp;Como parte de nuestro uso de herramientas de análisis
          de terceros, como Google Analytics, y de servicios de enriquecimiento
          de datos, como ZoomInfo, compartimos determinada información de
          contacto o datos despersonalizados. Los datos despersonalizados son
          aquellos en los que hemos eliminado información, como el nombre y la
          dirección de correo electrónico del usuario, y la hemos sustituido
          por un ID en forma de token. Esto permite a los proveedores
          proporcionar servicios de análisis o relacionar los datos del usuario
          con información de bases de datos públicas (incluida la información
          de contacto y de redes sociales procedente de otras fuentes). Gracias
          a ello, podemos comunicarnos con el usuario de una forma más eficaz y
          personalizada. (Datos de la cuenta, datos del sistema, datos de uso y
          datos de las cookies).
        </li>
        <li>
          <strong>
            <u>Para impulsar funciones de redes sociales</u>
          </strong>
          <u>:</u>&nbsp;Las funciones de redes sociales en los Servicios (como
          el botón Me gusta de Facebook) podrán permitir al proveedor externo
          de redes sociales recopilar información, como la dirección IP del
          usuario y la página de los Servicios que está visitando, y establecer
          una cookie para activar la función. Las interacciones del usuario con
          estas funciones se regirán por la política de privacidad de la
          empresa externa. (Datos del sistema, datos de uso y datos de las
          cookies).
        </li>
        <li>
          <strong>
            <u>Para administrar promociones y encuestas:</u>
          </strong>
          &nbsp;Podremos compartir los datos del usuario según sea necesario
          para administrar, comercializar o patrocinar las promociones y las
          encuestas en las que decida participar, según lo exija la ley
          aplicable (como proporcionar una lista de ganadores o realizar los
          trámites necesarios) o de conformidad con las reglas de la promoción
          o encuesta. (Datos de la cuenta; sorteos, promociones y encuestas).
        </li>
        <li>
          <strong>
            <u>Para hacer publicidad</u>
          </strong>
          <u>:</u>&nbsp;Si en el futuro decidimos emplear un modelo de ingresos
          por publicidad, podremos utilizar y compartir determinados datos del
          sistema y datos de uso con anunciantes y redes de terceros para
          mostrar información general demográfica y sobre preferencias. También
          podremos permitir a los anunciantes recopilar Datos del sistema a
          través de Herramientas de recopilación de datos (como se detalla en
          la sección 2.1), utilizar estos datos para ofrecer al usuario
          anuncios específicos a fin de personalizar su experiencia (a través
          de publicidad comportamental) y realizar análisis web. Los
          anunciantes también podrán compartir con nosotros los datos que
          recopilen sobre el usuario. Para obtener más información o no
          participar en la publicidad comportamental de las redes de
          publicidad, véase la sección 6.1 (Opciones del usuario con respecto
          al uso de sus datos) más abajo. El usuario debe tener en cuenta que,
          si decide no participar, seguirá recibiendo anuncios genéricos.
          (Datos del sistema).
        </li>
        <li>
          <strong>
            <u>Para la seguridad y el cumplimiento legal:</u>
          </strong>
          &nbsp;Podremos divulgar datos del usuario (todas las categorías de
          datos) a terceros si, a nuestra absoluta discreción, consideramos de
          buena fe que la divulgación:
        </li>
        <ul>
          <li>
            Se solicita como parte de una investigación, orden o proceso
            judicial, gubernamental o legal.
          </li>
          <li>
            Es razonablemente necesaria como parte de una citación, orden
            judicial u otro requerimiento legalmente válido.
          </li>
          <li>
            Es razonablemente necesaria para hacer cumplir nuestras Condiciones
            de uso, nuestra Política de privacidad y otros acuerdos legales.
          </li>
          <li>
            Es necesaria para detectar, prevenir o combatir el fraude, el uso
            indebido, las posibles infracciones de la ley (o de normas o
            reglamentos) o los problemas técnicos o de seguridad.
          </li>
          <li>
            Es razonablemente necesaria, a nuestra discreción, para protegernos
            de ataques inminentes contra los derechos, la propiedad o la
            seguridad de <strong>Coban</strong>, nuestros usuarios y empleados,
            miembros del público o nuestros Servicios.
          </li>
          <li>
            También podremos divulgar datos del usuario a nuestros auditores y
            asesores legales para evaluar nuestras obligaciones y nuestros
            derechos de divulgación en virtud de esta Política de privacidad.
          </li>
          <li>Se exige o se permite por ley.</li>
        </ul>
        <li>
          <strong>
            <u>Durante un cambio en el control:</u>
          </strong>
          &nbsp;Si <strong>Coban</strong> participa en una operación comercial,
          como una fusión, una adquisición, una desinversión corporativa o una
          disolución (incluida la quiebra), o una venta de la totalidad o parte
          de sus activos, podremos compartir o divulgar todos los datos del
          usuario con la organización sucesora, o transferírselos, durante
          dicha transición o en consideración de una transición (incluso
          durante el proceso de diligencia debida). (Todas las categorías de
          datos).
        </li>
        <li>
          <strong>
            <u>Tras una agregación/despersonalización</u>
          </strong>
          <u>:</u>&nbsp;Podremos divulgar o utilizar datos agregados o
          despersonalizados para cualquier fin.
        </li>
        <li>
          <strong>
            <u>Con el permiso del usuario</u>
          </strong>
          <strong>
            <u>:</u>
          </strong>
          Con el consentimiento del usuario, podremos compartir datos con
          terceros al margen de lo dispuesto en esta Política de privacidad.
          (Todas las categorías de datos).
        </li>
      </ul>
      <ol>
        <li>
          <strong> Seguridad</strong>
        </li>
      </ol>
      <p>
        Utilizaremos medidas de seguridad adecuadas en función del tipo y la
        confidencialidad de los datos que se almacenen. Al igual que ocurre con
        cualquier sistema con conexión a Internet, siempre existe un riesgo de
        acceso no autorizado, así que es importante proteger la contraseña del
        usuario y que este se ponga en contacto con nosotros si sospecha que se
        ha producido un acceso no autorizado a su cuenta.
      </p>
      <p>
        <strong>Coban</strong> toma medidas de seguridad adecuadas para proteger
        contra el acceso no autorizado, la alteración, la divulgación o la
        destrucción de los datos personales del usuario que recopilamos y
        almacenamos. Estas medidas varían en función del tipo y la
        confidencialidad de los datos. Sin embargo, lamentablemente, ningún
        sistema puede ser totalmente seguro, por lo que no podemos garantizar
        que las comunicaciones entre el usuario y <strong>Coban</strong>, los
        Servicios o cualquier información que se nos proporcione en relación con
        los datos que recopilamos a través de los Servicios estarán libres del
        acceso no autorizado de terceros. La contraseña del usuario es una parte
        importante de nuestro sistema de seguridad, y es responsabilidad del
        usuario protegerla. El usuario no deberá compartir su contraseña con
        terceros y, si cree que su contraseña o su cuenta están en peligro,
        deberá cambiarla inmediatamente y ponerse en contacto con nosotros al
        correo&nbsp;
        <a href="mailto:soporte@cobanacademy.com">
          soporte@cobanacademy.com
        </a>{" "}
        para informar de sus inquietudes.
      </p>
      <ol>
        <li>
          <strong> Derechos del usuario</strong>
        </li>
      </ol>
      <p>
        El usuario tiene algunos derechos con respecto al uso de sus datos,
        incluida la posibilidad de excluir voluntariamente los correos
        electrónicos promocionales, las cookies y la recopilación de sus datos
        por parte de determinados terceros. El usuario puede actualizar o
        cancelar su cuenta desde nuestros Servicios, y también puede ponerse en
        contacto con nosotros para realizar solicitudes de derechos individuales
        sobre sus datos personales. Los padres que crean que hemos recopilado de
        forma involuntaria datos personales sobre sus hijos menores de edad
        deberán ponerse en contacto con nosotros para ayudarnos a eliminar dicha
        información.
      </p>
      <p>
        <strong>6.1 Opciones respecto al uso de sus datos</strong>
      </p>
      <p>
        El usuario puede decidir no proporcionarnos determinados datos, pero no
        podrá utilizar algunas funciones de los Servicios.
      </p>
      <ul>
        <li>
          Para dejar de recibir nuestras comunicaciones promocionales, el
          usuario puede excluirlas voluntariamente mediante el mecanismo para
          cancelar la suscripción que se incluye en la comunicación promocional
          recibida, o bien cambiando las&nbsp;
          <a href="https://www.udemy.com/support/229231147/">
            preferencias de correo electrónico en su cuenta
          </a>
          . El usuario debe tener en cuenta que, independientemente de la
          configuración de las preferencias de correo electrónico, le
          enviaremos mensajes de transacciones y relaciones con respecto a los
          Servicios, como confirmaciones administrativas, confirmaciones de
          pedidos, actualizaciones importantes sobre los Servicios y avisos
          sobre nuestras políticas.
        </li>
        <li>
          Si el usuario se encuentra en el Espacio Económico Europeo, puede
          excluir voluntariamente determinadas Herramientas de recopilación de
          datos haciendo clic en el enlace &ldquo;Configuración de cookies&rdquo;
          de la parte inferior de cualquier página.
        </li>
        <li>
          El navegador o el dispositivo del usuario pueden permitirle controlar
          las cookies y otros tipos de almacenamiento de datos local. Para
          obtener más información sobre la gestión de cookies, visite&nbsp;
          <a href="https://cookiepedia.co.uk/how-to-manage-cookies">
            https://cookiepedia.co.uk/how-to-manage-cookies
          </a>
          . El dispositivo inalámbrico del usuario también puede permitirle
          controlar la recopilación o el uso compartido de la ubicación o de
          otros datos.
        </li>
        <li>
          Para obtener información y controlar las cookies que se utilizan para
          la publicidad personalizada de las empresas participantes, el usuario
          puede consultar las páginas de exclusión del consumidor de la&nbsp;
          <a href="http://www.networkadvertising.org/choices">
            Network Advertising Initiative
          </a>
          &nbsp;y la&nbsp;
          <a href="http://www.aboutads.info/choices/">
            Digital Advertising Alliance
          </a>
          &nbsp;o, si se encuentra en el Espacio Económico Europeo, visitar el
          sitio&nbsp;
          <a href="http://www.youronlinechoices.eu/">Your Online Choices</a>.
          Si el usuario se encuentra en Japón, debe consultar el sitio&nbsp;
          <a href="https://feedback.impact-ad.jp/login">
            Digital Advertising Consortium
          </a>
          . Para excluir la publicidad que se muestra en Google o personalizar
          los anuncios de la Red de Display de Google, el usuario puede visitar
          la&nbsp;
          <a href="https://www.google.com/settings/ads">
            página Configuración de anuncios de Google
          </a>
          . Para excluir los anuncios específicos de Taboola, el usuario puede
          consultar el enlace de exclusión voluntaria en su&nbsp;
          <a href="https://www.taboola.com/cookie-policy">
            Política de cookies
          </a>
          .
        </li>
        <li>
          Para dejar de permitir que Google Analytics, Mixpanel, ZoomInfo o
          Clearbit utilicen sus datos para el análisis o el enriquecimiento, el
          usuario puede consultar el&nbsp;
          <a href="https://tools.google.com/dlpage/gaoptout">
            Complemento de inhabilitación para navegadores de Google Analytics
          </a>
          , la&nbsp;
          <a href="https://mixpanel.com/optout/">
            Exclusión de cookies de Mixpanel
          </a>
          , la&nbsp;
          <a href="https://www.zoominfo.com/business/about-zoominfo/privacy-policy">
            Política de ZoomInfo
          </a>
          &nbsp;y el&nbsp;
          <a href="https://clearbit.com/privacy">
            Mecanismo de reclamación de datos de Clearbit
          </a>
          .
        </li>
        <li>
          Apple iOS, Android OS y Microsoft Windows proporcionan sus propias
          instrucciones sobre cómo controlar la publicidad personalizada en las
          aplicaciones. Para otros dispositivos y sistemas operativos, el
          usuario deberá revisar su configuración de privacidad de la
          plataforma.
        </li>
      </ul>
      <p>
        Si el usuario tiene alguna duda sobre sus datos, sobre el uso que
        hacemos de ellos o sobre sus derechos, puede ponerse en contacto con
        nosotros enviándonos un mensaje al correo&nbsp;
        <a href="mailto:politicadeprivacidad@cobanacademy.com">
          politicadeprivacidad@cobanacademy.com
        </a>
      </p>
      <p>
        <strong>
          6.2 Acceso, actualización y eliminación de datos personales
        </strong>
      </p>
      <p>
        El usuario puede acceder y actualizar sus datos personales que{" "}
        <strong>Coban</strong> recopila y mantiene de la siguiente manera:
      </p>
      <ul>
        <li>
          Para actualizar los datos que el usuario proporciona directamente,
          debe iniciar sesión en su cuenta y actualizarla en cualquier momento.
        </li>
        <li>Para cancelar su cuenta:</li>
        <ul>
          <li>
            El usuario debe visitar su página de configuración del perfil y
            seguir los pasos que allí se indican.
          </li>
          <li>
            Si tiene problemas para cancelar su cuenta, póngase en contacto al
            correo{" "}
            <a href="mailto:soporte@cobanacademy.com">
              soporte@cobanacademy.com
            </a>
          </li>
          <li>
            El usuario debe tener en cuenta que, incluso después de cancelar su
            cuenta, una parte o la totalidad de sus datos pueden seguir siendo
            visibles para otros usuarios, incluidos, entre otros, los datos:
          </li>
        </ul>
      </ul>
      <p>
        (a) que otras personas han copiado, almacenado o difundido (incluso en
        comentarios sobre el contenido);
      </p>
      <p>
        (b) que el usuario u otras personas han compartido o difundido (incluso
        en el contenido compartido del usuario); o
      </p>
      <p>
        (c) que se han publicado en una plataforma de terceros. Incluso después
        de cancelar la cuenta del usuario, conservaremos sus datos mientras
        tengamos un propósito legítimo para hacerlo (y de conformidad con la ley
        aplicable), por ejemplo, para ayudar con obligaciones legales, resolver
        conflictos o hacer cumplir nuestros acuerdos.
      </p>
      <p>
        Podremos conservar y divulgar dichos datos conforme a esta Política de
        privacidad tras la cancelación de la cuenta del usuario.
      </p>
      <ul>
        <li>
          Para solicitar acceder, corregir o eliminar los datos personales del
          usuario, puede enviar un mensaje de correo electrónico a&nbsp;
          <a href="mailto:soporte@cobanacademy.com">soporte@cobanacademy.com</a>
          . La respuesta puede tardar hasta 30 días. Para proteger al usuario,
          podremos pedirle que envíe la solicitud a través de la dirección de
          correo electrónico asociada a su cuenta, y es posible que necesitemos
          verificar su identidad antes de llevar a cabo la solicitud. El
          usuario debe tener en cuenta que conservaremos algunos datos si está
          legalmente justificado, por ejemplo, para el mantenimiento de
          registros obligatorio y para llevar a cabo transacciones.
        </li>
      </ul>
      <p>
        <strong>6.3 Política para menores de edad</strong>
      </p>
      <p>
        Tomando en cuenta la naturaleza de nuestro contenido y de nuestros
        servicios, solo las personas de 18 años en adelante pueden acceder a los
        servicios de Coban.
      </p>
      <ol>
        <li>
          <strong> Información de contacto</strong>
        </li>
      </ol>
      <p>
        Cuando realicemos algún cambio sustancial en esta política, informaremos
        a los usuarios por correo electrónico, mediante un aviso en el producto
        o a través de otro mecanismo exigido por la ley. Los cambios entrarán en
        vigor el día que se publiquen.
      </p>
      <p>
        El usuario puede ponerse en contacto con nosotros al correo{" "}
        <a href="mailto:politicadeprivacidad@cobanacademy.com">
          politicadeprivacidad@cobanacademy.com
        </a>{" "}
        si tiene alguna duda, inquietud o conflicto.
      </p>
      <p>
        <strong>7.1 Modificaciones a la Política</strong>
      </p>
      <p>
        De vez en cuando, podremos actualizar esta Política de privacidad. Si
        realizamos algún cambio sustancial en ella, informaremos al usuario por
        correo electrónico, a través de una notificación publicada en los
        Servicios o según lo exija la ley aplicable. También incluiremos un
        resumen de los principales cambios. A menos que se indique lo contrario,
        las modificaciones entrarán en vigor el día que se publiquen.
      </p>
      <p>
        En la medida en que lo permita la ley aplicable, si el usuario sigue
        utilizando los Servicios tras la fecha de entrada en vigor de algún
        cambio, el acceso y/o el uso por parte del usuario se considerará una
        aceptación de (y una aceptación de cumplir y vincularse a) la Política
        de privacidad revisada. La Política de privacidad revisada reemplaza a
        todas las Políticas de privacidad anteriores.
      </p>
      <p>
        <strong>7.2 Preguntas</strong>
      </p>
      <p>
        Si el usuario tiene alguna duda, inquietud o conflicto con respecto a
        nuestra Política de privacidad, puede ponerse en contacto con nuestro
        equipo de privacidad (incluido nuestro responsable de protección de
        datos) enviando un mensaje a la dirección&nbsp;
        <a href="mailto:politicadeprivacidad@cobanacademy.com">
          politicadeprivacidad@cobanacademy.com
        </a>
        .
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

export default PrivacyPolicy;

