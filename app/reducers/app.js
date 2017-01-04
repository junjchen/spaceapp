const changeNavTab = (state, {payload}) => {
    const {to} = payload;
    return {
        ...state,
        currentTab: to
    }
}

export {changeNavTab};