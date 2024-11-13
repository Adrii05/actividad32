import Titulo from "@/components/titulo";
import Nav from "@/components/nav";


export const metadata = {
  title: "1.2.4.- Condiciones para convalidar Segunda Lengua Extranjera"
};

export default function Home() {
  return (
    <>
      <Titulo>  { metadata.title } </Titulo>
      <Nav pos={9} />

      <div className="flex flex-col gap-4">
        <p>Para poder convalidar el módulo de Segunda Lengua Extranjera debe aportarse siempre estudios cursados y superados en la misma lengua que se desee convalidar. Es necesario acreditar alguna de las siguientes condiciones:</p>

        <table className="w-[100%] lg:w-[80%] self-center border-separate">
          <thead>
            <tr>
              <th className="border-2 border-blue-200 p-1 bg-blue-200">Módulo a convalidar</th>
              <th className="border-2 border-blue-200 p-1 bg-blue-200">Formación a aportar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan="5" className="border-2 border-blue-200 p-1 text-center bg-blue-200"><b>2ª Lengua Extranjera LOGSE</b></td>
            </tr>
            <tr>
              <td className="border-2 border-blue-200 p-1 hover:bg-blue-200">	MP Segunda Lengua Extranjera LOGSE, siempre que sea la misma que la que se<br/>desea convalidar.</td>
            </tr>
            <tr>
              <td className="border-2 border-blue-200 p-1 hover:bg-blue-200">Certificado de Nivel Intermedio (B1), equivalente o superior, de la Escuela Oficial de<br/>Idiomas (RD 1629/2006, de 29 de diciembre) siempre que sea de la misma lengua<br/>extranjera que la que se desea convalidar.</td>
            </tr>
            <tr>
              <td className="border-2 border-blue-200 p-1 hover:bg-blue-200">Título de Grado en Filología o equivalente, de la misma especialidad que la lengua<br/>extranjera que se desea convalidar.</td>
            </tr>
            <tr>
              <td className="border-2 border-blue-200 p-1 hover:bg-blue-200">Título de Grado Traducción e Interpretación, o equivalente, de la misma especialidad<br/>que la lengua extranjera que se desea convalidar.</td>
            </tr>
            <tr>
              <td rowSpan="5" className="border-2 border-blue-200 p-1 text-center bg-blue-200"><b>0180 2ª Lengua Extranjera.</b></td>
            </tr>
            <tr>
              <td className="border-2 border-blue-200 p-1 hover:bg-blue-200">Segunda Lengua Extranjera LOGSE.<br/>Cuando la lengua extranjera cursada y superada sea la misma que se desea<br/>convalidar.</td>
            </tr>
            <tr>
              <td className="border-2 border-blue-200 p-1 hover:bg-blue-200">Certificado del Ciclo Elemental o de Aptitud, de la Escuela Oficial de Idiomas.<br/>(RD 967/1988, de 2 de septiembre).<br/>(De la misma lengua extranjera que se desea convalidar).</td>
            </tr>
            <tr>
              <td className="border-2 border-blue-200 p-1 hover:bg-blue-200">Certificado de Nivel Intermedio (B1), o superior, de la Escuela Oficial de Idiomas.<br/>(RD 1629/2006, de 29 de diciembre).<br/>(De la misma lengua extranjera que se desea convalidar).</td>
            </tr>
            <tr>
              <td className="border-2 border-blue-200 p-1 hover:bg-blue-200">Título de Grado, o equivalente, en Filología o en Traducción e Interpretación.<br/>(De la misma especialidad que la lengua extranjera que se desea convalidar).</td>
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
