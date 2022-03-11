export default function capital(title: string) {
    if (title === '') return;
    const firstLetter = title[0];
    const restLetter = title.slice(1)
    return `${firstLetter.toUpperCase()}${restLetter}`
}