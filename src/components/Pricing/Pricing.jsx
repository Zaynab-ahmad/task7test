import { useState } from "react";
import ToggleButton from '../Button/ToggleButton/ToggleButton';
import PricingCard from '../Cards/PricingCard/PricingCard';
import Title from '../Title/Title';
import './Pricing.css';

export default function Pricing() {
  const [isMonthly, setIsMonthly] = useState(true);

  const handleToggle = (value) => {
    setIsMonthly(value);
  };

  return (
    <div className="exContainer pricing-section bg-white">
      <Title title="Our Pricing" heading="Our Awesome Pricing Plans" />
      
      <ToggleButton onToggle={handleToggle} /> 

      <div className="pricing-cards-container">
        
        <PricingCard isMonthly={isMonthly} />
        <PricingCard isMonthly={isMonthly} dark={true}/>
        <PricingCard isMonthly={isMonthly} />
      </div>
    </div>
  );
}
