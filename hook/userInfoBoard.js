import { useContext } from "react";
import { MainContext } from "../store/MainContext";

const userInfoBoard = () => useContext(MainContext);

export default userInfoBoard;
