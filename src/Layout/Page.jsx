import { useState } from "react";
import KanbanBoard from "../KanbanBoard/KanbanBoard";
import Header from "./Header";
import TaskForm from "../KanbanBoard/TaskForm";

export default function Page(){
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    }
    const handleCloseModal = (event) => {
        event.preventDefault();
        setShowModal(false);
    }

    return (
        <main className="flex-1 flex flex-col min-h-0 relative">
            {
                showModal && <TaskForm onClose={handleCloseModal} />
            }
            <Header onOpenModal={handleShowModal}/>
            <KanbanBoard />
        </main>
    );
}