class Contato {
  nome: string
  email: string
  telefone: string
  id: number
  etiqueta: string

  constructor(
    nome: string,
    email: string,
    telefone: string,
    id: number,
    etiqueta: string
  ) {
    this.nome = nome
    this.email = email
    this.telefone = telefone
    this.id = id
    this.etiqueta = etiqueta
  }
}

export default Contato
