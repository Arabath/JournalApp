import journalApi from "@/api/journalApi"

export const loadEntries = async ({ commit }) => {

    const { data } = await journalApi.get('/entries.json')

    if( !data ) {
        commit('setEntries', [])
        return
    }

    const entries = []
    for( let id of Object.keys(data) ) {
        entries.push({
            id,
            ...data[id]
        })
    }

    commit('setEntries', entries)
}

export const updateEntry = async ({ commit }, entry) => {
    // console.log(entry, 'actions')

    const { date, picture, text } = entry
    const dataToSave = { date, picture, text }

    const resp = await journalApi.put( `/entries/${ entry.id }.json` .json, dataToSave )
    
    console.log(resp)
    
    //commit de una mutacion --> updateEntry
    commit('updateEntry', { ...entry })
}

export const creaeteEntry = async ({ commit }, entry) => {

    // dataToSave
    const { date, picture, text } = entry
    const dataToSave = {date, picture, text}

    const { data } = await journalApi.post(`entries.json`, dataToSave)

    // data

    dataToSave.id = data.name

    commit('addEntry', dataToSave)

    return data.name
}


export const deleteEntry = async ({ commit }, id) => {

    await journalApi.delete(`/entries/${ id }.json`)

    commit('deleteEntry', id)

    return id
}