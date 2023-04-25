import mysql from 'mysql'

export default function DbConnection(db_host, db_user, db_pass, db_name){
    
    const database = mysql.createConnection({
        host: db_host,
        user: db_user,
        password: db_pass,
        database: db_name
    })

    return database

}