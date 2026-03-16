import { useState } from "react";
import KanbanBoard from "../KanbanBoard/KanbanBoard";
import Header from "./Header";
import AddTaskForm from "../KanbanBoard/AddTaskForm";

export default function Main(){
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    }
    const handleCloseModal = (event) => {
        event.preventDefault();
        setShowModal(false);
    }

    return (
        <main class="flex-1 flex flex-col min-h-0 relative">
            {
                showModal && <AddTaskForm onClose={handleCloseModal} />
            }
            <Header onOpenModal={handleShowModal}/>
            <KanbanBoard />
        </main>
    );
}