import { useDispatch } from "react-redux"
import { loginUser } from "../features/userSlice"

function Login() {
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const credentials = {
      email: formData.get("email"),
      password: formData.get("password")
    }
    dispatch(loginUser(credentials))
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <label>
        Password:
        <input type="password" name="password" />
      </label>
      <button type="submit">Login</button>
    </form>
  )
}
export default Login