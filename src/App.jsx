import { useState } from "react";
import ImageGrid from "./components/imageGrid";
import Title from "./components/title";
import UploadForm from "./components/uploadForm";
import Modal from "./components/modal";

function App() {
 const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="mx-auto max-w-[960px]">
      <Title />
      <UploadForm />
      <ImageGrid selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      { selectedImg &&  <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </div>
  )
}

export default App;
