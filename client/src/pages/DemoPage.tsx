import React from 'react';
import { useNavigate } from 'react-router-dom'; // Or use wouter if you're using that

export default function DemoPage() {
  const navigate = useNavigate();

  const handleBackClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate('/');
  };

  const handleContinueClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    alert("Booking demo complete! In the full app, you would proceed through all 4 steps of the booking process.");
    navigate('/');
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white to-purple-50 pt-16 pb-24">
      <div className="absolute top-20 right-20 w-64 h-64 bg-purple-500 blur-[60px] opacity-20 rounded-full"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-pink-500 blur-[60px] opacity-20 rounded-full"></div>

      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <a href="/" onClick={handleBackClick} className="text-purple-600 flex items-center cursor-pointer">
            <i className="fas fa-arrow-left mr-2"></i>
            Back to Home
          </a>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white/90 backdrop-blur p-6 md:p-8 rounded-lg border border-purple-100 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-700 to-orange-400 rounded-full flex items-center justify-center text-white">
                <i className="fas fa-user-md"></i>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold ml-4">Doctor Appointments</h1>
            </div>

            {/* Progress Steps */}
            <div className="flex justify-between mb-6">
              {['Service', 'Schedule', 'Details', 'Confirm'].map((label, idx) => {
                const isActive = idx === 0;
                const classes = isActive
                  ? 'step-active bg-gradient-to-r from-purple-700 to-orange-400 text-white'
                  : 'step-inactive bg-gray-200 text-gray-500';
                return (
                  <div key={label} className="relative flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${classes}`}>
                      {idx + 1}
                    </div>
                    <span className="text-xs md:text-sm">{label}</span>
                    {idx < 3 && (
                      <div className="absolute top-4 left-full w-full h-0.5 bg-gray-200" style={{ width: 'calc(100% - 2rem)' }}></div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Service Options */}
            <div className="space-y-4 mb-8">
              <h2 className="text-xl font-semibold mb-4">Select Specialist</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: 'General Physician', price: '₹500', available: true, selected: true },
                  { name: 'Pediatrician', price: '₹800', available: true, selected: false },
                  { name: 'Orthopedic Specialist', price: '₹1,200', available: false, selected: false },
                  { name: 'Dermatologist', price: '₹1,000', available: true, selected: false },
                ].map(({ name, price, available, selected }, idx) => (
                  <label
                    key={idx}
                    className={`flex p-4 border rounded-lg cursor-pointer ${
                      available ? 'hover:bg-purple-50' : 'bg-gray-100 opacity-60 cursor-not-allowed'
                    } ${selected && available ? 'border-purple-500 bg-purple-50' : ''}`}
                  >
                    <div className="flex-1">
                      <div className="font-medium">{name}</div>
                      <div className="text-sm text-purple-600">{price}</div>
                    </div>
                    <div className="flex items-center">
                      {available ? (
                        <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center">
                          {selected && <div className="w-3 h-3 rounded-full bg-purple-500"></div>}
                        </div>
                      ) : (
                        <span className="text-red-500 text-xs">Not Available</span>
                      )}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between">
              <a
                href="/"
                onClick={handleBackClick}
                className="px-4 py-2 border border-purple-600 text-purple-600 rounded-md hover:bg-purple-50"
              >
                Cancel
              </a>

              <a
                href="/demo-step2.html"
                onClick={handleContinueClick}
                className="px-4 py-2 bg-gradient-to-r from-purple-700 to-orange-400 text-white rounded-md shadow-md"
              >
                Continue <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
