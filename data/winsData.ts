export type Win = {
id: string;
text: string;
date: string;
};

let wins: Win[] = [];

export const getWins = () => wins;

export const addWin = (text: string) => {
const newWin: Win = {
id: Date.now().toString(),
    text,
    date: new Date().toLocalDateString(),
    };

    wins.push(newWin);
};