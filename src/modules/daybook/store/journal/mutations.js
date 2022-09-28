
export const setEntries =( state, entries ) => {
    state.entries = [...state.entries, ...entries]
    state.isLoading = false
}

export const updateEntry = ( state, entry ) => {
    const idx = state.entries.map( e => e.id ).indexOf( entry.id )
    state.entries[idx] = entry
    //console.log({idx})
}

export const addEntry = ( state, entry ) =>{
    //state -> entries -> La nueva entrada debe ser la primera.
    state.entries = [ entry, ...state.entries ]
}

export const deleteEntry = ( state, id ) => {
    // remover del state.entries por ID

    state.entries = state.entries.filter( entry => entry.id !== id )
}