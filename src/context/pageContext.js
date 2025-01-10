import { createContext } from "react";

export const pageContext = createContext();

function Intermediario({children}){
    return (
        <pageContext.Provider>
            {children}
        </pageContext.Provider>
    );
};

export default Intermediario;