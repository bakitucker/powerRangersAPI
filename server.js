const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const rangers = {
    'red': {
        'description': 'Mostly, red is symbolized as a team-lead-color. Red rangers in all series are mainly dedicated to take in charge as leader of the squad. Red rangers are described as the most highly-dedicated, and the bravest character among of all. Red is an icon for high-spirited character, strength, and passionate.',
        'title': 'You have selected the RED Ranger',
        'url': 'https://static.wikia.nocookie.net/powerrangers/images/1/1b/Zyu-red.png/revision/latest/scale-to-width-down/245?cb=20220209055745'
       
    },
    'blue':{
        'description': 'Blue Ranger in some series is described as meticulous person who can deliver his idea through some experiments. Usually, Blue Rangers are associated with loyalty, focus, and conscientious. They always stand by and in charge as second hand of the team.',
        'title': 'You have selected the BLUE Ranger',
        'url': 'https://www.writeups.org/wp-content/uploads/Blue-Ranger-Power-Rangers-Billy-Cranston-b.jpg'
    },
    'black':{
        'description': 'Black is defined as something mysterious. Most people associate Black with something dark and gloomy. Often, this color is abandoned by majority because it symbolizes evil and black-power. However, in Power Rangers, Black Ranger seems to be very different with the description above. Black Ranger can be defined as cool, confident, dare to be different, and masculine.',
        'title': 'You have selected the BLACK Ranger' , 
        'url':'https://static.wikia.nocookie.net/powerrangers/images/9/92/Zyu-black.png/revision/latest/scale-to-width-down/244?cb=20130726024302'    
    },
    'yellow': {
        'description': 'In some series of Power Rangers, Yellow Ranger is played by Women, but in other series its role is taken by Men. Yellow has meaning to persuade people with warmth. It represents cheerfulness.',
        'title': 'You have selected the YELLOW Ranger',
        'url': 'https://www-s.mlo.me/upen/v/2020/202009/20200908/2020090810190773079.jpg'
    },
    'white':{
        'description': 'White Ranger sometimes appears as the sixth ranger in the series. White Ranger is described as complementary Ranger to make the formation stronger.',
        'title': 'You have selected the WHITE Ranger',
        'url': 'https://static.wikia.nocookie.net/justanothercrossoverfightingshow/images/1/1b/Mmpr-white.png/revision/latest?cb=20160717114719'
    },
    'pink':{
        'description': 'Pink, the ultimate symbol of feminism, is always embedded to the character of Pink Ranger, Kimberly. Basically, Pink represents sweetness, sensitivity, and friendly. Everything associates with Pink is considered with something nice and girly.',
        'title': 'You have selected the PINK Ranger',
        'url': 'https://static.wikia.nocookie.net/powerrangers/images/e/ec/Mmpr-pink-metallic.png/revision/latest?cb=20210502191312'
    },
    'unknown':{
        'description': 'Please enter Correct Ranger Color'
    }
}
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})
app.get('/main.js', (request, response)=>{
    response.sendFile(__dirname + '/main.js')
})

app.get('/api/:name',(request,response)=>{
    const rangerColor = request.params.name.toLowerCase()

    if( rangers[rangerColor] ){
        response.json(rangers[rangerColor])
    }else{
        response.json(rangers['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})