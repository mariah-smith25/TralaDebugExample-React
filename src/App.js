import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import "./components/llamas/llama-sheet.css";
import LLamaSheet from "./components/llamas/LlamaSheet";
import LlamaForm from "./components/edit/LlamaForm";
import { searchLlamas } from "./models/LlamaSearcher";

function App() {
  const [llamas, setLlamas] = useState([]);
  const [currentLlama, setCurrentLlama] = useState(null);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchLlamas = async () => {
      try {
        const response = await axios.get(
          "https://address-book.trala.com:8080/v1/contacts"
        );
        setLlamas(response.data);
      
      } catch (error) {
        console.error(error);
      }
    };

    fetchLlamas();
  }, llamas);

  const handleAddNew = () => {
    setCurrentLlama({});
  };

  const editLlama = (id) => {
    console.log(`Edit item with id ${id}`);
    setCurrentLlama(llamas.filter((llama) => llama.id === id)[0]);
  };

  const cancelActions = () => {
    setCurrentLlama(null);
  };

  const handleSave = (formData) => {
    const { id } = formData;
    const filteredObject = Object.fromEntries(
      Object.entries(formData).filter(
        ([key, value]) => key !== "id" && key !== "created_at" && key !== "is_active" && value !== null
      )
    );

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (id) {
      axios
        .put(
          `https://address-book.trala.com:8080/v1/contact/${id}`,
          filteredObject,
          config
        )
        .then((response) => {
          const updatedLlama = response.data;
          setLlamas((llamas) =>
            llamas.map((llama) =>
              llama.id === updatedLlama.id ? updatedLlama : llama
            )
          );
        })
        .catch((error) => console.error(error));
    } else {
      axios
        .post(
          `https://address-book.trala.com:8080/v1/contact`,
          filteredObject,
          config
        )
        .then((response) => {
          const newLlama = response.data;
          setLlamas((llamas) => [...llamas, newLlama]);
          setCurrentLlama(newLlama);
        })
        .catch((error) => console.error(error));
    }
  };

  const deleteLlama = (id) => {
    console.log(`Delete item with id ${id}`);

    axios
      .delete(`https://address-book.trala.com:8080/v1/contact/${id}`)
      .then((response) => {
        console.log(response.data);
        // Update the state to remove the deleted contact from the list
        setLlamas(llamas.filter((llama) => llama.id !== id));
      })
      .catch((error) => {
        console.error(error);
        setLlamas(llamas.filter((llama) => llama.id !== id));
      });
  };

  const filteredLlamas = /\S/.test(searchText)
    ? searchLlamas(llamas, ["first_name"], searchText)
    : llamas;

  return (
    <div>
      <header className="App">Llama Cheat Sheet</header>
      <>
        {console.log("Current Llama", currentLlama)}
        {currentLlama ? (
          <div>
            <button onClick={cancelActions}>Back</button>
            <LlamaForm data={currentLlama} onSubmit={handleSave} />
          </div>
        ) : (
          <div>
            <button onClick={handleAddNew}>Add New Llama</button>
            <br />
            <label>
              Search:
              <input
                type="text"
                name="search"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </label>

            <LLamaSheet
              llamaRecords={filteredLlamas}
              onEditClick={editLlama}
              onDeleteClick={deleteLlama}
            />
          </div>
        )}
      </>
    </div>
  );
}

export default App;
