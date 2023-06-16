import ImageGrid from "./components/imageGrid";
import Title from "./components/title";
import UploadForm from "./components/uploadForm";

function App() {

  return (
    <div className="mx-auto max-w-[960px]">
      <Title />
      <UploadForm />
      <ImageGrid />
    </div>
  )
}

export default App;
