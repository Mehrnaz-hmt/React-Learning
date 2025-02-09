import { useState } from "react";
import SimpleInput from "./components/SimpleInput";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import TimePicker from "react-multi-date-picker/plugins/time_picker";

function App() {
  const [value, setValue] = useState(0);
  const handleInputChange = (value) => {
    console.log("Input value:", value);
  };

  return (
    <div className="App">
      <h1>Simple Input Example</h1>

      <div className="mar" style={{display:"flex"}}>
        
        <SimpleInput
          placeholder="Enter some text"
          onChange={handleInputChange}
        />

        <div style={{ margin: "20px" }}>
          <input type="time" />
        </div>

      </div>

      <div>
        <DatePicker
          calendar={persian}
          locale={persian_fa}
          calendarPosition="bottom-right"
          format="MM/DD/YYYY HH:mm:ss"
          plugins={[<TimePicker position="bottom" />]}
        />
      </div>
    </div>
  );
}

export default App;
