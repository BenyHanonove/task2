import UserForm from "./components/UserForm/user-form";
import ResizableTable from "./components/ResizableTable/resizable-table";
import ColorsButton from "./components/ColorsButton/colors-button";

function App() {
  return (
    <div className="App">
      <ColorsButton />
      <UserForm />
      <ResizableTable />
    </div>
  );
}

export default App;
