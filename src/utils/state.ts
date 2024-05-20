import { atom } from "recoil";

export const userLogged = atom<boolean | null>({
	key: "balanceCIState",
	default: null,
});
