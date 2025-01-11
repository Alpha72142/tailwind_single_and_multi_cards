
import "./App.css";
import EmailSubscribeCard from "./Component/email_subscribe_card/EmailSubscribeCard";
import PricingGrid from "./Component/pricing_grid_cards/PricingGridCards";
import ProductModal from "./Component/product_modal/ProductModal";

function App() {
  return (
    <div className="App">
      <EmailSubscribeCard/>
      <PricingGrid/>
      <ProductModal/>
    

    </div>
  );
}

export default App;
