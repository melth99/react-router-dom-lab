import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
    boxHolder: '',
    boxSize: ''
};

const MailForm = (props) => {
    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate();

    const handleSend = (evt) => {
        evt.preventDefault();
        props.addMail(formData);
        console.log(formData)
        setFormData(initialState); // clears form
        navigate('/mail');
        
    };

    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value });
        console.log(target.name)
    };

    return (
        <>
            <main>
                <h1>Howdy! Here is your boxform!</h1>
                <form onSubmit={handleSend}>
                    <label htmlFor="boxHolder">Box Holder:</label>
                    <input
                        type="text"
                        id="boxHolder"
                        name="boxHolder"
                        value={formData.boxHolder}
                        onChange={handleChange}
                    />
                    <label htmlFor="boxSize">size:</label>
                    <input
                        type="text"
                        id="boxSize"
                        name="boxSize"
                        value={formData.boxSize}
                        onChange={handleChange}
                    />
                    <button type="submit">Submit</button>
                </form>
            </main>
        </>
    );
};

export default MailForm;
