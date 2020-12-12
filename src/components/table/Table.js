import React, {useState} from 'react';
import {connect} from 'react-redux';
import TableMenu from './TableMenu';
import AddUserForm from './AddUserForm';
import {addData, search} from '../../redux/reducers/tableReducer';
import TableHead from "./TableHead";
import Pagination from "../Pagination";
import UserCard from "./UserCard";

const Table = ({data, addData, search}) => {
  const [formIsOpen, setFormIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  if (!data) {
    return <p>Выберите набор данных</p>;
  }

  const showForm = () => {
    setFormIsOpen(true);
  }

  const hideForm = () => {
    setFormIsOpen(false);
  }

  const handleUserSelect = user => {
    setSelectedUser(user);
    window.location.href = '#tableUserCard';
  }

  const usersTable = data.map((item, index) => {
    return (
      <tr
        // id могут повторяться
        key={`${item.id}:${index}`}
        onClick={() => handleUserSelect(item)}
      >
        <td>{item.id}</td>
        <td>{item.firstName}</td>
        <td>{item.lastName}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
      </tr>
    );
  });

  return (
    <div className='row d-flex flex-column'>
      <TableMenu openForm={showForm} search={search}/>
      <AddUserForm
        addData={addData}
        formIsOpen={formIsOpen}
        hideForm={hideForm}
      />
      <Pagination/>
      <table className='table table-bordered'>
        <TableHead/>
        <tbody>
        {usersTable}
        </tbody>
      </table>
      <Pagination/>
      <div id='tableUserCard'>
        <UserCard user={selectedUser}/>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    data: state.table.visibleData
  };
}

const mapDispatchToProps = {
  addData,
  search
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);