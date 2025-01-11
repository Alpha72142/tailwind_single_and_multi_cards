import React from "react";

const PricingGridCards = () => {
  const cardInfo =[
    {
      header: 'Basic',
      pack:"100GB",
      price:"$1.99/Month",
      btn:"Purchase",
      listItems:["100 GB of storage","Option to add members","Extra member benefits"],
      background:"bg-slate-700",
      btnColor:""
    },
    {
      header: 'Standard',
      pack:"200GB",
      price:"$3.99/Month",
      btn:"Purchase",
      listItems:["200 GB of storage","Option to add members","Extra member benefits"],
      background:"bg-violet-600",
      btnColor:"bg-violet-600"
    },
    {
      header: 'Premium',
      pack:"2TB",
      price:"$8.99/Month",
      btn:"Purchase",
      listItems:["2TB of storage","Option to add members","Extra member benefits"],
      background:"bg-slate-700",
      btnColor:""
    },
  ]
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-800">
      <div className="flex flex-col my-6 space-y-6 md:space-y-0 md:space-x-6 md:flex-row md:my-0">
        {/* Columns */}
        {cardInfo.map((cardInfo) => (
          <div className={cardInfo.background+" rounded-xl text-white"}>
          {/* Upper Container*/}
          <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
            <div className="text-center uppercase">{cardInfo.header}</div>
            <h2 className="mt-10 font-serif text-5xl text-center">{cardInfo.pack}</h2>
            <h3 className="mt-2 text-center">{cardInfo.price}</h3>
            <div className="flex justify-center">
              <a href="/" className={"inline-block px-10 py-3 my-6 text-center border border-violet-600 rounded-lg hover:bg-violet-800 hover:border-violet-800 duration-200 "+ cardInfo.btnColor}>{cardInfo.btn}</a>
            </div>
          </div>
          {/* Border*/}
          <div className="border-t border-slate-700">
            {/* Lower Container*/}
            <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
              {/* List Container*/}
              <div className="flex flex-col space-y-2">
                {/* List Items*/}
                {cardInfo.listItems.map((listItem) => (
                  <div className="flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                     <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                     <path d="M5 12l5 5l10 -10" />
                    </svg>
                    <span className="text-sm ml-1">{listItem}</span>
                </div>
                ))} 
              </div>
            </div>
          </div>
        </div>
        ))}

      </div>
    </div>
  );
};

export default PricingGridCards;
