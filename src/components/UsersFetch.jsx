import { useState, useEffect } from "react";

function UsersFetch() {
  const [utilisateurs, setUtilisateurs] = useState(0);
  useEffect(() => {
    const getData = async (rep) => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await response.json();
      setUtilisateurs(users);
    };
    getData();
  }, []);
  return (
    <>
      {utilisateurs && (
        <div>
          <h1>Le nombre d'utilisateurs (Fetch): {utilisateurs.length}</h1>
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

export default UsersFetch;
