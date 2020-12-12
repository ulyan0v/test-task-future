import React, {useEffect, useState} from 'react';

const UserCard = ({user}) => {
  const [description, setDescription] = useState('');

  useEffect(() => {
    setDescription(user?.description)
  }, [user]);

  const handleChange = event => {
    setDescription(event.target.value);
  }

  if (!user) return null;

  return (
    <div className="card">
      <div className="card-body d-flex flex-column">
        <span>Выбран пользователь <b>{`${user.firstName} ${user.lastName}`}</b></span>
        Описание:
        <textarea value={description} onChange={handleChange}/>
        <span>Адрес проживания: <b>{user.address?.streetAddress}</b></span>
        <span>Город: <b>{user.address?.city}</b></span>
        <span>Провинция/штат: <b>{user.address?.state}</b></span>
        <span>Индекс: <b>{user.address?.zip}</b></span>
      </div>
    </div>
  );
}

export default UserCard;