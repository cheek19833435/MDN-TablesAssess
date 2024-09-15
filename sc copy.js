// gets h1 text value
const title = document.querySelector('h1')
// Changes title
title.textContent = 'Planets Data'
// creates container div
let container = document.createElement('div')
container.id = 'container'
// add container id to body
const body = document.querySelector('body')
body.append(container)
// create table
const table = document.createElement('table')
table.id = 'myTable'
// theader element 
const thead = document.createElement('thead')

// terrestrial planet data
let merc = {
    a:'Mercury',
    b:0.330,
    c:'4,879',
    d:5427,
    e:3.7,
    f:4222.6,
    g:57.9,
    h:167,
    i:0,
    j:'Closest to the Sun'}


// creates table headers via for loop
const col_headers = ['','Name',

'Diameter (km)',


'Length of day (hours)',

'Mean temperature (°C)',
'Number of moons',
'Notes']

// for each header
col_headers.forEach((item,i) =>{
    // create table header var
    let temp_header = document.createElement('th')
    // set header text
    temp_header.textContent=item
    // give index as id # 
    temp_header.id = i
    // append header to table 
    thead.append(temp_header)
})


// add headers for columns with sup tags
const supArr = [24,3,2,6]
// create sup element
let sup = document.createElement('sup')
// create TextNode with item value
let supText = document.createTextNode('')
let temp_header = document.createElement('th')

supArr.forEach((item)=>{
    sup = document.createElement('sup')
    supText = document.createTextNode(item)
    temp_header = document.createElement('th')
    if(item==24){
        sup.textContent = supText.nodeValue
        temp_header.append('Mass (10')
        temp_header.append(sup)
        temp_header.append('kg)')
        temp_header.id = 'mass'
        thead.append(temp_header)
    } else if(item ==3){
        sup.textContent = supText.nodeValue
        temp_header.append('Density (kg/m')
        temp_header.append(sup)
        temp_header.append(')')
        temp_header.id = 'density'
        thead.append(temp_header)
    } else if(item ==2){
        sup.textContent = supText.nodeValue
        temp_header.append('Gravity (m/s')
        temp_header.append(sup)
        temp_header.append(')')
        temp_header.id = 'gravity'
        thead.append(temp_header)
    } else if(item ==6){
        sup.textContent = supText.nodeValue
        temp_header.append('Distance from Sun (10')
        temp_header.append(sup)
        temp_header.append('km)')
        temp_header.id = 'dist'
        thead.append(temp_header)
    }
})


// append thead to table
table.append(thead)

// creates caption for table
let caption = document.createElement('caption')
// creates anchor ele for link 
const a = document.createElement('a')
// creates text for link - createTextNode
const linkText = document.createTextNode("Nasa's Planetary Fact Sheet - Metric")
// href link 
a.href = "http://nssdc.gsfc.nasa.gov/planetary/factsheet/"
// nodeVAlue accesses string held in NodeValue property
a.textContent = linkText.nodeValue
let str = "Data about the planets of our solar system (Planetary facts taken from "
// appends all elements of the caption
caption.append(str)
caption.append(a)
caption.append(')')
table.append(caption)
// append table to container
container.append(table)

// insert before has to be after table appended to container
// insert mass before diameter
thead.insertBefore(document.getElementById('mass'),document.getElementById('2'))
// gravity before length of day
thead.insertBefore(document.getElementById('gravity'),document.getElementById('3'))
// density before gravity
thead.insertBefore(document.getElementById('density'),document.getElementById('gravity'))
// dist before mean
thead.insertBefore(document.getElementById('3'),document.getElementById('dist'))
// length of day before mean
thead.insertBefore(document.getElementById('3'),document.getElementById('4'))
// dist before mean
thead.insertBefore(document.getElementById('dist'),document.getElementById('4'))


// rowheader Array
// const rowHeadArr = ['Terrestrial planets',
//                     'Jovian planets',
//                     'Gas giants',
//                     'Ice giants',
//                     'Dwarf planets']
// // loop through row Headers
// rowHeadArr.forEach((item,i)=>{
//     // create table rows
//     const tr = document.createElement('tr')
//     // create header
//     let th = document.createElement('th')
//     // add array item
//     th.textContent = item
//     // create id numbers for each element
//     // add index together + 'a'
//     th.id = i+'a'
//     // apply rowspan attributes to row headers
//     // if (th.id == '0a'){
//     //     th.rowSpan = 4
//     // } else if (th.id == '1a'){
//     //     th.rowSpan = 2
//     // }
//     // add to tr
//     tr.append(th)
//     // append row to table
//     table.append(tr)
// })


// loop through object property
for (const item in merc){
    // create table row
    const tr = document.createElement('tr')
    // create table cell
    const td = document.createElement('td')
    // add each item/property in each cell
    td.textContent = merc[item]
    tr.append(td)
    table.append(tr)
    // console.log(merc['a'])
}

// Venus 4.87 12,104 5243 8.9 2802.0 108.2 464 0
// Earth 5.97 12,756 5514 9.8 24.0 149.6 15 1 Our world
// Mars 0.642 6,792 3933 3.7 24.7 227.9 -65 2 The red planet

