import React, { useContext } from "react";
import { userContext } from "../../contexts/userContext";

function Profile(){
    const {login} = useContext(userContext);

    return (
        <div>
            {login? 'dados do usuario' : 'Realizar login para mais informacoes'}
        </div>
    )
}

export default Profile;