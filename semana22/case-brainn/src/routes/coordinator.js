export const goBack = (history) => {
    history.goBack()
}

export const goToMovieDetails = (history, id) =>{
    history.push(`/details/${id}`)
}