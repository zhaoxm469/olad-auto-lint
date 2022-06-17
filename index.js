function getList () {
  return new Promise((resolve, reject) => {
    reject("123")
  }).catch(error => {
    throw error
  })
}

function get2 () {
  getList().catch(error => {
    console.log("error")
  })
}

get2()