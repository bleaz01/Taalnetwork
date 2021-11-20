import {app} from '../../firebase'

export const dataeParser = (num)=>{
    let option = {hour:"2-digit", minute:"2-digit", second:"2-digit"
    ,weekday:"long", year:"numeric", month:'short', day:"numeric" }


    let timesStamp = Date.parse(num)

    let date = new Date(timesStamp).toLocaleDateString('fr-FR', option)
    return date.toString()
}


export const isEmpty = (value, userId)=>{
    return(
        value === undefined ||
        value === null ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (typeof value === "string" && Object.keys(value).length === 0)
    )
}

export const handleUploade = (file)=>{

    const storageRef = app.storage().ref()
    const fileRef = storageRef.child(file.name)
    fileRef.put(file).then(()=>{
        console.log(file)
    })
    
    // const uploadTask = storage.ref(`images/${file.name}`).put(file);
    // console.log(file, userId)
    // uploadTask.on(
    //     "state_canged",
    //     snapshot =>{},
    //         erro =>{
    //             console.log(erro)
    //         },
    //         ()=>{
    //             storage
    //             .ref("images")
    //             .child(file.name)
    //             .then(url =>{
    //                 console.log(url)
    //             })
    //         }
        
    // )
}