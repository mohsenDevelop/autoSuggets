import React, { useState, useEffect, Fragment } from 'react';

const AutoSuggest = ({ items, name, onSelect, value }) => {
  const [text, setText] = useState('');
  const [filtered, setFiltered] = useState([]);
  const [clearItems, setClearItems] = useState(false);

  useEffect(() => {
    if (value === '') {
      setText('');
    }
  }, [value]);

  const _onClick = () => {
    setText(filtered && filtered.length ? filtered[0] : '');
    setClearItems(filtered && filtered.length && filtered[0]);
    onSelect(filtered[0]);
  };

  const _onChange = e => {
    setClearItems(false);
    setText(e.target.value);

    //Filter item
    const itemFilter = items.filter(i => {
      const regex = new RegExp(text, 'gi');

      return i.toLowerCase().match(regex);
    });

    setFiltered(itemFilter);
  };

  return (
    <>
      <input
        type='text'
        value={text}
        name={name}
        placeholder='Search City ...'
        onChange={_onChange}
      />

      {!clearItems ? (
        text &&
        text.length && (
          <div>
            <ul>
              {filtered.map((f, index) => (
                <li
                  onClick={_onClick}
                  key={index}
                  style={{
                    backgroundColor: '#DCDCDC',
                    marginBottom: '3px',
                    padding: '5px'
                  }}
                >
                  {f}
                </li>
              ))}
            </ul>
          </div>
        )
      ) : (
        <Fragment></Fragment>
      )}
    </>
  );
};

export default AutoSuggest;
