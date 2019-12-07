export { }

async function wait<T>(input: Promise<T>): Promise<T> {
    let x = await input
    return x
}

let obj = { x: 1 }
let objPromise = wait(Promise.resolve(obj))
