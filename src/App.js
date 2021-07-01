import React, { useState, useEffect } from "react";
import FormModal from "./comp/ModalForm";
import { Button } from "react-bootstrap";
import CreateField from "./comp/CreateField";
import CreateTable from "./comp/Answers";


export default function App() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);

  useEffect(()=>{
    console.log('use effect', data);
  }, [open, data]);

  function doSubmit (value) {
    setOpen(false)
    setData(value)
  }
  return (
      <div className="App">
        {open && (
            <FormModal
                onCancel={() => setOpen(false)}
                show={open}
                Content={<CreateField doSubmit={doSubmit}/>}
            />
        )}
        <CreateTable data={data} />
        <Button onClick={() => setOpen(true)}>Start test</Button>
      </div>
  );
}