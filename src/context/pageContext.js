import { createContext } from "react";

export const pageContext = createContext();

function Intermediario({children}){
    const pageData = { key: 'value' };
    return (
        <pageContext.Provider value={pageData}>
            {children}
        </pageContext.Provider>
    );
};

export default Intermediario;