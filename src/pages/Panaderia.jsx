import productos from '../data/productos.json';

const productosPorCategoria = productos.filter(producto => producto.categoria === 'Panadería');

function Panaderia(){
    return(
        <main>
            <div className="cardProducts">
                {productosPorCategoria.map((producto) => (
                    <div key={producto.id} className="card text-bg-dark">
                        <img className="card-img" src={process.env.PUBLIC_URL + "/" + producto.imagen} alt={producto.nombre} />
                        <div className="card-img-overlay">
                            <h5 className="card-title">{producto.nombre}</h5>
                            <p className="card-text">{producto.detalle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default Panaderia;