export function Component ({test}) {
    return test === "A" ? <p>Witam!</p> : <p>{test}</p>
}