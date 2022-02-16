import { createSelector } from "reselect";

const getUsersSelectorForReselect = (state) => {
   return state.userPage.users;
}

export const getUsersSelector = createSelector(getUsersSelectorForReselect, (users) => {
    return users.filter(u => true);
})

export const getPageSize = (state) => {
    return state.userPage.pageSize
}

export const getTotalPageCount = (state) => {
    return state.userPage.totalPageCount
}

export const getCurrentPage = (state) => {
    return state.userPage.currentPage
}

export const getIsFetching = (state) => {
    return state.userPage.isFetching
}

export const getFollowingInProcess = (state) => {
    return state.userPage.followingInProcess
}

export const getPortionSize = (state) => {
    return state.userPage.portionSize
}

export const getPortionPagination = (state) => {
    return state.userPage.portionPagination
}