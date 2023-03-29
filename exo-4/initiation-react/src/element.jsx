const element = <Clients clients={["Batman", "Spiderman", "IronMan"]} />;
const Clients = ({clients}) => {
    return <ul>
      {clients.map((client, i) => {
        return <li key={i}>{client}</li>
      })}
    </ul>
  }