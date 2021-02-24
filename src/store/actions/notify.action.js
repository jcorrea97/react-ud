export const actionsType = {
    CHANGE: 'CHANGE_NOTIFY'
}

export const changeNotify = (payLoad) => ({
    type: actionsType.CHANGE,
    payLoad
})