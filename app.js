const path=require('path')
const fs=require('fs')
const csv=require('csvtojson')

const csvFile=path.join(__dirname,'customer-data.csv')
csv().fromFile(csvFile).then((jsonObj)=>{
    console.log('Success')
    let buff=JSON.stringify(jsonObj)
    fs.writeFileSync(path.join(__dirname,'customer-data.json'),buff)
    }
)
