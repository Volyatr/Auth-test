const ContactList = () => {
  const ListUsers = [
    { name: "Михаил", phoneNumber: 89987654321, id: 1 },
    { name: "Костя", phoneNumber: 89987654321, id: 2 },
    { name: "Арман", phoneNumber: 89987654321, id: 3 },
    { name: "Леха", phoneNumber: 89987654321, id: 4 },
    { name: "Максим", phoneNumber: 89987654321, id: 5 },
  ];
  let ListMap = ListUsers.map((ListUsers) => (
    <li key={ListUsers.id}>
      <p>Имя: {ListUsers.name} </p>
      <p>Номер телефона: {ListUsers.phoneNumber}</p>
    </li>
  ));
  return (
    <div>
      <ul>
        <div>{ListMap}</div>
      </ul>
    </div>
  );
};
export default ContactList;
