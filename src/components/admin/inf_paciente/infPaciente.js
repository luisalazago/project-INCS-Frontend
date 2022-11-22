import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


export function InformacionPacientes () {
  const {id} = useParams();
  const url_get = "https://us-central1-atencion-conjunta-365122.cloudfunctions.net/get_all_users"
  const [userP, setUserP] = useState("");
  useEffect(() => {
      const traerInf = async () => {
      const response = await axios.get(url_get);
      const data = (response.data.users)
      for(var i = 0; i < data.length; i++){
        if(data[i].id === id){
          setUserP(data[i]);
          break;
        }
      }
    }
    traerInf()
  }, [])
  console.log("Hola", id)
        return (
            <div className="inf_pacientes">
                <p>{userP.name}</p>
                <p>{userP.lastname}</p>
                <p>{userP.email}</p>
            </div>
        );
};
