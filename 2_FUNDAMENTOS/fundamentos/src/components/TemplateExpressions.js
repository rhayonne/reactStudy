const TemplateExpressions = () => {
    const name = "Rhayonne";
    const data = {
        age: 31,
        job: "Dev",
    };
    
return(
    <div>
        <h1>Ola {name}, tudo bem? </h1>
        <h1>Voce atua como: {data.job}</h1>
        <p>{4+4}</p>
        <p>{console.log('React')}</p>
    </div>
)

}

export default TemplateExpressions