import React, { useState, Fragment } from 'react'


const AutoSuggest = ({ items }) => {

    const [text, setText] = useState("");
    const [filtered, setFiltered] = useState([]);
    const [clearItems, setClearItems] = useState(false);

    const _onClick = () => {
        setText(filtered && filtered.length ? filtered[0] : "");
        setClearItems(filtered && filtered.length && filtered[0]);
    }

    const renderItems = () => {
        return items.map((i, index) => <li onClick={_onClick} key={index} style={{ backgroundColor: "#DCDCDC", marginBottom: "3px", padding: "5px" }}>{i}</li>);
    }

    const onChange = e => {
        setClearItems(false);
        setText(e.target.value);

        //Filter item
        const itemFilter = items.filter(i => {
            const regex = new RegExp(text, 'gi');

            return i.toLowerCase().match(regex);
        });

        setFiltered(itemFilter);


    }



    return (
        <div className="card bg-light" style={{ width: "50%", margin: "50px auto" }}>
            <form className="form" >
                <input
                    type="text"
                    value={text}
                    name="text"
                    placeholder="Search City ..."
                    onChange={onChange}
                />
            </form>

            <div>
                <ul className="list">
                    {!clearItems ? text && text.length ?
                        filtered.map((f, index) => <li onClick={_onClick} key={index} style={{ backgroundColor: "#DCDCDC", marginBottom: "3px", padding: "5px" }}>{f}</li>)
                        : renderItems() : ""}
                </ul>
            </div>
        </div>
    )

}





export default AutoSuggest;
