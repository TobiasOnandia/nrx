export async function registerAction(request: Request) {
  const { email, password } = await request.json();
  
  if(!email || !password ) {
    return {
      success: false,
      message: 'Email and password are required'
    }
  }
  
  
}