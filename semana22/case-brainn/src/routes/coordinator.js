export const goHome = (history) => {
    history.push(`/`)
}

export const goToMovieDetails = (history, id) =>{
    history.push(`/details/${id}`)
}