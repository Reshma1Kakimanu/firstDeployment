import { useState, useEffect } from 'react';
import { calculateTimeSaved, formatNumber } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function TimeSavingCalculator() {
  const [age, setAge] = useState(30);
  const [expectancy, setExpectancy] = useState(75);
  const [savedTime, setSavedTime] = useState({ hours: 0, days: 0 });

  useEffect(() => {
    const result = calculateTimeSaved(age, expectancy);
    setSavedTime(result);
  }, [age, expectancy]);

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0 && value <= 100) {
      setAge(value);
    }
  };

  const handleExpectancyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0 && value <= 120) {
      setExpectancy(value);
    }
  };

  return (
    <section id="learn-more" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Time is Your Most Valuable Asset</h2>
            <p className="text-lg text-gray-600 mb-4">
              The average person wastes over <span className="font-bold text-primary">1 year and 3 months</span> of their life waiting in lines and at appointments.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              At AppointKaro, we believe your time is precious. Our platform helps you reclaim those lost hours by scheduling appointments exactly when you need them.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-bold mb-4">How much time could you save?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <Label htmlFor="age" className="text-sm font-medium text-gray-700 mb-1">Your Current Age</Label>
                  <Input
                    id="age"
                    type="number"
                    value={age}
                    min={1}
                    max={100}
                    onChange={handleAgeChange}
                    className="w-full"
                  />
                </div>
                <div>
                  <Label htmlFor="expectancy" className="text-sm font-medium text-gray-700 mb-1">Life Expectancy</Label>
                  <Input
                    id="expectancy"
                    type="number"
                    value={expectancy}
                    min={1}
                    max={120}
                    onChange={handleExpectancyChange}
                    className="w-full"
                  />
                </div>
              </div>
              <div className="mt-4 p-4 bg-primary/10 rounded-lg border-l-4 border-primary">
                <p className="mb-1 text-gray-800 font-medium">You could save approximately:</p>
                <p className="text-3xl font-bold text-primary">{formatNumber(savedTime.hours)} hours</p>
                <p className="text-sm text-gray-600">That's equivalent to {formatNumber(savedTime.days)} days of your life!</p>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=500&q=80" 
              alt="Time saving concept" 
              className="rounded-lg shadow-md w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
