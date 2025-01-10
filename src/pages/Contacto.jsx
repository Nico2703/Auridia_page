function Contacto(){

    return(
        <main>
            <form>
                <div className="mb-3">
                    <label htmlFor="inputMail" className="form-label"> Dirección e-mail </label>
                    <input type="email" className="form-control" id="inputMailM" aria-describedby="emailHelp" required/>
                    <div id="emailHelp" className="form-text"> Auridia no compartirá la información contenida en este formulario </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputTexto" className="form-label"> Mensaje </label>
                    <textarea className="form-control" id="inputTextoM" rows="6" required></textarea>
                </div>
                <button type="submit" className="btn"> Enviar </button>
            </form>
            <img className="location" src="/assets/img/Location.jpeg" width="400px" height="500px" alt=""></img>
        </main>
    )
}

export default Contacto;