export function Component2 ({test}) {
    return test === "AB" ? <p>Witam!</p> : <p>{test}</p>
}