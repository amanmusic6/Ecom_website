require('dotenv').config();

module.exports = {
    HOST:process.env.DB_HOST,
    USER:process.env.DB_USER,
    PASSWORD : process.env.DB_PASSWORD,
    DB : process.env.DB_NAME,
    dialect : "mysql",
    pool:{      // pool means how many threads you want in the pool(specific to database)..in nodeJS arc.
        max:5,
        min:0,
        acquire:30000,//max time in ms that a pool will try to get connection before throwing error
        idle:10000 //max time in ms that aconnection can be idle before being released
    } 
}