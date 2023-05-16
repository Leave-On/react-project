import { AppDispatch } from "@/app/providers/StoreProvider";
import { useDispatch } from "react-redux";

/**
 *
 * @returns typed dispatch
 */

export const useAppDispatch = () => useDispatch<AppDispatch>()
