function Home(){
    return(
        <main>
            <div className="displayHome">
                <div className="cardHome1 mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={`${process.env.PUBLIC_URL}/assets/img/Confitería.jpeg`} className="img-fluid rounded-start" alt=""/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Panadería</h5>
                                <p className="card-text">Productos fresos y elaborados en el momento
                                    <br></br>Panes y scones de elaboración propia
                                    <br></br>Acompañalos con nuestra variedad de Jugos y Licuados
                                </p>
                                <p className="card-text"><small class="text-body-secondary">Para llevar o consumir en nuestro local</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cardHome2 mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={`${process.env.PUBLIC_URL}/assets/img/Pastelería.jpeg`} className="img-fluid rounded-start" alt=""/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Pastelería y confitería</h5>
                                <p className="card-text">Productos fresos y elaborados en el momento
                                <br></br>Variedad en Tortas, Tartas, Brownies y Alfajores
                                <br></br>Acompañalos con nuestros Blends de Tés o Cafés Expressos
                                <br></br>Combos Desayunos y Meriendas
                                </p>
                                <p className="card-text"><small class="text-body-secondary">Para llevar o consumir en nuestro local</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cardHome3 mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={`${process.env.PUBLIC_URL}/assets/img/PasteleríaPers.jpg`} className="img-fluid rounded-start" alt=""/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Pastelería personalizada</h5>
                                <p className="card-text">Tortas personalizadas / Casamientos - Cumpleaños - Eventos </p>
                                <p className="card-text"><small class="text-body-secondary">Más en <br></br> 
                                    <a href="https://www.instagram.com/alexanderiacobpasteleria/">https://www.instagram.com/alexanderiacobpasteleria/</a>
                                    <br></br>Hace tu pedido por WhatsApp o buscanos en nuestras redes
                                    </small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home;