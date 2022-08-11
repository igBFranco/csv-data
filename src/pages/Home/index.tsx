import Papa from 'papaparse';
import { useState } from 'react';
import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useContext } from 'react';
import { DataContext } from '../../common/context/DataContext';
import styles from './Home.module.scss';

export default function Home() {
    const {file, setFile} = useContext(DataContext);
    const [fileName, setFileName] = useState('');

    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>
                Lista de Participantes
                </h1>
            </div>
            <div className={styles.inputArea}>
                <h3>
                    Selecione um arquivo para importar
                </h3>
                <label htmlFor="file">Selecione um Arquivo</label>
                <input type="file" name="file" id="file"
                    onChange={(e) => {
                        const files = e.target.files;
                        if (files) {
                            setFileName(files[0].name);
                            Papa.parse(files[0], {
                            header: true,
                            complete: function(results) {
                                setFile(results.data);
                            }
                            }
                            )
                        }
                }}/>
                <span>
                    {fileName}
                </span>
            </div>
            <table cellPadding='0' cellSpacing='0' className={styles.tableContainer}>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Primeiro Ingresso</th>
                        <th>Última Saída</th>
                        <th>Duração da Reunião</th>
                    </tr>
                </thead>
                <tbody>
                    {file ?
                    file.map((parsedData: { Nome: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; primeiroIngresso: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; ultimaSaida: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; duracaoDaReuniao: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }, index: any) => (
                        <tr key={index}>
                            <td>{parsedData.Nome}</td>
                            <td>{parsedData.primeiroIngresso}</td>
                            <td>{parsedData.ultimaSaida}</td>
                            <td>{parsedData.duracaoDaReuniao}</td>
                        </tr>
                    )) :
                        <tr>
                            <td colSpan={4}></td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    );
}