import { FaPlus } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sidebar">
      <button className="newChat">
        <FaPlus /> New Chat
      </button>

      <div className="history">
        <h3>History</h3>

        {/*    <div className="chatItem">Assessment Report</div>
        <div className="chatItem">Finance Document</div>
        <div className="chatItem">NCH Project</div> */}
      </div>
    </div>
  );
}

export default Sidebar;
