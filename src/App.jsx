import React, { useState } from 'react';
import { Search, Plus, MoreVertical, X, Pencil, ChevronRight, Check, Menu, Trash2, ToggleLeft} from 'lucide-react';

const customers = [
  { id: 1, name: 'abhi', location: 'Noida / Uttar Pradesh', verified: true },
  { id: 2, name: 'A & D STEEL', gstin: '09AASCA7810Q1ZQ', location: 'Faridabad / Haryana' },
  { id: 3, name: 'A & D STEELS', gstin: '09AASCA7810Q1ZQ', location: 'Haryana' },
  { id: 4, name: 'A R TRADERS', gstin: '32ADFPM1861E1Z9', location: 'Kozhikode / Kerala' },
  { id: 5, name: 'A V KRISHNAIAH SETTY & BROTHER', gstin: '29AAFPA8165D1ZM', location: 'Karnataka' },
  { id: 6, name: 'A-Bee Associates', gstin: '09ADFPA8165D1ZM', location: 'Uttar Pradesh' },
  { id: 7, name: 'A.H.TRADERS', gstin: '18AAFPA8133F1Z1', location: 'Assam' },
  { id: 8, name: 'A.S Logistics', gstin: '07AAFPA8165D1ZU', location: 'Delhi' },
  { id: 9, name: 'Another Customer', gstin: '...', location: 'Someplace / State' },
  { id: 10, name: 'Test Inc', gstin: '...', location: 'Someplace / State' },
  { id: 11, name: 'Example Corp', gstin: '...', location: 'Someplace / State' },
  { id: 12, name: 'Final Customer', gstin: '...', location: 'Someplace / State' },
];

const tabs = ["Settings", "Address", "User", "Credit", "Retailer", "Ledger"];


const CustomScrollbarStyles = () => (
  <style>{`
    .custom-scrollbar::-webkit-scrollbar {
      width: 4px;  /* Reduced from 5px */
      height: 4px;  /* Added for horizontal scrollbars */
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 10px;
      margin: 10px 0;  /* Reduces effective scrollbar length */
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: #6b6b6b;  /* Slightly black (dark gray) */
      border-radius: 10px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: #5a5a5a;  /* Slightly darker on hover */
    }
  `}</style>
);

export default function App() {
  const [selectedCustomer, setSelectedCustomer] = useState(customers[0]);

  return (
    <>
      <CustomScrollbarStyles />
      <div className="h-screen w-screen bg-white font-sans flex flex-col antialiased">
        
        {/* Header */}
        <header className="bg-[#6B21A8] shadow-md z-30">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-12">

              <div className="">
                 {selectedCustomer && (
                    <button onClick={() => setSelectedCustomer(null)} className="text-white">
                        <Menu size={24} />
                    </button>
                 )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="relative max-w-md mx-auto">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="search"
                    className="block w-full bg-white border border-transparent rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-300 text-white focus:outline-none focus:bg-white focus:text-gray-900 focus:placeholder-gray-500 sm:text-sm"
                    placeholder="Search Company"
                    type="search"
                  />
                </div>
              </div>

              <div className="hidden md:block ml-4">
                <div className="flex items-center">
                  <p className="text-sm text-purple-200">Logged in as: <span className="font-semibold text-white">Niyati India Pvt. Ltd.</span></p>
                </div>
              </div>
               <div className="md:hidden w-8"> {/* Spacer to balance the hamburger icon */}
               </div>
            </div>
          </div>
        </header>

        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">

          {/* Sidebar */}
          <aside className={`w-full bg-gray-100 px-2 md:w-80 lg:w-96 border-r border-gray-200 flex flex-col ${selectedCustomer ? 'hidden md:flex' : 'flex'}`}>
            
            <div className="p-4">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold text-gray-800">Customer</h2>
                <button className="text-gray-500 hover:text-gray-800 bg-gray-500 rounded-full">
                  <Plus size={20} className='text-white' />
                </button>
              </div>
              <div className="flex justify-start items-center mt-2 gap-2">
                <p className="text-sm text-gray-500">1413 results</p>
                <button className="text-xs font-semibold text-gray-900 bg-gray-300 rounded-full px-3 py-1">
                  Enabled ×
                </button>
              </div>
            </div>

            
            <ul className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-2 bg-gray-50/50">
              {customers.map(customer => (
                <li
                  key={customer.id}
                  onClick={() => {
                    setSelectedCustomer(customer);
                  }}
                  className={`p-5 cursor-pointer bg-white rounded-sm shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 ${selectedCustomer?.id === customer.id ? ' shadow-xl' : ''}`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-sm text-gray-800">{customer.name}</p>
                      <p className="text-xs text-gray-500">{customer.location}</p>
                      {customer.gstin && <p className="text-xs text-gray-400 mt-1">{customer.gstin}</p>}
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreVertical size={20} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </aside>

          {/* Main  */}
          <main className={`flex-1 bg-gray-50 flex flex-col overflow-y-auto ${selectedCustomer ? 'flex' : 'hidden md:flex'}`}>
            {selectedCustomer ? (
              <>
                {/* Sticky Header Container */}
                <div className="sticky top-0 z-10 bg-white shadow-sm">
                  <div className="p-4 border-b border-gray-200">
                    {/* Top part with name and close button */}
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center space-x-3">
                        <h2 className=" text-gray-600">{selectedCustomer.name}</h2>
                        <button className="text-gray-600 hover:text-purple-600"><Pencil size={16} /></button>
                      </div>
                      <div className="flex items-center space-x-4">
                        <button onClick={() => setSelectedCustomer(null)} className="text-gray-500 hover:text-gray-800">
                          <X size={24} />
                        </button>
                      </div>
                    </div>

                    <div className="text-sm text-gray-500 space-y-1">
                      <div className="flex justify-between items-center w-full">
                      <p>India</p>
                      <div className="flex space-x-6 cursor-pointer ml-10">
                        <Trash2 size={18} color="#ed0c0c" />
                        <ToggleLeft size={25} color="#03bf54" />
                      </div>
                    </div>

                      <p className='text-gray-400'>GSTIN/UIN: <span className="text-gray-400 font-medium">PAN</span> <button className="text-gray-400 hover:text-purple-600"><Pencil size={16} /></button> </p>
                      <p className='text-gray-400'>Mobile Number: <span className="text-gray-400 font-medium">Landline Number</span> <button className="text-gray-400 hover:text-purple-600"><Pencil size={16} /></button> </p>
                      <div className="flex gap-1">
                          <a href="" className="text-gray-600 hover:underline block">abhishek@poorva.com</a>
                           <button className="text-gray-400 hover:text-purple-600"><Pencil size={16} /></button>
                      </div>
                    </div>
                  </div>

                  {/* Tabs Navigation */}
                  <div className="bg-white border-b border-gray-200">
                  <nav className="-mb-px flex space-x-6 px-4 overflow-x-auto" aria-label="Tabs">
                    {tabs.map((tab) => (
                      <button 
                        key={tab} 
                        className={`whitespace-nowrap py-1 px-1  font-medium text-sm ${
                          tab === 'Settings' 
                            ? 'bg-gray-100 text-gray-700 w-28 p-4 m-1 ' 
                            : 'text-gray-500 hover:text-gray-700'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </nav>
                </div>

                </div>
                
                {/* Tab Content */}
                <div className="p-4 sm:p-6">
                    <div className="space-y-7">

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {['Backorder', 'Payment Reminder', 'Notification', 'SEZ / EOU', '0.1% Export Tax'].map((label, index) => (
                      <div key={label} className="relative flex flex-col items-center justify-center p-3 border border-gray-200 rounded-lg bg-white text-center h-full min-h-[70px]">
                        <p className="text-sm font-medium text-gray-700 flex items-center justify-center h-full px-2">
                          {label}
                        </p>
                        {[0,1,2].includes(index) && (
                          <Check className="w-5 h-5 absolute top-1 right-1 text-green-500" />
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="bg-white rounded-lg">
                    <div className="flex justify-between items-center p-5 border-b border-gray-200"><p className="text-sm text-gray-400">Wallet Discount %</p><p className="text-sm font-semibold text-gray-400">100</p></div>
                    <div className="flex justify-between items-center p-5 border-b border-gray-200"><p className="text-sm text-gray-400">Tax Discount %</p><p className="text-sm font-semibold text-gray-400">11</p></div>
                    <div className="flex justify-between items-center p-5 border-b border-gray-200"><p className="text-sm text-gray-400">TCS %</p><p className="text-sm font-semibold text-gray-400">0</p></div>
                    
                    <div className="flex items-center p-5 border-b border-gray-200">
                      <p className="text-sm text-gray-400 w-2/5">Price List</p>
                      <div className="flex items-center space-x-2 text-gray-500 w-1/5">
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-400">Catalog</span>
                      </div>
                      <div className="flex items-center space-x-2 justify-end w-2/5">
                          <p className="text-sm font-semibold text-gray-400">80</p>
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                      </div>
                    </div>

                    <div className="flex items-center p-5">
                      <p className="text-sm text-gray-400 w-2/5">Groups</p> <span className='text-gray-400 text-base'>3</span>
                      <div className="flex items-center space-x-2 text-gray-400 w-1/5">
                          <ChevronRight className="w-4 h-4" />
                          <span className="text-gray-400">Company Type</span>
                      </div>
                      <div className="flex items-center space-x-2 justify-end w-2/5">
                          <p className="text-sm font-semibold text-gray-400">Debtor</p>
                          
                      </div>
                    </div>

                      </div>
                    </div>
                </div>
              </>
            ) : (
              <div className="flex-1 hidden md:flex items-center justify-center bg-gray-50 h-full">
                <p className="text-gray-500">Select a customer to see details</p>
              </div>
            )}
          </main>

        </div>


      </div>
    </>
  );
}
