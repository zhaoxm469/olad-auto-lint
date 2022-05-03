const array = [1, 2, 3]

const path = require("path")

if (!array.length) {
  console.log("123")
}

for (const [item, index] of array.entries()) {
  console.log({ index })
}

const maxLength = Array.from({ length: 10 })

const foo = i > 5 ? i < 100 : true