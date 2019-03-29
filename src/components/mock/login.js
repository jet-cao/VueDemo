import Mock from 'mockjs'

let accountList = [
  { id: 'asdf', password: '1234', token: 'abc_abc' }
]

let account = function (options) {
  let Data = JSON.parse(options.body)
  let id = Data.id
  let password = Data.password
  let method = Data.method
  if (method === 'login') {
    let guest = accountList.filter(function (item, index, array) {
      return id === item.id && password === item.password
    })
    if (guest[0]) {
      return guest[0]
    }
  } else if (method === 'register') {
    accountList.push({ id: id, password: password, token: 'bcd_bcd' })
    console.log(accountList)
  }
}

Mock.mock(/login/, 'post', account)
