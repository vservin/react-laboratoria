function formateaFecha(fecha) {
  if (fecha instanceof Date) {
    return fecha.toLocaleTimeString();
  }
  return fecha;
}

function Commentario(props) {
  return (
    <div className="Commentario">
      <div className="InfoUsuario">
        <img className="Avatar"
          src={props.autor.avatarUrl}
          alt={props.autor.nombre}
        />
        <div className="InfoUsuario-nombre">
          {props.autor.nombre}
        </div>
      </div>
      <div className="Commentario-texto">
        {props.texto}
      </div>
      <div className="Commentario-fecha">
        {formateaFecha(props.fecha)}
      </div>
    </div>
  );
}

// Extraer componentes puede parecer un trabajo pesado al principio, pero tener una paleta de componentes reutilizables vale la pena en aplicaciones más grandes.

function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.usuario.avatarUrl}
      alt={props.usuario.nombre}
    />
  );
}

function InfoUsuario(props) {
  return (
    <div className="InfoUsuario">
      <Avatar usuario={props.usuario} />
      <div className="InfoUsuario-nombre">
        {props.usuario.nombre}
      </div>
    </div>
  );
}

function Commentario2(props) {
  return (
    <div className="Commentario">
      <InfoUsuario usuario={props.autor} />
      <div className="Commentario-texto">
        {props.texto}
      </div>
      <div className="Commentario-fecha">
        {formateaFecha(props.fecha)}
      </div>
    </div>
  );
}
