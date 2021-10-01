import {useRef} from "react";

function AddCategoryForm(props){
    const nameInputRef = useRef();
    const typeInputRef = useRef();

    function formSubmitHandler(e){
        e.preventDefault();
        console.log("vorm 2nnestus");
        const nameValue = nameInputRef.current.value;
        const typeValue= typeInputRef.current.value;

        const category ={
            name: nameValue,
            category: typeValue
        }
        props.onAddCategory(category);
    }
    return{
        <form onSubmit={formSubmitHandler}>
            <label>Kategooria nimi</label>
            <input type="text" placeholder="Nimi" required ref={nameInputRef} /><br />
            <label>Kategooria tüüp</label>
            <select ref={typeInputRef}>
                <option value="PREMIUM">PREMIUM</option>
                <option value="DELUXE">DELUXE</option>
                <option value="BASIC">BASIC</option>
            </select>
            <br />
            <button>Sisesta uus kategooria</button>
        </form>
    }
}

export default AddCategoryForm