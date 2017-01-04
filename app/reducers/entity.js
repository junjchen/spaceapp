const updateEntity = (state, {payload}) => {
    const {schema, entity} = payload;
    return {
        ...state,
        [schema]: {
            ...state[schema],
            [entity.id]: {
                ...state[schema][entity.id],
                ...entity
            }
        }
    }
}

export {updateEntity};