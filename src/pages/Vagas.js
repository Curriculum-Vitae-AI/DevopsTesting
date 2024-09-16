import "../styles/pages/Vagas.css";

function Vagas(){
    return(
        <div className="Vagas">
            <div>
                <div>
                    <h1>Cargo desejado</h1>
                    <input placeholder="Informe o nome do cargo desejado para realizar a busca"/>
                </div>
                <div>
                    <h1>Localidade</h1>
                    <input placeholder="Informe o local da vaga, ou digite 'remoto' para buscar vagas em todo o país"/>
                </div>
                <div>
                    <h1>Senioridade da vaga</h1>
                    <input placeholder="Júnior, Pleno, Sênior e  etc..."/>
                </div>
                <div>
                    <h1>Informações adicionais</h1>
                    <textarea placeholder="Informações adicionais tais como foco em Lavarel, Spring Boot, PySpark  e etc..."></textarea>
                </div>
                
            </div>
            <div className="botoes">
                <button className="btnVoltar">VOLTAR</button>
                <button className="btnDownload">BUSCAR</button>
            </div>
        </div>
    );
}

export default Vagas;