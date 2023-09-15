import { useAuth } from "../../hooks"

export function HomeAdmin() {
  const {logout} = useAuth();
  return (
    <div>
      <p>Home Admin</p>
      <button onClick={logout}>Logout</button>
    </div>
  )
}
