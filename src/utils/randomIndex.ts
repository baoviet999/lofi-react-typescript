const randomIndex = (listSong: string[]) => {
    const index = Math.floor(Math.random() * listSong.length);
    return index
}
export default randomIndex