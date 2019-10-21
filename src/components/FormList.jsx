import React, { useState } from 'react';
import AutoSuggest from './AutoSuggest';
import axios from 'axios';

const FormList = () => {
  const items = ['Tehran', 'Shiraz', 'Ahvaz', 'Rasht', 'Kerman', 'Esfehan'];

  const [data, setData] = useState({
    name: '',
    family: '',
    city: ''
  });

  const onChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    const { name, family, city } = data;

    e.preventDefault();

    if (name && family && city) {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      const body = {
        name,
        family,
        city
      };

      // sample Api
      //   axios.post('https://sample.com/auth', body, config);

      console.log(body);
    } else {
      // setAlert
    }
  };

  const _onSelect = value => {
    setData({ ...data, city: value });
  };

  const { name, family, city } = data;
  return (
    <form
      className='form'
      className='card bg-light'
      style={{ width: '50%', margin: '50px auto' }}
      onSubmit={onSubmit}
    >
      <input
        type='text'
        value={name}
        name='name'
        placeholder='Name ...'
        onChange={onChange}
      />

      <input
        type='text'
        value={family}
        name='family'
        placeholder='Family ...'
        onChange={onChange}
      />

      <AutoSuggest items={items} onSelect={_onSelect} value={city} />

      <input type='submit' className='btn btn-block btn-dark' />
    </form>
  );
};

export default FormList;
