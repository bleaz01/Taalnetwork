export const dataeParser = (num)=>{
    let option = {hour:"2-digit", minute:"2-digit", second:"2-digit"
    ,weekday:"long", year:"numeric", month:'short', day:"numeric" }


    let timesStamp = Date.parse(num)

    let date = new Date(timesStamp).toLocaleDateString('fr-FR', option)
    return date.toString()
}


export const isEmpty = (value)=>{
    return(
        value === undefined ||
        value === null ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (typeof value === "string" && Object.keys(value).length === 0)
    )
}