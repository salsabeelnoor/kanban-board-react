import KanbanBoard from "../KanbanBoard/KanbanBoard";
import Header from "./Header";

export default function Main(){
    return (
        <main class="flex-1 flex flex-col min-h-0">
            <Header />
            <KanbanBoard />
        </main>
    );
}