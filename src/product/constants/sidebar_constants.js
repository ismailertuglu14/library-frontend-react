import {
  AiOutlineBook,
  AiFillBook,
  AiOutlineCalendar,
  AiOutlineNotification,
} from "react-icons/ai";
import { MdLogin, MdLogout } from "react-icons/md";
import Books from "../../view/home/books/Books";
import RentedBooks from "../../view/home/rented_books/RentedBooks";

export const Menus = [
  {
    title: "Books",
    src: <AiOutlineBook className="w-6 h-6 text-black" />,
    route: <Books />,
  },
  {
    title: "Rented Books",
    src: <AiFillBook className="w-6 h-6 text-black" />,
    route: <RentedBooks />,
  },

  {
    title: "Schedule ",
    src: <AiOutlineCalendar className="w-6 h-6 text-black " />,
  },
  {
    title: "Notifications",
    src: <AiOutlineNotification className="w-6 h-6 text-black" />,
  },
  {
    title: "Files ",
    src: <AiOutlineBook className="w-6 h-6 text-black" />,
    gap: true,
  },
  { title: "Login", src: <MdLogin className="w-6 h-6 text-black" /> },
];
