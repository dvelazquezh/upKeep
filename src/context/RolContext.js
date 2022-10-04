import { createContext, useContext, useReducer } from "react";
import { db } from "../database/firebase";
import { AuthContext } from "./AuthContext";
import { rolReducer } from "./rolReducer";



export const RolContext = createContext({});


const rolInitialState = {
    rol: null,
}


export const RolProvider = ({ children }) => {

    const { singIn, status, token, user, error, signInWithGoogleAsync } = useContext(AuthContext)

    const [state, dispatch] = useReducer(rolReducer, rolInitialState)


    const saveNewRol = async (servicios, contratista) => {

        const uid = user.id;

        const newRol = {
            userType: contratista,
            services: servicios,
        }

        const doc = await db.collection('upkep').doc(uid).collection('rol').add({
            ...newRol
        })
        console.log(doc);

    }



    return (
        <RolContext.Provider
            value={{
                ...state,
                saveNewRol
            }}
        >
            {children}
        </RolContext.Provider>
    )

}