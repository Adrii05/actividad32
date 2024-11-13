import Titulo from "@/components/titulo";
import Nav from "@/components/nav";


export const metadata = {
  title: "1.2.3.- Condiciones para convalidar Inglés"
};

export default function Home() {
  return (
    <>
      <Titulo>  { metadata.title } </Titulo>
      <Nav pos={8} />

      <div className="flex flex-col gap-4">
        <p>La documentación a aportar varía en función del módulo Inglés que se desee convalidar. Siempre deben ser estudios cursados y superados de lengua inglesa.</p>

        <table className="w-[100%] lg:w-[80%] self-center border-separate">
          <thead>
            <tr>
              <th className="border-2 border-blue-200 p-1 bg-blue-200">Módulo a convalidar</th>
              <th className="border-2 border-blue-200 p-1 bg-blue-200">Formación a aportar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan="11" className="border-2 border-blue-200 p-1 text-center bg-blue-200"><b>0156 Inglés</b></td>
            </tr>
            <tr>
              <td className="border-2 border-blue-200 p-1 hover:bg-blue-200">Lengua Extranjera LOGSE (duración de 65 horas, según el Real Decreto que<br/> establece el título de formación profesional y sus enseñanzas mínimas)<br/>Cuando la lengua extranjera cursada y superada sea inglés.</td>
            </tr>
            <tr>
              <td className="border-2 border-blue-200 p-1 hover:bg-blue-200">Lengua Extranjera LOGSE o de la C.A.<br/>Cuando la lengua extranjera cursada y superada sea inglés</td>
            </tr>
            <tr>
              <td className="border-2 border-blue-200 p-1 hover:bg-blue-200">Módulos Profesionales de Lengua<br/>Extranjera LOGSE de ciclos formativos de Grado Superior, en cualquiera de sus<br/> denominaciones, siempre que sea la misma que la que se desea convalidar.</td>
            </tr>
            <tr>
              <td className="border-2 border-blue-200 p-1 hover:bg-blue-200">Certificado del Ciclo Elemental, de Inglés, de la Escuela Oficial de Idiomas.<br/>(RD 967/1988, de 2 de septiembre).</td>
            </tr>
            <tr>
              <td className="border-2 border-blue-200 p-1 hover:bg-blue-200">Certificado de Nivel Intermedio (B1), de Inglés, de la Escuela Oficial de Idiomas.<br/>(RD 1629/2006, de 29 de diciembre).</td>
            </tr>
            <tr>
              <td className="border-2 border-blue-200 p-1 hover:bg-blue-200">Certificado de Aptitud de Inglés de la Escuela Oficial de Idiomas.<br/>(RD 967/1988, de 2 de septiembre).</td>
            </tr>
            <tr>
              <td className="border-2 border-blue-200 p-1 hover:bg-blue-200">Certificado de Nivel Avanzado (B2), o superior, de Inglés de la Escuela Oficial de Idiomas.<br/>(RD 1629/2006, de 29 de diciembre).</td>
            </tr>
            <tr>
              <td className="border-2 border-blue-200 p-1 hover:bg-blue-200">Título de Grado, o equivalente, en Filología Inglesa.</td>
            </tr>
            <tr>
              <td className="border-2 border-blue-200 p-1 hover:bg-blue-200">Título de Grado, o equivalente, en Traducción e Interpretación (Inglés).</td>
            </tr>
            <tr>
              <td className="border-2 border-blue-200 p-1 hover:bg-blue-200">0179 Inglés.</td>
            </tr>
            <tr>
              <td rowSpan="8" className="border-2 border-blue-200 p-1 text-center bg-blue-200"><b>0179 Inglés</b></td>
            </tr>
            <tr>
              <td className="border-2 border-blue-200 p-1 hover:bg-blue-200">Lengua Extranjera LOGSE (Inglés).</td>
            </tr>
            <tr>
              <td className="border-2 border-blue-200 p-1 hover:bg-blue-200">Lengua Extranjera (duración de 90 horas, según reales decretos por los que se<br/> establecen los títulos de formación profesional y sus enseñanzas mínimas)<br/>Cuando la lengua extranjera cursada y superada sea inglés</td>
            </tr>
            <tr>
              <td className="border-2 border-blue-200 p-1 hover:bg-blue-200">Lengua Extranjera en Comercio Internacional.<br/>Cuando la lengua extranjera cursada y superada sea inglés.</td>
            </tr>
            <tr>
              <td className="border-2 border-blue-200 p-1 hover:bg-blue-200">Certificado de Aptitud de Inglés de la Escuela Oficial de Idiomas.<br/>(RD 967/1988, de 2 de septiembre).</td>
            </tr>
            <tr>
              <td className="border-2 border-blue-200 p-1 hover:bg-blue-200">Certificado de Nivel Avanzado (B2), o superior, de Inglés de la Escuela Oficial de Idiomas.<br/>(RD 1629/2006, de 29 de diciembre).</td>
            </tr>
            <tr>
              <td className="border-2 border-blue-200 p-1 hover:bg-blue-200">Título de Grado, o equivalente, en Filología Inglesa</td>
            </tr>
            <tr>
              <td className="border-2 border-blue-200 p-1 hover:bg-blue-200">Título de Grado, o equivalente, en Traducción e Interpretación (Inglés).</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex flex-col gap-4 mt-5 bg-yellow-100 p-10 rounded-3xl shadow-lg shadow-slate-300">
        <h1 className="text-3xl">Para saber más</h1>
        <p>Por tanto, no es posible, <span className="font-bold underline bg-yellow-300">EN NINGÚN CASO</span>, convalidar este módulo por haber cursado una asignatura universitaria relativa a este idioma.</p>
      </div>
    </>
  );
}
