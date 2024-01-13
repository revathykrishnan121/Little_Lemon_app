import { useReducer } from "react";
import BookingForm from "./BookingForm";
import { useNavigate } from "react-router-dom";

function BookingPage() {
    //const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00","21:00", "22:00"]);
    const navigation = useNavigate();
    const updateTimes = (availableTimes, action) => {
        return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    }

    const initializeTimes = () => {
        fetchData();
    }

    const fetchData = () => {
        fetch("https://randomuser.me/api/?results=1")
            .then((response) => response.json())
            .then((data) => { return data.results });
    }

    const submit = (formData) => {
        console.log(formData);
        navigation("/confirmed")
    }
    //["117:00", "18:00", "19:00", "20:00","21:00", "22:00"]; 
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes())
    return (<>
        <section className="reserve-table-container">
            <h2>Book Your Table Now!</h2>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} submit={submit}></BookingForm>
        </section>
    </>)
}
export default BookingPage;