export const goToHome = (history) =>{
    history.push("/")
}

export const goToMovieDetails = (history, id) =>{
    history.push(`/details/${id}`)
}