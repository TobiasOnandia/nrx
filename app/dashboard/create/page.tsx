export default function DashboardCustomizer() {
    return (
      <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold">Customize Your Dashboard</h1>
              <p className="text-gray-400">Drag and drop widgets to create your perfect view</p>
            </div>
            <div className="flex space-x-3">
              <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                Reset Layout
              </button>
              <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors">
                Save Dashboard
              </button>
            </div>
          </div>
  
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Sidebar - Widgets disponibles */}
            <div className="lg:w-1/4 bg-gray-800 p-4 rounded-xl h-fit">
              <h2 className="text-xl font-semibold mb-4">Available Widgets</h2>
              
              <div className="space-y-3">
                <div className="p-4 bg-gray-700 rounded-lg cursor-move">
                  <h3 className="font-medium flex items-center">
                    <span className="w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
                    Price Chart
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">Line, candlestick or area charts</p>
                </div>
                
                <div className="p-4 bg-gray-700 rounded-lg cursor-move">
                  <h3 className="font-medium flex items-center">
                    <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                    Market Table
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">Top cryptocurrencies data</p>
                </div>
                
                <div className="p-4 bg-gray-700 rounded-lg cursor-move">
                  <h3 className="font-medium flex items-center">
                    <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                    Portfolio Summary
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">Your holdings overview</p>
                </div>
                
                <div className="p-4 bg-gray-700 rounded-lg cursor-move">
                  <h3 className="font-medium flex items-center">
                    <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                    Market Metrics
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">Key indicators cards</p>
                </div>
              </div>
  
              <div className="mt-6">
                <h3 className="font-semibold mb-3">Preferred Coins</h3>
                <div className="flex flex-wrap gap-2">
                  {['BTC', 'ETH', 'SOL', 'XRP', 'ADA', 'DOT', 'MATIC', 'AVAX'].map(coin => (
                    <div key={coin} className="px-3 py-1 bg-gray-700 rounded-full flex items-center">
                      {coin}
                      <button className="ml-1 text-gray-400 hover:text-white">
                        &times;
                      </button>
                    </div>
                  ))}
                  <button className="px-3 py-1 bg-gray-700 rounded-full flex items-center text-emerald-500">
                    + Add Coin
                  </button>
                </div>
              </div>
            </div>
  
            {/* Área principal - Dashboard */}
            <div className="lg:w-3/4 space-y-6">
              {/* Sección superior - 2 columnas */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-800 p-4 rounded-xl h-64">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium">BTC Price (7D)</h3>
                    <div className="flex space-x-2">
                      <button className="text-gray-400 hover:text-white">
                        ⚙️
                      </button>
                      <button className="text-gray-400 hover:text-white">
                        &times;
                      </button>
                    </div>
                  </div>
                  <div className="bg-gray-700 rounded-lg h-44 animate-pulse"></div>
                </div>
                
                <div className="bg-gray-800 p-4 rounded-xl">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium">Market Overview</h3>
                    <div className="flex space-x-2">
                      <button className="text-gray-400 hover:text-white">
                        ⚙️
                      </button>
                      <button className="text-gray-400 hover:text-white">
                        &times;
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-700 p-3 rounded-lg">
                      <div className="text-gray-400 text-sm">Market Cap</div>
                      <div className="text-xl font-bold">$2.43T</div>
                    </div>
                    <div className="bg-gray-700 p-3 rounded-lg">
                      <div className="text-gray-400 text-sm">24h Volume</div>
                      <div className="text-xl font-bold">$98.7B</div>
                    </div>
                    <div className="bg-gray-700 p-3 rounded-lg">
                      <div className="text-gray-400 text-sm">BTC Dominance</div>
                      <div className="text-xl font-bold">42.5%</div>
                    </div>
                    <div className="bg-gray-700 p-3 rounded-lg">
                      <div className="text-gray-400 text-sm">Fear & Greed</div>
                      <div className="text-xl font-bold text-emerald-500">68</div>
                    </div>
                  </div>
                </div>
              </div>
  
              {/* Sección media - Tabla */}
              <div className="bg-gray-800 rounded-xl overflow-hidden">
                <div className="flex justify-between items-center p-4">
                  <h3 className="font-medium">Top Cryptocurrencies</h3>
                  <div className="flex space-x-2">
                    <button className="text-gray-400 hover:text-white">
                      ⚙️
                    </button>
                    <button className="text-gray-400 hover:text-white">
                      &times;
                    </button>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-700">
                      <tr>
                        <th className="px-6 py-3 text-left">#</th>
                        <th className="px-6 py-3 text-left">Coin</th>
                        <th className="px-6 py-3 text-right">Price</th>
                        <th className="px-6 py-3 text-right">24h</th>
                        <th className="px-6 py-3 text-right">Market Cap</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[1, 2, 3, 4].map((item) => (
                        <tr key={item} className="border-b border-gray-700 hover:bg-gray-750">
                          <td className="px-6 py-4">{item}</td>
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              <div className="w-6 h-6 bg-gray-600 rounded-full mr-3"></div>
                              <span>Bitcoin</span>
                              <span className="text-gray-400 ml-2">BTC</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-right">$63,421.50</td>
                          <td className="px-6 py-4 text-right text-emerald-500">+2.4%</td>
                          <td className="px-6 py-4 text-right">$1.20T</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
  
              {/* Sección inferior - Gráfico adicional */}
              <div className="bg-gray-800 p-4 rounded-xl">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium">ETH/BTC Correlation</h3>
                  <div className="flex space-x-2">
                    <button className="text-gray-400 hover:text-white">
                      ⚙️
                    </button>
                    <button className="text-gray-400 hover:text-white">
                      &times;
                    </button>
                  </div>
                </div>
                <div className="bg-gray-700 rounded-lg h-64 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }