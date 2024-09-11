// creates container div
let container = document.createElement('div')
container.id = 'container'
// add container id to body
const body = document.querySelector('body')
body.append(container)
// create table
const table = document.createElement('table')
container.append(table)