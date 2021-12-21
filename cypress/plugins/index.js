/*/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

*//**
 * @type {Cypress.PluginConfig}
 * 
 * 
 */
/*
module.exports = (on, config) => {

}*/


// promisified fs module
const fs = require('fs-extra')
const path = require('path')
const dbConfig = require('C:\\Users\\ben.hill\\source\\repos\\Code Challenge 2021\\cypress.json')

function getConfigurationByFile(file) {
    const pathToConfigFile = path.resolve('..','Code Challenge 2021\\cypress\\config',`${file}.json`)
    return fs.readJson(pathToConfigFile)
}

const cucumber = require('cypress-cucumber-preprocessor').default
const sqlServer = require('cypress-sql-server');

module.exports = (on, config) => {
    const file = config.env.configFile || 'development'

    
    on('file:preprocessor', cucumber())
    tasks = sqlServer.loadDBPlugin(dbConfig.env.db);
    
/*    on('task', {

        
        foo() {
            console.log('foo')

            return null
        },
        bar() {
            console.log('bar')

            return null
        },
        queryDatabase({ dbName, query }) {
            const connectionInfo = connections[dbName]

            if (!connectionInfo) {
                throw new Error(`Do not have DB connection under name ${dbName}`)
            }

            return queryDB(connectionInfo, query)
        }

    });*/

    on('task', tasks)
    return tasks, getConfigurationByFile(file)


}

// in plugins/index.js
/*const mysql = require('mysql')
// the connection strings for different databases could
// come from a config file, or from environment variables

const connections = {
    stagingA: {
        host: '',
        user: '',
        password: '',
        database: ''
    },
    stagingB: {
        host: 'staging-b.my.co',
        user: 'test',
        password: '***',
        database: 'users'
    }
}*/

// querying the database from Node
/*function queryDB(connectionInfo, query) {
    const connection = mysql.createConnection(connectionInfo)

    connection.connect()

    return new Promise((resolve, reject) => {
        connection.query(query, (error, results) => {
            if (error) {
                return reject(error)
            }

            connection.end()

            return resolve(results)
        })
    })
}*/


/*module.exports = (on, config) => {
    on('task', {
        // destructure the argument into the individual fields
        queryDatabase({ dbName, query }) {
            const connectionInfo = connections[dbName]

            if (!connectionInfo) {
                throw new Error(`Do not have DB connection under name ${dbName}`)
            }

            return queryDB(connectionInfo, query)
        }
    })
}*/
