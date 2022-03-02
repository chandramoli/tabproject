import React, { useEffect, useState } from "react";

const MainComp = () => {
  const [tab1, setTab1] = useState(true);
  const [tab2, setTab2] = useState(false);
  const [tab3, setTab3] = useState(false);


  const Tabs = () => {
    
  const [inputvalueTab1, setInputValueTab1] = useState([
    { name: "", age: "", location: "" },
  ]);
  const [inputvalueTab2, setInputValueTab2] = useState([
    { name: "", age: "", location: "" },
  ]);
  const [inputvalueTab3, setInputValueTab3] = useState([
    { name: "", age: "", location: "" },
  ]);

  
    const inputValues = [{ name: "", age: "", location: "" }];

    const [inputTab1, setInputTab1] = useState(inputValues);
    const [inputTab2, setInputTab2] = useState(inputValues);
    const [inputTab3, setInputTab3] = useState(inputValues);

    
  

    const inputHandlerTab1 = (e, i) => {
      const { name, value } = e;
      const newvalues = [...inputvalueTab1];
      newvalues[i][name] = value;
      setInputValueTab1(newvalues);
    };
    const inputHandlerTab2 = (e, i) => {
      const { name, value } = e;
      const newvalues = [...inputvalueTab2];
      newvalues[i][name] = value;
      setInputValueTab2(newvalues);
    };
    const inputHandlerTab3 = (e, i) => {
      const { name, value } = e;
      const newvalues = [...inputvalueTab3];
      newvalues[i][name] = value;
      setInputValueTab3(newvalues);
    };

    const removeElementTab1 = (val, i) => {
      let newinputTab = [...inputTab1];
      newinputTab.splice(i, 1);
      setInputTab1(newinputTab);
    };
    const removeElementTab2 = (val, i) => {
      let newinputTab = [...inputTab2];
      newinputTab.splice(i, 1);
      setInputTab2(newinputTab);
    };
    const removeElementTab3 = (val, i) => {
      let newinputTab = [...inputTab3];
      newinputTab.splice(i, 1);
      setInputTab3(newinputTab);
    };

    return (
      <>
        {tab1 ? (
          <div style={{alignItems:'left'}}>
            <h1>tab 1</h1>
            <button
              onClick={() => {
                console.log("TAB 1", inputvalueTab1);
              }}
            >
              submit
            </button>
            <div>
              <button
                onClick={() => {
                  setInputTab1([...inputTab1, inputValues]);

                  setInputValueTab1([
                    ...inputvalueTab1,
                    { name: "", age: "", location: "" },
                  ]);
                }}
              >
                add new
              </button>
            </div>
            <table>
              <tbody>
                <tr>
                  <td>name</td>
                  <td>age</td>
                  <td>location</td>
                  <td>action</td>
                </tr>
                {inputTab1.map((elem, i) => {
                  return (
                    <tr key={i}>
                      <td>
                        <input
                          name="name"
                          onChange={(e) => {
                            inputHandlerTab1(e.target, i);
                          }}
                          value={inputvalueTab1.name}
                          placeholder="name"
                          type="text"
                        />
                      </td>
                      <td>
                        <input
                          name="age"
                          onChange={(e) => {
                            inputHandlerTab1(e.target, i);
                          }}
                          value={inputvalueTab1.age}
                          placeholder="age"
                          type="number"
                        />
                      </td>
                      <td>
                        <input
                          name="location"
                          onChange={(e) => {
                            inputHandlerTab1(e.target, i);
                          }}
                          value={inputvalueTab1.location}
                          placeholder="location"
                          type="text"
                        />
                      </td>
                      <td>
                        <button
                          onClick={(e) => {
                            removeElementTab1(e, i);
                          }}
                        >
                          delete
                        </button>
                      </td>
                    </tr>

                    // console.log(elem)
                  );
                })}
              </tbody>
            </table>
            {/* <span>
              <input placeholder="name" type="text" />
              <input placeholder="age" type="number" />
              <input placeholder="location" type="text" />
            </span> */}
          </div>
        ) : tab2 ? (
          <div>
            <h1>tab2</h1>
            <button
              onClick={() => {
                console.log("TAB 2", inputvalueTab2);
              }}
            >
              submit
            </button>
            <div>
              {console.log(inputvalueTab2)}
              <button
                onClick={() => {
                  setInputTab2([...inputTab2, inputValues]);
                  setInputValueTab2([
                    ...inputvalueTab2,
                    { name: "", age: "", location: "" },
                  ]);
                }}
              >
                add new
              </button>
            </div>
            <table>
              <tbody>
                {/* <thead>name</thead> */}
                <tr>
                  <td>name</td>
                  <td>age</td>
                  <td>location</td>
                  <td>action</td>
                </tr>
                {inputTab2.map((elem, i) => {
                  return (
                    <tr key={i}>
                      <td>
                        <input
                          name="name"
                          onChange={(e) => {
                            inputHandlerTab2(e.target,i);
                          }}
                          value={inputvalueTab2.name}
                          placeholder="name"
                          type="text"
                        />
                      </td>
                      <td>
                        <input
                          name="age"
                          onChange={(e) => {
                            inputHandlerTab2(e.target,i);
                          }}
                          value={inputvalueTab2.age}
                          placeholder="age"
                          type="number"
                        />
                      </td>
                      <td>
                        <input
                          name="location"
                          onChange={(e) => {
                            inputHandlerTab2(e.target,i);
                          }}
                          value={inputvalueTab2.location}
                          placeholder="location"
                          type="text"
                        />
                      </td>
                      <td>
                        <button
                          onClick={(e) => {
                            removeElementTab2(e, i);
                          }}
                        >
                          delete
                        </button>
                      </td>
                    </tr>

                    // console.log(elem)
                  );
                })}
              </tbody>
            </table>{" "}
          </div>
        ) : (
          <div>
            <h1>tab 3</h1>
            <button
              onClick={() => {
                console.log("TAB 3", inputvalueTab3);
              }}
            >
              submit
            </button>
            <div>
              <button
                onClick={() => {
                  setInputTab3([...inputTab3, inputValues]);

                  setInputValueTab3([
                    ...inputvalueTab3,
                    { name: "", age: "", location: "" },
                  ]);
                }}
              >
                add new
              </button>
            </div>
            <table>
              <tbody>
                {/* <thead>name</thead> */}
                <tr>
                  <td>name</td>
                  <td>age</td>
                  <td>location</td>
                  <td>action</td>
                </tr>
                {inputTab3.map((elem, i) => {
                  return (
                    <tr key={i}>
                      <td>
                        <input
                          name="name"
                          onChange={(e) => {
                            inputHandlerTab3(e.target,i);
                          }}
                          value={inputvalueTab3.name}
                          placeholder="name"
                          type="text"
                        />
                      </td>
                      <td>
                        <input
                          name="age"
                          onChange={(e) => {
                            inputHandlerTab3(e.target,i);
                          }}
                          value={inputvalueTab3.age}
                          placeholder="age"
                          type="number"
                        />
                      </td>
                      <td>
                        <input
                          name="location"
                          onChange={(e) => {
                            inputHandlerTab3(e.target,i);
                          }}
                          value={inputvalueTab3.location}
                          placeholder="location"
                          type="text"
                        />
                      </td>
                      <td>
                        <button
                          onClick={(e) => {
                            removeElementTab3(e, i);
                          }}
                        >
                          delete
                        </button>
                      </td>
                    </tr>

                    // console.log(elem)
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </>
    );
  };

  return (
    <>
      <button
        onClick={() => {
          return setTab1(true), setTab2(false), setTab3(false);
        }}
      >
        TAB 1
      </button>
      <button
        onClick={() => {
          return setTab1(false), setTab2(true), setTab3(false);
        }}
      >
        TAB 2
      </button>
      <button
        onClick={() => {
          return setTab1(false), setTab2(false), setTab3(true);
        }}
      >
        TAB 3
      </button>
      <Tabs/>
    </>
  );
};

export default MainComp;
