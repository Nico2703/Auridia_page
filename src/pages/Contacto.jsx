import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contacto() {

    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_b7nusu9', 'template_syzr7j4', e.target, 'BK-oabuPspqfPr8sI')
            .then((result) => {
                setStatus('¡Mensaje enviado con éxito!');
            }, (error) => {
                setStatus('Hubo un error, intenta nuevamente');
            });

        e.target.reset();
    };

    return(
        <main>
            <div className="contacto"> 
                <form onSubmit={handleSubmit}>
                    <p> Encontranos en Molinari, Cosquín. Santiago 94, a metros de la Ruta 38 -
                        Martes a Domingos 8:30 a 12:30 hs y 17:00 a 21:00 hs </p>
                    <p> Para consultas o pedidos comunicate por cualquiera de nuestras redes o completa el formulario </p>
                    <div className="mb-3">
                        <label htmlFor="inputMail" className="form-label"> Dirección e-mail </label>
                        <input type="email" name="email" className="form-control" 
                        id="inputMailM"
                        aria-describedby="emailHelp" required/>
                        <div id="emailHelp" className="form-text"> Auridia no compartirá la información contenida en este formulario </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputTexto" className="form-label"> Mensaje </label>
                        <textarea className="form-control" name="mensaje" id="inputTextoM" 
                        rows="6"  
                        required></textarea>
                    </div>
                    <button type="submit" className="btn">Enviar</button>
                    {status && <p>{status}</p>} 
                </form>

                <iframe className="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.541954715702!2d-64.46523239999999!3d-31.196987300000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d7b5287227b8b%3A0x6276d06b060dc6d7!2sAURIDIA%20Pasteler%C3%ADa%20y%20Cafeter%C3%ADa!5e1!3m2!1ses-419!2sar!4v1736869605315!5m2!1ses-419!2sar" 
                    title="Location" width="500" height="500" loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </main>
        )
}

export default Contacto;