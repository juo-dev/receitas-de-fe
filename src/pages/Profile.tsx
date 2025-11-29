import { FC } from 'react';

const Profile: FC = () => {
  return (
    <div className="min-h-screen bg-[#EEEEEE]">
      <header className="p-4" style={{ backgroundColor: '#FFCC00' }}>
        <h1 className="text-2xl font-bold text-dark text-center">Assinatura</h1>
      </header>

      <div className="p-4">
        <div className="bg-gray-100 rounded-lg p-6 text-center">
          <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-3xl">👤</span>
          </div>
          <h2 className="text-xl font-bold text-dark mb-2">Bem-vindo!</h2>
          <p className="text-gray-400">Gerencie sua conta e assinatura</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
