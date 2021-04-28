exports.handler = async (event, context) => {
  const guides = [
    { id: 1, title: 'Beat all Zelda Bosses Like a Boss', author: 'mario' },
    { id: 2, title: 'Mario Kart Shortcuts You Never Knew Existed', author: 'luigi' },
    { id: 3, title: 'Ultimate Street Fighter Guide', author: 'chun-li' }
  ]
  
  // if a user token is present
  if (context.clientContext.user) {
    return {
      statusCode: 200,
      body: JSON.stringify(guides)
    }
  }
  
  // if the user is logged out
  return {
    statusCode: 401, // unauthenticated user
    body: JSON.stringify({ message: 'you must be logged in to see this' })
  }

}