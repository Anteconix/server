import connect from "./db.js"

export async function selectEstudantes() {
    const sql = "SELECT * FROM aluno"
    const conn = await connect()
    const alunos = await conn.query(sql, [])
    console.log(alunos[0])
}

