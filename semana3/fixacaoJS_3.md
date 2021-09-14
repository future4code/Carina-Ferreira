function calculaNota(ex, p1, p2) {
  
let nota = ((p1 * 1) + (p2 * 3) + ex) / 6

  if (nota >= 9){
    return "A"
  }else if(nota < 9 && >= 7.7){
    return "B"
  }else if (nota < 7.5 && >= 6) {
    return "C"
  } else {
    return "D
  }
}
