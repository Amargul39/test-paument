import "./App.css";
import { FormComponent, FormContainer } from "react-authorize-net";

let clientKey = "SIMON";
let apiLoginId = "645VpWBk6C";

function App() {
  const onErrorHandler = (response) => {
    console.log("onErrorHandler", response);
  };

  const onSuccessHandler = (response) => {
    console.log("onSuccessHandler", response);
  };
  return (
    <FormContainer
      environment="sandbox"
      onError={onErrorHandler}
      onSuccess={onSuccessHandler}
      amount={23}
      component={FormComponent}
      clientKey={clientKey}
      apiLoginId={apiLoginId}
    />
  );
}

export default App;
