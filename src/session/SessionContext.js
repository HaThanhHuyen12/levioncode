import React, { createContext, useState } from 'react';

// Tạo một Context
export const SessionContext = createContext();

// Tạo một Provider cho Context
export const SessionProvider = ({ children }) => {
  const [session, setSession] = useState(null);

  // Các phương thức để cập nhật session
  const login = (user) => {
    setSession(user);
  };

  const logout = () => {
    setSession(null);
  };

  // Trả về Context.Provider với các giá trị và phương thức cần thiết
  return (
    <SessionContext.Provider value={{ session, login, logout }}>
      {children}
    </SessionContext.Provider>
  );
};
