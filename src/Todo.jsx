// export default function Todo({task}){
//     return (
//         <div>
//             <li>Task : {task}</li>
//         </div>
//     )
// }

// export default function Todo({task, isDone}){
//     if (isDone === true) {
//         return <li>Finished : {task}</li>
//     }
//     else{
//         return <li>Works on: {task}</li>
//     }
// }

// export default function Todo({task, isDone}){
//     if (isDone) {
//         return <li>Finished : {task}</li>
//     }
//     return <li>Works On : {task}</li>
// }


export default function Todo({task, isDone}){
    return (
        <li> {isDone ? 'Finished': 'Works on Going'} : {task} </li>
    )
}