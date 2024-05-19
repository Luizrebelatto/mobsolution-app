import AsyncStorage from "@react-native-async-storage/async-storage";

export const setItemStorage = (key: string, value) => {
	AsyncStorage.setItem(key, value);
};

export const getItemStorage = (key: string) => {
	AsyncStorage.getItem(key);
};