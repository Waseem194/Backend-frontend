import React from "react";

const LoginPage = () => {
  return (
    <div>
      <form>
        <input type="text" name="username" placeholder="username" />
        <input type="password" name="password" placeholder="password" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default LoginPage;
