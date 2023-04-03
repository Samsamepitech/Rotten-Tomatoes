import { useState, useEffect } from "react";
import { NavLink } from "../components/NavLink";
import { userService } from "../services/user.service";

export { Nav };

function Nav() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscription = userService.user.subscribe((x) => setUser(x));
    return () => subscription.unsubscribe();
  }, []);

  function logout() {
    userService.logout();
  }

  // only show nav when logged in
  // if (!user) return null;

  return (
    <nav className="navbar navbar-expand">
      <div className="navbar-nav">
        <div className="navbar-brand">
          <div className="flex">
          <img src="#" width="40" />
          <p>Rotten Tomatoes</p>
          </div>
        </div>
        <NavLink href="/" exact className="nav-item nav-link">
          Home
        </NavLink>
        {!user ? (
          <NavLink href="/account/register" className="nav-item nav-link">
            Register
          </NavLink>
        ) : (
          <>
            {userService.userValue?.role === "user" ? (
              <NavLink href="/profile" className="nav-item nav-link">
                Profile
              </NavLink>
            ) : (
              <>
                <NavLink href="/profile" className="nav-item nav-link">
                  Profile Admin
                </NavLink>
              </>
            )}
            <a onClick={logout} className="nav-item nav-link">
              Logout
            </a>
          </>
        )}
         <NavLink href="/account/login" className="nav-item nav-link">
            Login
          </NavLink>
      </div>
    </nav>
  );
}