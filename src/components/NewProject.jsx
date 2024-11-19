import Input from "./Input";
import { useRef } from "react";
import Modal from "./Modal";

export default function NewProject({onAdd, onCancel}) {
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dueDateRef = useRef();

    const modalRef = useRef();

    function handleSave() {
        const enteredTitle = titleRef.current.value;
        const enteredDescription = descriptionRef.current.value;
        const enteredDueDate = dueDateRef.current.value;
        console.log(enteredTitle, enteredDescription, enteredDueDate);

        if(enteredTitle.trim() === "" || enteredDescription.trim() === "" || enteredDueDate.trim() === "") {	
            modalRef.current.open();
            return;
        }
        
        onAdd({
            title: enteredTitle, 
            description: enteredDescription, 
            dueDate: enteredDueDate});
    }



    return <> 
    <Modal ref={modalRef} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">Oops! Looks like you forgot to enter a value. Please make sure you provide a valid value for every field.</p>
        <p className="text-stone-600 mb-4">The field is probably empty.</p>
    </Modal>
    <div className="w-[35rem] mt-16">
        <menu className="flex justify-end items-center gap-4 my-4">
            <li>
                <button onClick={onCancel} className="text-stone-800 hover:text-stone-950">Cancel</button>
            </li>
            <li>
                <button onClick={handleSave} className="bg-stone-800 bg-stone-800 hover:bg-stone-950 text-stone-50 px-4 py-2 rounded-md">
                Save
                </button>
            </li>
        </menu>
        <div>
            <Input type="text" label="Title" ref={titleRef} />
            <Input label="Description" textarea ref={descriptionRef} />
            <Input label="Due Date" type="date" ref={dueDateRef} />
            </div>
        </div>
    </>
    ;
}

