export const actionsType = {
    CHANGE: 'CHANGE_ALERT'
}

export const changeAlert = (payLoad) => ({
    type: actionsType.CHANGE,
    payLoad
})

