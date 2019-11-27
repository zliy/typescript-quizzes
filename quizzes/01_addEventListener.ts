export { }

interface Event {
    target: any,
    timeStamp: number,
}
interface MouseEvent extends Event {
    clientX: number
}
interface KeyBoardEvent extends Event {
    key: string
}


interface EventMap {
    "click": MouseEvent,
    "keypress": KeyBoardEvent,
}

function addEventListener<T extends keyof EventMap>(type: T, handler: (e: EventMap[T]) => void) {

}

addEventListener('click', (e) => {
    e.clientX
})
addEventListener('keypress', (e) => {
    e.key
})