import { useState } from "react";
import { Check } from "lucide-react";

interface PricingOption {
  quantity: number;
  price: number;
  popular?: boolean;
}

const pricingOptions: PricingOption[] = [
  { quantity: 1, price: 5 },
  { quantity: 3, price: 12, popular: true },
  { quantity: 6, price: 22 },
  { quantity: 9, price: 27 },
  { quantity: 20, price: 55 },
];

export function PricingCalculator() {
  const [selectedOption, setSelectedOption] = useState<PricingOption>(pricingOptions[1]);

  const pricePerMagnet = selectedOption.price / selectedOption.quantity;
  const savings = selectedOption.quantity > 1 
    ? ((5 * selectedOption.quantity) - selectedOption.price).toFixed(2)
    : "0.00";

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {pricingOptions.map((option) => (
          <button
            key={option.quantity}
            onClick={() => setSelectedOption(option)}
            className={`relative p-4 rounded-lg border-2 transition-all ${
              selectedOption.quantity === option.quantity
                ? 'border-amber-600 bg-amber-50'
                : 'border-gray-200 hover:border-amber-300'
            }`}
          >
            {option.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-amber-600 text-white text-xs px-3 py-1 rounded-full">
                  Popular
                </span>
              </div>
            )}
            
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">{option.quantity}</div>
              <div className="text-sm text-gray-600 mt-1">Magnets</div>
              <div className="text-2xl font-bold text-amber-600 mt-3">
                ${option.price}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                ${(option.price / option.quantity).toFixed(2)} each
              </div>
            </div>
            
            {selectedOption.quantity === option.quantity && (
              <div className="absolute top-2 right-2">
                <div className="w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
              </div>
            )}
          </button>
        ))}
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-700">Selected Quantity:</span>
          <span className="font-bold text-xl">{selectedOption.quantity} Magnets</span>
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-700">Price per Magnet:</span>
          <span className="font-semibold text-lg">${pricePerMagnet.toFixed(2)}</span>
        </div>
        
        {selectedOption.quantity > 1 && (
          <div className="flex justify-between items-center mb-4 text-green-600">
            <span>You Save:</span>
            <span className="font-semibold">${savings}</span>
          </div>
        )}
        
        <div className="border-t border-gray-200 pt-4 mt-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-gray-900">Total:</span>
            <span className="text-2xl font-bold text-amber-600">${selectedOption.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
