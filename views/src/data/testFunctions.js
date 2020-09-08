export function fetchTest(state){
    const test = [
        {id:1,name:"faris"},
        {id:2,name:"robb"},
        {id:3,name:"arya"}
    ]
    return {...state,test}
}

export function removeTest(state,id){
    const test = state.test.filter(t=>t.id !== id)
    return {...state,test}
}