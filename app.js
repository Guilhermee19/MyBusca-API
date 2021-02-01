const express = require('express');
const app = express();

const PORT  = process.env.PORT || 8877;

app.get('/itsme', (req, res) => {
    res.json({
        name: 'Bigodee',
        urls: [
            {
                type: 'github',
                url: `https://github.com/Guilhermee19`
            },
            {
                type: 'youtube',
                url: 'https://www.youtube.com/channel/UCTkMx_-_RFPrB_zKmDTJw9w'
            },
            {
                type: 'discord',
                url: 'Guilhermee#8489'
            }
        ]
    })
})


app.get('/movie', (req, res) => {
    res.json({
        movie:[
            {
                id: 1,
                name: "Vingadores Guerra Infinita",
                image: "https://i.ibb.co/VMTXTwc/144515970-235663898026216-6160473327564997815-n.jpg",
                url: null,
                dateRelease: null
            },
            {
                id: 2,
                name: "Vingadores Ultimato",
                image: "https://i.ibb.co/86KWqps/144262844-235663988026207-5707561492419050200-o.jpg",
                url: null,
                dateRelease: null
            },
            {
                id: 3,
                name: "Mulher Maravilha",
                image: "https://i.ibb.co/Dk4vwdg/143798588-235663874692885-8086791601657733990-n.jpg",
                url: null,
                dateRelease: null
            },
            {
                id: 4,
                name: "Vidro",
                image: "https://i.ibb.co/TLnrKjm/143812177-235663878026218-681693663208224637-n.jpg",
                url: null,
                dateRelease: null
            },
            {
                id: 5,
                name: "Nós",
                image: "https://i.ibb.co/RHR3Jjq/5034340-jpg-r-1280-720-f-jpg-q-x-xxyxx.jpg",
                url: null,
                dateRelease: null
            }
        ]
    })
})


app.get('/', (req, res) => {
    res.json({
        msg: 'OK'
    })
})

app.listen(PORT, () => {
    console.log('Escutando na porta: ' + PORT);
})