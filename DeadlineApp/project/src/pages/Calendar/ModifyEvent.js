import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
export const ModifyEvent = (props) => {
  return (
    <div className="overlay">
      <form className="input-form ">
        <h4>modifier un échéance</h4>
        <FontAwesomeIcon
          onClick={() => props.hide(null)}
          style={{
            fontSize: "30px",
            color: "grey",
            cursor: "pointer",
            marginLeft: "auto",
            display: "flex",
            marginTop: "-30px",
            marginBottom: "20px",
          }}
          icon={faTimes}
          className="custom-icon"
        />
        <input
          value={"hem"}
          type="text"
          className="form-control"
          placeholder="titre"
        />
        <br />
        <input type="text" className="form-control" placeholder="objet" />
        <br />
        <input type="text" className="form-control" placeholder="fréquence" />
        <br />
        <input type="text" className="form-control" placeholder="client" />
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Personne Concerné"
        />
        <br />
        <label>
          <span>
            commencé
            <input className="form-control" type="date" />
          </span>
          <span>
            Terminé
            <input className="form-control" type="date" />
          </span>

          <button className="btn btn-primary">modifier</button>
          <button onClick={() => props.hide(null)} className="btn btn-danger">
            Supprimer
          </button>
        </label>
      </form>
    </div>
  );
};
