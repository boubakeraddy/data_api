import { useState, useEffect } from "react";
import axios from "axios";

function UsersAxios() {
  const [utilisateurs, setUtilisateurs] = useState();
  useEffect(() => {
    const getData = async () => {
      const users = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUtilisateurs(users.data);
    };
    getData();
  }, []);
  return (
    <>
      {utilisateurs && (
        <div>
          <h1>Le nombre d'utilisateurs (Axios): {utilisateurs.length}</h1>
          {utilisateurs.map((user) => {
            return (
              <div className="child" key={user.id}>
                <h3>
                  nom:
                  {user.name} {user.username}
                </h3>
                <p>email:{user.email}</p>
                <p>
                  {" "}
                  ville:{user.address.city}
                  rue:{user.address.street}{" "}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default UsersAxios;
