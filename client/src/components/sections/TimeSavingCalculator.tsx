import { useState, useEffect, useRef } from 'react';
import { calculateTimeSaved, formatNumber } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';

export default function TimeSavingCalculator() {
  const [age, setAge] = useState(30);
  const [expectancy, setExpectancy] = useState(75);
  const [savedTime, setSavedTime] = useState({ hours: 0, days: 0 });
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const result = calculateTimeSaved(age, expectancy);
    setSavedTime(result);
  }, [age, expectancy]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);

  const handleAgeSliderChange = (value: number[]) => {
    setAge(value[0]);
  };

  const handleExpectancySliderChange = (value: number[]) => {
    setExpectancy(value[0]);
  };

  const handleAgeInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0 && value <= 100) {
      setAge(value);
    }
  };

  const handleExpectancyInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0 && value <= 120) {
      setExpectancy(value);
    }
  };

  return (
    <section 
      id="learn-more" 
      ref={sectionRef}
      className="py-20 md:py-28 relative overflow-hidden"
    >
      {/* Royal gradient background with pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-primary/5 to-secondary/5"></div>
      
      {/* Background blur elements */}
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute top-20 -right-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl opacity-20"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM3OTIyZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0xaDJ2NGgtMnYtNHptLTggMGgxdjNoLTF2LTN6bS0yLTFoNHYyaC00di0yek0xMSA2aDN2MmgtM1Y2em0wIDNoMnYxaC0yVjl6bS0zIDBoMXYySDhWOXptMCAzaDJ2MUg4di0xek01IDloMXYxSDV2LTF6bTAtM2gzdjFINXYtMXoiLz48L2c+PC9nPjwvc3ZnPg==')] bg-repeat opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <h2 className="section-title text-3xl md:text-4xl font-bold mb-5">Time is Your Most Valuable Asset</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-5">
            The average person wastes over <span className="royal-gradient-text font-bold">1 year and 3 months</span> of their life waiting in lines and at appointments.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className={`w-full lg:w-5/12 transition-all duration-1000 transform ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="glass-card p-8 relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/4 translate-x-1/4 blur-lg"></div>
              
              <h3 className="text-2xl font-bold mb-6 gradient-text inline-block">Calculate Your Time Savings</h3>
              
              <div className="mb-8">
                <div className="mb-6">
                  <Label htmlFor="age" className="text-sm font-medium text-gray-800 mb-3 block">Your Current Age: {age} years</Label>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="flex-1">
                      <Slider
                        value={[age]}
                        min={1}
                        max={100}
                        step={1}
                        onValueChange={handleAgeSliderChange}
                        className="my-4"
                      />
                    </div>
                    <div className="w-16">
                      <Input
                        id="age"
                        type="number"
                        value={age}
                        min={1}
                        max={100}
                        onChange={handleAgeInputChange}
                        className="text-center"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <Label htmlFor="expectancy" className="text-sm font-medium text-gray-800 mb-3 block">Life Expectancy: {expectancy} years</Label>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="flex-1">
                      <Slider
                        value={[expectancy]}
                        min={30}
                        max={120}
                        step={1}
                        onValueChange={handleExpectancySliderChange}
                        className="my-4"
                      />
                    </div>
                    <div className="w-16">
                      <Input
                        id="expectancy"
                        type="number"
                        value={expectancy}
                        min={30}
                        max={120}
                        onChange={handleExpectancyInputChange}
                        className="text-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="royal-gradient rounded-lg p-6 text-white shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoNHYxaC00di0xem0wLTJoMXY0aC0xdi00em0yLTFoMnY0aC0ydi00em0tOCAwaDF2M2gtMXYtM3ptLTItMWg0djJoLTR2LTJ6TTExIDZoM3YyaC0zVjZ6bTAgM2gydjFoLTJWOXptLTMgMGgxdjJIOFY5em0wIDNoMnYxSDh2LTF6TTUgOWgxdjFINXYtMXptMC0zaDN2MUg1di0xeiIvPjwvZz48L2c+PC9zdmc+')] bg-repeat opacity-20"></div>
                
                <h4 className="text-xl font-medium mb-2">Your Potential Time Savings:</h4>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-4xl font-bold">{formatNumber(savedTime.hours)}</p>
                    <p className="text-sm uppercase tracking-wider">Hours Saved</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-2xl mb-1">≈</div>
                  </div>
                  <div>
                    <p className="text-4xl font-bold">{formatNumber(savedTime.days)}</p>
                    <p className="text-sm uppercase tracking-wider">Days of Life</p>
                  </div>
                </div>
                
                <div className="mt-4 text-white/80 text-sm">
                  That's over {Math.floor(savedTime.days / 30)} months of your precious life reclaimed with AppointKaro.
                </div>
              </div>
            </div>
          </div>
          
          <div className={`w-full lg:w-6/12 transition-all duration-1000 delay-300 transform ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="bg-white rounded-xl shadow-xl p-8 mb-8 relative">
              <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-primary/10 blur-lg"></div>
              <h3 className="text-2xl font-bold mb-4 royal-gradient-text inline-block">Why Time Matters</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full royal-gradient flex-shrink-0 flex items-center justify-center text-white">
                    <i className="fas fa-history"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Lost Time Never Returns</h4>
                    <p className="text-gray-600">Unlike money, time is a resource you can never earn back. Every moment spent waiting is gone forever.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full royal-gradient flex-shrink-0 flex items-center justify-center text-white">
                    <i className="fas fa-brain"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Mental Peace</h4>
                    <p className="text-gray-600">Waiting creates stress and anxiety. Scheduled appointments eliminate this mental burden.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full royal-gradient flex-shrink-0 flex items-center justify-center text-white">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Productivity Boost</h4>
                    <p className="text-gray-600">Use your saved time for productive activities, spending time with loved ones, or personal growth.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <img 
              src="https://images.unsplash.com/photo-1506485338023-6ce5f36692df?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=380&q=80" 
              alt="Person valuing their time" 
              className="rounded-xl shadow-lg w-full object-cover h-64"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
