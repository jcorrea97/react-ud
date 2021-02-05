export const actionsType = {
    CHANGE: 'CHANGE_NOTIFY'
}

export const changeNotify = (payload) => ({
    type: actionsType.CHANGE,
    payload
})