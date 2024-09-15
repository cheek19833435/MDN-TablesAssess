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

// pluto Notes - create link
// creates anchor ele for pluto link 
const a_pluto = document.createElement('a')
// creates text for link - createTextNode
const linkText_pluto = document.createTextNode("remains controversial")
// href link 
a_pluto.href = "http://www.usatoday.com/story/tech/2014/10/02/pluto-planet-solar-system/16578959/"
// nodeValue accesses string held in NodeValue property
a_pluto.textContent = linkText_pluto.nodeValue
// first part of string for pluto notes
let pluto_str = "Declassified as a planet in 2006, but this "



let data = {
    "merc":[
        {
            z:'0a',
            a:'Mercury',
            b:0.330,
            c:'4,879',
            d:5427,
            e:3.7,
            f:4222.6,
            g:57.9,
            h:167,
            i:0,
            j:'Closest to the Sun'
        }
    ],
    "venus":[
        {
            z:'0a',
            a:'Venus',
            b:4.87,
            c:'12,104',
            d: 5243, 
            e: 8.9,
            f: 2802.0,
            g: 108.2,
            h: 464,
            i: 0,
            j:''

        }
    ],
    'earth':[
        {
            z:'0a',
            a: 'Earth',
            b: 5.97,
            c: '12,756',
            d: 5514,
            e: 9.8,
            f: 24.0,
            g: 149.6,
            h: 15,
            i: 1, 
            j: 'Our world'
        }
    ],
    'mars':[
        {
            z:'0a',
            a:'Mars',
            b: 0.642,
            c: '6,792',
            d: 3933,
            e: 3.7,
            f: 24.7,
            g: 227.9,
            h: -65,
            i: 2,
            j: 'The red planet'
        }
    ],
    'jupiter':[
        {
            z:'1a',
            a: 'Jupiter',
            b: 1898,
            c: '142,984',
            d: 1326,
            e: 23.1,
            f: 9.9,
            g: 778.6,
            h: -110,
            i: 67,
            j: 'The largest planet'
        }
    ],
    'saturn':[
        {
            z:'9a',
            a: 'Saturn',
            b: 568,
            c: '120,536',
            d: 687,
            e: 9.0,
            f: 10.7,
            g: 1433.5,
            h: -140,
            i: 62,
            j:''
        }
    ],
    'uranus':[
        {
            z:'3a',
            a:'Uranus',
            b: 86.8,
            c: '51,118',
            d: 1271,
            e: 8.7,
            f: 17.2,
            g: 2872.5,
            h: -195,
            i: 27,
            j:''
        }
    ],
    'neptune':[
        {
            z:'4a',
            a: 'Neptune',
            b: 102,
            c: '49,528',
            d: 1638,
            e: 11.0,
            f: 16.1,
            g: 4495.1,
            h: -200,
            i: 14,
            j: ''
        }
    ],
    'pluto':[
        {
            z:'2a',
            a:'Pluto',
            b: 0.0146,
            c: '2,370',
            d: 2095,
            e: 0.7,
            f: 153.3,
            g: 5906.4,
            h: -225,
            i: 5,
            j: ''
        }
    ]


}


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
    // colspan = 2 first black cell of header
    if (temp_header.id=='0'){
        temp_header.colSpan = 2
    }
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
const rowHeadArr = ['Terrestrial planets',
                    'Jovian planets',
                    // 'Gas giants',
                    // 'Ice giants',
                    'Dwarf planets']
// loop through row Headers
rowHeadArr.forEach((item,i)=>{
    // create table rows
    const tr = document.createElement('tr')
    // create header
    let th = document.createElement('th')
    // add array item
    th.textContent = item
    // create id numbers for each element
    // add index together + 'a'
    th.id = i+'a'
    console.log(th.id)
    
    // apply span attributes to row headers
    // terrestrial planets
    if (th.id == '0a'){
        // use 4 rows
        th.rowSpan = 4
        // 2 columns
        th.colSpan = 2
        // add to tr
        tr.append(th)
        // append row header to table
        table.append(tr)
        // loop through object 
        for (const item in data){
            if(item == 'merc'){
                // console.log(data[item][0]['a'])
                // create table cell and loop through dict keys
                for (const b in data[item][0]){
                    // exclude first key('z')
                    if(b!='z'){
                        const td = document.createElement('td')
                        // add each item/property in each cell
                        td.textContent = data[item][0][b]
                        tr.append(td)
                    }                   
                }              
            } if (item =='venus'){
                const venusTR = document.createElement('tr')
                for (const b in data[item][0]){
                    // exclude first key('z')
                    if(b!='z'){
                        const td = document.createElement('td')
                        // add each item/property in each cell
                        td.textContent = data[item][0][b]
                        venusTR.append(td)
                        table.append(venusTR)
                    }                   
                }      
            } if (item =='earth'){
                const earthTR = document.createElement('tr')
                for (const b in data[item][0]){
                    // exclude first key('z')
                    if(b!='z'){
                        const td = document.createElement('td')
                        // add each item/property in each cell
                        td.textContent = data[item][0][b]
                        earthTR.append(td)
                        table.append(earthTR)
                    }                   
                }      
            } if (item =='mars'){
                const marsTR = document.createElement('tr')
                for (const b in data[item][0]){
                    // exclude first key('z')
                    if(b!='z'){
                        const td = document.createElement('td')
                        // add each item/property in each cell
                        td.textContent = data[item][0][b]
                        marsTR.append(td)
                        table.append(marsTR)
                    }                   
                }      
            } 
        }
        
    } 
    // Jovian Planets
    if (th.id == '1a'){
        th.rowSpan = 4
        th.scope = 'rowgroup'
        tr.append(th)
        // after appending Jovian Planets, in the save tr, append ice giants/gas giants
        const ggiantTH = document.createElement('th')
        ggiantTH.textContent = 'Gas Giants'
        ggiantTH.rowSpan = 2
        ggiantTH.scope = 'rowgroup'
        tr.append(ggiantTH)

        
        // add Jupiter
        for (const item in data){
            if (item =='jupiter'){
                // const jupTR = document.createElement('tr')
                for (const b in data[item][0]){
                    // exclude first key('z')
                    if(b!='z'){
                        const td = document.createElement('td')
                        // add each item/property in each cell
                        td.textContent = data[item][0][b]
                        // assign scope if textContent = Jupiter
                        if (td.textContent =='Jupiter'){
                            td.scope = 'row'
                        }
                        tr.append(td)
                        table.append(tr)
                    }                   
                }      
            } if (item =='saturn'){
                const satTR = document.createElement('tr')
                for (const b in data[item][0]){
                    // exclude first key('z')
                    if(b!='z'){
                        const td = document.createElement('td')
                        // add each item/property in each cell
                        td.textContent = data[item][0][b]
                        // assign scope if textContent = Jupiter
                        if (td.textContent =='Saturn'){
                            td.scope = 'row'
                        }
                        satTR.append(td)
                        table.append(satTR)
                    }                   
                }      
            }
          
        }
        // ice giant th - has to append under jovian planet code th block
        const igiantTR = document.createElement('tr')
        const igiantTH = document.createElement('th')
        igiantTH.textContent = 'Ice Giants'
        igiantTH.rowSpan = 2
        igiantTH.scope = 'rowgroup'
         igiantTR.append(igiantTH)
        table.append(igiantTR)

        for (const item in data){
            if (item =='uranus'){
                // const satTR = document.createElement('tr')
                for (const b in data[item][0]){
                    // exclude first key('z')
                    if(b!='z'){
                        const td = document.createElement('td')
                        // add each item/property in each cell
                        td.textContent = data[item][0][b]
                        // assign scope if textContent = Jupiter
                        if (td.textContent =='Uranus'){
                            td.scope = 'row'
                        }
                        igiantTR.append(td)
                        table.append(igiantTR)
                    }                   
                }      
            } if (item == 'neptune'){
                // must create a new tr 
                const nepTR = document.createElement('tr')
                for (const b in data[item][0]){
                    // exclude first key('z')
                    if(b!='z'){
                        const td = document.createElement('td')
                        // add each item/property in each cell
                        td.textContent = data[item][0][b]
                        // assign scope if textContent = Jupiter
                        if (td.textContent =='Uranus'){
                            td.scope = 'row'
                        }
                        nepTR.append(td)
                        table.append(nepTR)
                    }                   
                }      
            } 
        }

    
    }
    // dwarf planets
    if(th.id =='2a'){
        th.colSpan = 2
        table.append(th)
        for (const item in data){    
            // add pluto row
            if (item == 'pluto'){
                // must create a new tr 
                for (const b in data[item][0]){
                    // exclude first key('z')
                    if(b!='z'){
                        const td = document.createElement('td')
                        // add each item/property in each cell
                        td.textContent = data[item][0][b]
                        // assign scope if textContent = Jupiter
                        if (td.textContent =='Pluto'){
                            td.scope = 'row'
                        }
                        // pluto - j key - notes - link text
                        if (b =='j'){
                            td.append(pluto_str)
                            td.append(a_pluto)
                        }

                        table.append(td)
                    }                   
                }      
            }
        } 
    }
    
})



