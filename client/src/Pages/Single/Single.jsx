import Sidebar from "../../components/Sidebar/Sidebar";
import SinglePost from "../../components/Singlepost/SinglePost";
import "./Single.css";

export default function Single() {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  );
}