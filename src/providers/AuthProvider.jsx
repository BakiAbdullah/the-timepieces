import React from 'react';

const AuthContext = createContext(null);
const AuthProvider = () => {
  const user = {displayName : 'Sagor Nodi'}
  return (
    <AuthContext.Provider>
      
    </AuthContext.Provider>
  );
};

export default AuthProvider;                                                        