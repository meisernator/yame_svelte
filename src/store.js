import { writable } from "svelte/store";

const storedContent = localStorage.getItem("inhalt","# Dokumentation");
export const inhalt = writable(storedContent);

inhalt.subscribe(value => {
    localStorage.setItem("inhalt", value);
});