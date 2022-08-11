import Papa from 'papaparse';
import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useContext } from 'react';
import { DataContext } from '../../common/context/DataContext';
import styles from './Home.module.scss';

export default function Home() {
    const {file, setFile} = useContext(DataContext);

    return(
        <div>
            <div>
                <h1>
                Lista de Participantes
                </h1>
            </div>
            <div>
                <h3>
                    Selecione um arquivo para importar
                </h3>
                <input type="file" name="" id=""
                    onChange={(e) => {
                        const files = e.target.files;
                        if (files) {
                            Papa.parse(files[0], {
                            header: true,
                            complete: function(results) {
                                setFile(results.data);
                            }
                            }
                            )
                        }
                }}/>
            </div>
            <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Primeiro Ingresso</th>
                    <th>Última Saída</th>
                    <th>Duração da Reunião</th>
                </tr>
            </thead>
            <tbody>
                {file &&
                file.map((parsedData: { Nome: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; primeiroIngresso: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; ultimaSaida: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; duracaoDaReuniao: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }, index: any) => (
                    <tr key={index}>
                        <td>{parsedData.Nome}</td>
                        <td>{parsedData.primeiroIngresso}</td>
                        <td>{parsedData.ultimaSaida}</td>
                        <td>{parsedData.duracaoDaReuniao}</td>
                    </tr>
                ))}
            </tbody>
            </table>
        </div>
    );
}