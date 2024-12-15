import React from 'react';

const QRCode = () => {
  return (
    <div className="bg-amber-50 p-6 rounded-lg shadow-md inline-block">
      <div className="flex flex-col items-center space-y-4">
        <div className="bg-white p-3 rounded-lg">
          <img 
            src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://sophittrainingco.com&bgcolor=FFFFFF`}
            alt="Website QR Code"
            className="w-48 h-48"
          />
        </div>
        <p className="text-sm text-gray-600 font-medium">Scan to visit sophittrainingco.com</p>
      </div>
    </div>
  );
};

export default QRCode;