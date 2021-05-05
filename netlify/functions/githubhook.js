module.exports.handler = () => {
  console.log('hi')
  return {
    statusCode: 200,
    body: 'hello'
  }
}