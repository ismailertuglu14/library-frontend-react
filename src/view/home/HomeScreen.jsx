import Books from "./books/Books";
import Sidebar from "./__components__/sidebar/Sidebar";
import { useSelector } from "react-redux";
import stateReducer from "../../features/reducers/stateReducer";
const HomeScreen = () => {
  const selectedPage = useSelector((state) => state.stateReducer.selectedPage);
  return (
    <div className="flex">
      <Sidebar />
      <div className="h-screen flex-1 p-7 ">{selectedPage}</div>
    </div>
  );
};
export default HomeScreen;
