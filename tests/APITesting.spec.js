const { expect,test } = require("@playwright/test")
const { request } = require('http')
 
var userID
 
test('Get user',async({request})=>{
    const response = await request.get('https://reqres.in/api/users?page=2')
    console.log(await response.json())
    expect(response.status()).toBe(200)
})
test('Create user',async({request})=>{
    const response = await request.post
                    (
                     'https://reqres.in/api/users/'+userID,
                    {
                    data:{"name":'SHASHI',"Job": 'SDET'},
                    Headers:{"Accept":"application/json"}
})
console.log(await response.json())
expect(response.status()).toBe(201)

var res = await response.json()
userID = res.id
})
test('UPdate put user',async({request})=>{
    const response = await request.put
                    (
                     'https://reqres.in/api/users/'+userID,
                    {
                    data:{"name":'Ranjan',"Job": 'SDET'},
                    Headers:{"Accept":"application/json"}
})
console.log(await response.json())
expect(response.status()).toBe(200)

var res = await response.json()
userID = res.id
})
test('UPdate partial user',async({request})=>{
    const response = await request.patch
                    (
                     'https://reqres.in/api/users/'+userID,
                    {
                    data:{"Job": 'SDET01'},
                    Headers:{"Accept":"application/json"}
})
console.log(await response.json())
expect(response.status()).toBe(200)

var res = await response.json()
userID = res.id

})
test('Delete user',async({request})=>{
    const response = await request.delete('https://reqres.in/api/users/'+userID)
    expect(response.status()).toBe(204)
 
})

