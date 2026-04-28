import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Curso1Temario from '../../components/sections/Curso1Temario';
import Curso1Form from '../../components/sections/Curso1Form';

export const metadata = {
  title: 'Curso Intensivo Virtual por Zoom | CobanAcademy',
  description: 'Aprende a ahorrar en intereses, recuperar seguros cobrados de más y liquidar tu crédito sin sorpresas. Basado en normativa boliviana vigente.',
};

export default function Curso1Page() {
  return (
    <div className="min-h-screen bg-[#292150]">
      <Header />
      <main>
        <Curso1Temario />
        <Curso1Form />
      </main>
      <Footer />
    </div>
  );
}
