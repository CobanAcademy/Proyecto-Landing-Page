import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Curso2Temario from '../../components/sections/Curso2Temario';
import Curso2Form from '../../components/sections/Curso2Form';

export const metadata = {
  title: 'Todo lo que necesitás saber antes de pedir un crédito | CobanAcademy',
  description: 'Curso intensivo virtual con Herman Mercado. Aprendé a elegir el banco correcto, calcular tu capacidad y asegurar la aprobación de tu crédito.',
};

export default function Curso2Page() {
  return (
    <div className="min-h-screen bg-[#292150]">
      <Header />
      <main>
        <Curso2Temario />
        <Curso2Form />
      </main>
      <Footer />
    </div>
  );
}
