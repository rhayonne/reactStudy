const Events = () => {
    const handleMyEvent = (e) => {
       console.log(e); 
    }


    const renderSomething =(x) => {
        if (x) {
            return <h1>A funçao é verdadeira</h1>
        }else {
            return <h1>A Função é falsa ou não foi reconhecida</h1>
        }
    };
    return (
        <div>
            <div>
                <button onClick={handleMyEvent}> Clique aqui!</button> {/* Se os parenteses for colocado no evento, ele vai ser executado 
                quando a pagina carregar ex: onClick={handleMyEvent()} */}
                <div>
                    <button onClick={() => console.log('Nova Função: clicou!')} >Clique Aqui Também</button>
                    <button onClick={() => {
                        if (true) {
                            console.log('Isso não deveria existir');
                        }
                    }}>Clique Aqui por Favor</button>
                </div>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    );
};


export default Events