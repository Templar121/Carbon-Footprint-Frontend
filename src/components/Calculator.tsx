import React, { useState } from 'react';
import { Activity, BarChart, FileText, Award } from 'lucide-react';

interface FormData {
  "Body Type": string;
  "Sex": string;
  "Diet": string;
  "How Often Shower": string;
  "Heating Energy Source": string;
  "Transport": string;
  "Social Activity": string;
  "Monthly Grocery Bill": string;
  "Frequency of Traveling by Air": string;
  "Vehicle Monthly Distance Km": string;
  "Waste Bag Size": string;
  "Waste Bag Weekly Count": string;
  "How Long TV PC Daily Hour": string;
  "How Many New Clothes Monthly": string;
  "How Long Internet Daily Hour": string;
  "Energy efficiency": string;
}

const Calculator: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    "Body Type": '',
    "Sex": '',
    "Diet": '',
    "How Often Shower": '',
    "Heating Energy Source": '',
    "Transport": '',
    "Social Activity": '',
    "Monthly Grocery Bill": '',
    "Frequency of Traveling by Air": '',
    "Vehicle Monthly Distance Km": '',
    "Waste Bag Size": '',
    "Waste Bag Weekly Count": '',
    "How Long TV PC Daily Hour": '',
    "How Many New Clothes Monthly": '',
    "How Long Internet Daily Hour": '',
    "Energy efficiency": ''
  });

  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      // First, train the model
      const trainResponse = await fetch('https://carbon-footprint-estimation.onrender.com/train');
      if (!trainResponse.ok) throw new Error('Failed to train model');
      
      // Then make the prediction
      const response = await fetch('https://carbon-footprint-estimation.onrender.com/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          "Monthly Grocery Bill": Number(formData["Monthly Grocery Bill"]),
          "Vehicle Monthly Distance Km": Number(formData["Vehicle Monthly Distance Km"]),
          "Waste Bag Weekly Count": Number(formData["Waste Bag Weekly Count"]),
          "How Long TV PC Daily Hour": Number(formData["How Long TV PC Daily Hour"]),
          "How Many New Clothes Monthly": Number(formData["How Many New Clothes Monthly"]),
          "How Long Internet Daily Hour": Number(formData["How Long Internet Daily Hour"])
        }),
      });

      if (!response.ok) throw new Error('Prediction failed');
      
      const data = await response.json();
      setResult(data.CarbonEmission);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="calculator" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-emerald-950/50 to-transparent"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Calculate Your Carbon Footprint
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-300 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300">
            Fill in your lifestyle details to get an estimate of your carbon footprint and personalized recommendations for reduction.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {result !== null && (
            <div className="mb-8 p-6 bg-gradient-to-br from-emerald-900/40 to-emerald-800/20 backdrop-blur-sm rounded-xl border border-emerald-800/30 shadow-lg">
              <h3 className="text-2xl font-bold text-emerald-300 mb-2">Your Carbon Footprint Result</h3>
              <p className="text-xl text-white">
                {result.toFixed(2)} kg CO₂ equivalent per year
              </p>
            </div>
          )}

          {error && (
            <div className="mb-8 p-6 bg-red-900/40 backdrop-blur-sm rounded-xl border border-red-800/30 shadow-lg">
              <p className="text-red-300">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-gradient-to-br from-slate-900/90 to-emerald-900/20 backdrop-blur-sm p-8 rounded-xl border border-emerald-800/30 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-emerald-300 mb-2">Body Type</label>
                <select
                  name="Body Type"
                  value={formData["Body Type"]}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-emerald-800/50 text-white focus:outline-none focus:border-emerald-500"
                  required
                >
                  <option value="">Select Body Type</option>
                  <option value="0">Underweight</option>
                  <option value="1">Normal</option>
                  <option value="2">Overweight</option>
                  <option value="3">Obese</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-emerald-300 mb-2">Sex</label>
                <select
                  name="Sex"
                  value={formData["Sex"]}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-emerald-800/50 text-white focus:outline-none focus:border-emerald-500"
                  required
                >
                  <option value="">Select Sex</option>
                  <option value="0">Male</option>
                  <option value="1">Female</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-emerald-300 mb-2">Diet</label>
                <select
                  name="Diet"
                  value={formData["Diet"]}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-emerald-800/50 text-white focus:outline-none focus:border-emerald-500"
                  required
                >
                  <option value="">Select Diet</option>
                  <option value="0">Vegan</option>
                  <option value="1">Vegetarian</option>
                  <option value="2">Omnivore</option>
                  <option value="3">Pescatarian</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-emerald-300 mb-2">How Often Shower</label>
                <select
                  name="How Often Shower"
                  value={formData["How Often Shower"]}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-emerald-800/50 text-white focus:outline-none focus:border-emerald-500"
                  required
                >
                  <option value="">Select Frequency</option>
                  <option value="0">Daily</option>
                  <option value="1">Twice a Day</option>
                  <option value="2">More Frequently</option>
                  <option value="3">Less Frequently</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-emerald-300 mb-2">Heating Energy Source</label>
                <select
                  name="Heating Energy Source"
                  value={formData["Heating Energy Source"]}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-emerald-800/50 text-white focus:outline-none focus:border-emerald-500"
                  required
                >
                  <option value="">Select Energy Source</option>
                  <option value="0">Electricity</option>
                  <option value="1">Natural Gas</option>
                  <option value="2">Coal</option>
                  <option value="3">Wood</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-emerald-300 mb-2">Transport</label>
                <select
                  name="Transport"
                  value={formData["Transport"]}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-emerald-800/50 text-white focus:outline-none focus:border-emerald-500"
                  required
                >
                  <option value="">Select Transport Mode</option>
                  <option value="0">Public</option>
                  <option value="1">Walk/Bicycle</option>
                  <option value="2">Private</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-emerald-300 mb-2">Social Activity</label>
                <select
                  name="Social Activity"
                  value={formData["Social Activity"]}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-emerald-800/50 text-white focus:outline-none focus:border-emerald-500"
                  required
                >
                  <option value="">Select Social Activity</option>
                  <option value="0">Never</option>
                  <option value="1">Often</option>
                  <option value="2">Sometimes</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-emerald-300 mb-2">Monthly Grocery Bill</label>
                <input
                  type="number"
                  name="Monthly Grocery Bill"
                  value={formData["Monthly Grocery Bill"]}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-emerald-800/50 text-white focus:outline-none focus:border-emerald-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-emerald-300 mb-2">Air Travel Frequency</label>
                <select
                  name="Frequency of Traveling by Air"
                  value={formData["Frequency of Traveling by Air"]}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-emerald-800/50 text-white focus:outline-none focus:border-emerald-500"
                  required
                >
                  <option value="">Select Frequency</option>
                  <option value="0">Never</option>
                  <option value="1">Rarely</option>
                  <option value="2">Very Frequently</option>
                  <option value="3">Frequently</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-emerald-300 mb-2">Monthly Vehicle Distance (km)</label>
                <input
                  type="number"
                  name="Vehicle Monthly Distance Km"
                  value={formData["Vehicle Monthly Distance Km"]}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-emerald-800/50 text-white focus:outline-none focus:border-emerald-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-emerald-300 mb-2">Waste Bag Size</label>
                <select
                  name="Waste Bag Size"
                  value={formData["Waste Bag Size"]}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-emerald-800/50 text-white focus:outline-none focus:border-emerald-500"
                  required
                >
                  <option value="">Select Size</option>
                  <option value="0">Small</option>
                  <option value="1">Medium</option>
                  <option value="2">Large</option>
                  <option value="3">Extra Large</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-emerald-300 mb-2">Weekly Waste Bags</label>
                <input
                  type="number"
                  name="Waste Bag Weekly Count"
                  value={formData["Waste Bag Weekly Count"]}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-emerald-800/50 text-white focus:outline-none focus:border-emerald-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-emerald-300 mb-2">Daily TV/PC Usage (hours)</label>
                <input
                  type="number"
                  name="How Long TV PC Daily Hour"
                  value={formData["How Long TV PC Daily Hour"]}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-emerald-800/50 text-white focus:outline-none focus:border-emerald-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-emerald-300 mb-2">Monthly New Clothes</label>
                <input
                  type="number"
                  name="How Many New Clothes Monthly"
                  value={formData["How Many New Clothes Monthly"]}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-emerald-800/50 text-white focus:outline-none focus:border-emerald-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-emerald-300 mb-2">Daily Internet Usage (hours)</label>
                <input
                  type="number"
                  name="How Long Internet Daily Hour"
                  value={formData["How Long Internet Daily Hour"]}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-emerald-800/50 text-white focus:outline-none focus:border-emerald-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-emerald-300 mb-2">Energy Efficiency</label>
                <select
                  name="Energy efficiency"
                  value={formData["Energy efficiency"]}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-emerald-800/50 text-white focus:outline-none focus:border-emerald-500"
                  required
                >
                  <option value="">Select Energy Efficiency</option>
                  <option value="0">Sometimes</option>
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </select>
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 px-6 bg-gradient-to-r from-emerald-600 to-teal-500 rounded-lg font-semibold text-white shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    <span>Calculating...</span>
                  </>
                ) : (
                  <>
                    <Activity className="w-5 h-5" />
                    <span>Calculate Footprint</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Calculator;