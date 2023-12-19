function BookingForm() {
    return (<>
        <form>
            <fieldset>
                <div className="Field">
                    <label htmlFor="res-date">Choose Date</label>
                    <input type="date" id="res-date"></input>
                </div>
                <div className="Field">
                    <label htmlFor="res-time">Choose time</label>
                    <select id="res-time ">
                        <option>17:00</option>
                        <option>18:00</option>
                        <option>19:00</option>
                        <option>20:00</option>
                        <option>21:00</option>
                        <option>22:00</option>
                    </select>
                </div>
                <div className="Field">
                    <label htmlFor="guests">Number of guests</label>
                    <input type="number" placeholder="1" min="1" max="10" id="guests"></input>
                </div>
                <div className="Field">
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion">
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                </div>
                <div>
                <input type="submit" value="Make Your reservation"></input>
                </div>
            </fieldset>
        </form>
    </>)
}
export default BookingForm;