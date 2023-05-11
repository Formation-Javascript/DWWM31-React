import { useState } from 'react';
import './App.css';
import data from './data';

function App() {
  const [indexSelected, setIndexSelected] = useState(null);

  const showDetail = function (index) {
    setIndexSelected(index);
  };

  const hideDetail = function (index) {
    if (index === indexSelected) {
      setIndexSelected(null);
    }
  };

  const onClickHandler = function (index) {
    // ! = =
    if (indexSelected !== null) {
      return hideDetail(index);
    } else {
      return showDetail(index);
    }
  };

  return (
    <>
      <header className="w-screen bg-indigo-500 p-5">
        <h1 className="text-3xl text-yellow-400 font-bold text-center">
          Friend Contact
        </h1>
      </header>

      {/* Display all contacts */}
      <main className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center gap-5 px-10 ">
        {data.map(function (contact, index) {
          return (
            <div key={index}>
              <img
                className="w-96 h-96 object-cover rounded-lg shadow-md"
                src={contact.image}
                alt={contact.name}
              />
              <p className="font-mono">{contact.name}</p>

              {indexSelected === index ? (
                <ul>
                  <li className="truncate">
                    Address : {contact.address}
                  </li>
                  <li>Email : {contact.email} </li>
                  <li>Phone : {contact.phone} </li>
                </ul>
              ) : undefined}

              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => onClickHandler(index)}>
                See More
              </button>
            </div>
          );
        })}
      </main>
    </>
  );
}

export default App;
