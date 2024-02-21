function objectToTree(obj) {
  const result = []
  const tmpObj = {}

  obj.forEach((item) => {
    if (item.pid === 0) {
      item.children = []
      tmpObj[item.id] = item
      result.push(item)
    } else {
      if (tmpObj[item.pid]) {
        if (tmpObj[item.pid].children) {
          tmpObj[item.pid].children.push(item)
        } else {
          tmpObj[item.pid].children = [item]
        }
      }

      tmpObj[item.id] = item
    }
  })
  
  return result
}

const source = [
  {
    id: 1,
    pid: 0,
    name: 'body',
  },
  {
    id: 2,
    pid: 1,
    name: 'title',
  },
  {
    id: 3,
    pid: 2,
    name: 'div',
  },
]

console.log(objectToTree(source))
