import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Package, 
  ArrowRightLeft, 
  AlertTriangle, 
  ShoppingCart, 
  BarChart3, 
  Users, 
  Settings,
  Plus,
  Search,
  Download,
  Edit,
  Trash2,
  Eye,
  FileText,
  Calendar,
  User,
  LogOut,
  Menu,
  X
} from 'lucide-react';

const TimberCorpSystem = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: 'Sashan Fernando',
    role: 'Admin',
    branch: 'Colombo Central'
  });

  // Sample data for demonstration
  const [stockData, setStockData] = useState([
    { id: 1, type: 'Teak', species: 'Tectona grandis', quantity: 150, unit: 'Cubic Feet', location: 'Yard A', status: 'Available', lastUpdated: '2024-06-20' },
    { id: 2, type: 'Mahogany', species: 'Swietenia macrophylla', quantity: 89, unit: 'Cubic Feet', location: 'Yard B', status: 'Available', lastUpdated: '2024-06-19' },
    { id: 3, type: 'Jak', species: 'Artocarpus heterophyllus', quantity: 45, unit: 'Cubic Feet', location: 'Yard C', status: 'Reserved', lastUpdated: '2024-06-18' }
  ]);

  const [transferData, setTransferData] = useState([
    { id: 1, from: 'Colombo Central', to: 'Kandy Branch', type: 'Teak', quantity: 25, status: 'In Transit', date: '2024-06-22', reference: 'TR001' },
    { id: 2, from: 'Galle Branch', to: 'Colombo Central', type: 'Mahogany', quantity: 15, status: 'Completed', date: '2024-06-21', reference: 'TR002' }
  ]);

  const [damageReports, setDamageReports] = useState([
    { id: 1, type: 'Teak', quantity: 5, reason: 'Water damage', date: '2024-06-20', reportedBy: 'John Silva', status: 'Pending' },
    { id: 2, type: 'Mahogany', quantity: 2, reason: 'Insect damage', date: '2024-06-19', reportedBy: 'Mary Perera', status: 'Approved' }
  ]);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'stock', label: 'Stock Management', icon: Package },
    { id: 'transfers', label: 'Stock Transfers', icon: ArrowRightLeft },
    { id: 'damage', label: 'Damage/Loss', icon: AlertTriangle },
    { id: 'procurement', label: 'Procurement', icon: ShoppingCart },
    { id: 'reports', label: 'Reports', icon: BarChart3 },
    { id: 'users', label: 'User Management', icon: Users },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  // const Dashboard = () => (
  //   <div className="space-y-6">
  //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  //       <div className="bg-white p-6 rounded-lg shadow-sm border">
  //         <div className="flex items-center justify-between">
  //           <div>
  //             <p className="text-sm text-gray-600">Total Stock</p>
  //             <p className="text-2xl font-bold text-green-600">284</p>
  //           </div>
  //           <Package className="w-8 h-8 text-green-600" />
  //         </div>
  //       </div>
  //       <div className="bg-white p-6 rounded-lg shadow-sm border">
  //         <div className="flex items-center justify-between">
  //           <div>
  //             <p className="text-sm text-gray-600">Active Transfers</p>
  //             <p className="text-2xl font-bold text-blue-600">12</p>
  //           </div>
  //           <ArrowRightLeft className="w-8 h-8 text-blue-600" />
  //         </div>
  //       </div>
  //       <div className="bg-white p-6 rounded-lg shadow-sm border">
  //         <div className="flex items-center justify-between">
  //           <div>
  //             <p className="text-sm text-gray-600">Damage Reports</p>
  //             <p className="text-2xl font-bold text-red-600">7</p>
  //           </div>
  //           <AlertTriangle className="w-8 h-8 text-red-600" />
  //         </div>
  //       </div>
  //       <div className="bg-white p-6 rounded-lg shadow-sm border">
  //         <div className="flex items-center justify-between">
  //           <div>
  //             <p className="text-sm text-gray-600">Monthly Value</p>
  //             <p className="text-2xl font-bold text-purple-600">₨2.5M</p>
  //           </div>
  //           <BarChart3 className="w-8 h-8 text-purple-600" />
  //         </div>
  //       </div>
  //     </div>

  //     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
  //       <div className="bg-white p-6 rounded-lg shadow-sm border">
  //         <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
  //         <div className="space-y-3">
  //           <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded">
  //             <Package className="w-5 h-5 text-green-600" />
  //             <div>
  //               <p className="text-sm font-medium">New stock added - Teak (25 CF)</p>
  //               <p className="text-xs text-gray-500">2 hours ago</p>
  //             </div>
  //           </div>
  //           <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded">
  //             <ArrowRightLeft className="w-5 h-5 text-blue-600" />
  //             <div>
  //               <p className="text-sm font-medium">Transfer completed - Kandy to Galle</p>
  //               <p className="text-xs text-gray-500">4 hours ago</p>
  //             </div>
  //           </div>
  //           <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded">
  //             <AlertTriangle className="w-5 h-5 text-red-600" />
  //             <div>
  //               <p className="text-sm font-medium">Damage reported - Mahogany (3 CF)</p>
  //               <p className="text-xs text-gray-500">1 day ago</p>
  //             </div>
  //           </div>
  //         </div>
  //       </div>

  //       <div className="bg-white p-6 rounded-lg shadow-sm border">
  //         <h3 className="text-lg font-semibold mb-4">Low Stock Alerts</h3>
  //         <div className="space-y-3">
  //           <div className="flex items-center justify-between p-3 bg-yellow-50 border border-yellow-200 rounded">
  //             <div>
  //               <p className="text-sm font-medium">Jak Wood</p>
  //               <p className="text-xs text-gray-500">Current: 45 CF | Minimum: 50 CF</p>
  //             </div>
  //             <span className="px-2 py-1 bg-yellow-200 text-yellow-800 text-xs rounded">Low</span>
  //           </div>
  //           <div className="flex items-center justify-between p-3 bg-red-50 border border-red-200 rounded">
  //             <div>
  //               <p className="text-sm font-medium">Pine Wood</p>
  //               <p className="text-xs text-gray-500">Current: 12 CF | Minimum: 30 CF</p>
  //             </div>
  //             <span className="px-2 py-1 bg-red-200 text-red-800 text-xs rounded">Critical</span>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );



  const Dashboard = () => (
    <div className="dashboard">
      <div className="card-grid">
        <div className="card">
          <div className="card-header">
            <div>
              <p className="label">Total Stock</p>
              <p className="value green">284</p>
            </div>
            <Package className="icon green" />
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <div>
              <p className="label">Active Transfers</p>
              <p className="value blue">12</p>
            </div>
            <ArrowRightLeft className="icon blue" />
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <div>
              <p className="label">Damage Reports</p>
              <p className="value red">7</p>
            </div>
            <AlertTriangle className="icon red" />
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <div>
              <p className="label">Monthly Value</p>
              <p className="value purple">₨2.5M</p>
            </div>
            <BarChart3 className="icon purple" />
          </div>
        </div>
      </div>

      <div className="bottom-grid">
        <div className="panel">
          <h3 className="panel-title">Recent Activities</h3>
          <div className="activity-list">
            <div className="activity">
              <Package className="activity-icon green" />
              <div>
                <p className="activity-title">New stock added - Teak (25 CF)</p>
                <p className="activity-time">2 hours ago</p>
              </div>
            </div>
            <div className="activity">
              <ArrowRightLeft className="activity-icon blue" />
              <div>
                <p className="activity-title">Transfer completed - Kandy to Galle</p>
                <p className="activity-time">4 hours ago</p>
              </div>
            </div>
            <div className="activity">
              <AlertTriangle className="activity-icon red" />
              <div>
                <p className="activity-title">Damage reported - Mahogany (3 CF)</p>
                <p className="activity-time">1 day ago</p>
              </div>
            </div>
          </div>
        </div>

        <div className="panel">
          <h3 className="panel-title">Low Stock Alerts</h3>
          <div className="stock-alert low">
            <div>
              <p className="stock-title">Jak Wood</p>
              <p className="stock-info">Current: 45 CF | Minimum: 50 CF</p>
            </div>
            <span className="stock-status yellow">Low</span>
          </div>
          <div className="stock-alert critical">
            <div>
              <p className="stock-title">Pine Wood</p>
              <p className="stock-info">Current: 12 CF | Minimum: 30 CF</p>
            </div>
            <span className="stock-status red">Critical</span>
          </div>
        </div>
      </div>
    </div>
  );




  // const StockManagement = () => {
  //   const [showAddForm, setShowAddForm] = useState(false);
  //   const [searchTerm, setSearchTerm] = useState('');

  //   const filteredStock = stockData.filter(item => 
  //     item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     item.species.toLowerCase().includes(searchTerm.toLowerCase())
  //   );

  //   return (
  //     <div className="space-y-6">
  //       <div className="flex justify-between items-center">
  //         <h2 className="text-2xl font-bold">Stock Management</h2>
  //         <button 
  //           onClick={() => setShowAddForm(true)}
  //           className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-700"
  //         >
  //           <Plus className="w-4 h-4" />
  //           <span>Add Stock</span>
  //         </button>
  //       </div>

  //       <div className="bg-white p-6 rounded-lg shadow-sm border">
  //         <div className="flex justify-between items-center mb-4">
  //           <div className="relative">
  //             <Search className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
  //             <input
  //               type="text"
  //               placeholder="Search timber type or species..."
  //               className="pl-10 pr-4 py-2 border rounded-lg w-64"
  //               value={searchTerm}
  //               onChange={(e) => setSearchTerm(e.target.value)}
  //             />
  //           </div>
  //           <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700">
  //             <Download className="w-4 h-4" />
  //             <span>Export</span>
  //           </button>
  //         </div>

  //         <div className="overflow-x-auto">
  //           <table className="w-full table-auto">
  //             <thead>
  //               <tr className="border-b">
  //                 <th className="text-left py-3 px-4">Type</th>
  //                 <th className="text-left py-3 px-4">Species</th>
  //                 <th className="text-left py-3 px-4">Quantity</th>
  //                 <th className="text-left py-3 px-4">Location</th>
  //                 <th className="text-left py-3 px-4">Status</th>
  //                 <th className="text-left py-3 px-4">Last Updated</th>
  //                 <th className="text-left py-3 px-4">Actions</th>
  //               </tr>
  //             </thead>
  //             <tbody>
  //               {filteredStock.map((item) => (
  //                 <tr key={item.id} className="border-b hover:bg-gray-50">
  //                   <td className="py-3 px-4 font-medium">{item.type}</td>
  //                   <td className="py-3 px-4 text-sm text-gray-600">{item.species}</td>
  //                   <td className="py-3 px-4">{item.quantity} {item.unit}</td>
  //                   <td className="py-3 px-4">{item.location}</td>
  //                   <td className="py-3 px-4">
  //                     <span className={`px-2 py-1 rounded text-xs ${
  //                       item.status === 'Available' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
  //                     }`}>
  //                       {item.status}
  //                     </span>
  //                   </td>
  //                   <td className="py-3 px-4 text-sm text-gray-600">{item.lastUpdated}</td>
  //                   <td className="py-3 px-4">
  //                     <div className="flex space-x-2">
  //                       <button className="text-blue-600 hover:text-blue-800">
  //                         <Eye className="w-4 h-4" />
  //                       </button>
  //                       <button className="text-green-600 hover:text-green-800">
  //                         <Edit className="w-4 h-4" />
  //                       </button>
  //                       <button className="text-red-600 hover:text-red-800">
  //                         <Trash2 className="w-4 h-4" />
  //                       </button>
  //                     </div>
  //                   </td>
  //                 </tr>
  //               ))}
  //             </tbody>
  //           </table>
  //         </div>
  //       </div>

  //       {showAddForm && (
  //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
  //           <div className="bg-white p-6 rounded-lg w-full max-w-md">
  //             <div className="flex justify-between items-center mb-4">
  //               <h3 className="text-lg font-semibold">Add New Stock</h3>
  //               <button onClick={() => setShowAddForm(false)}>
  //                 <X className="w-5 h-5" />
  //               </button>
  //             </div>
  //             <form className="space-y-4">
  //               <div>
  //                 <label className="block text-sm font-medium mb-1">Timber Type</label>
  //                 <input type="text" className="w-full p-2 border rounded-lg" placeholder="e.g., Teak" />
  //               </div>
  //               <div>
  //                 <label className="block text-sm font-medium mb-1">Species</label>
  //                 <input type="text" className="w-full p-2 border rounded-lg" placeholder="Scientific name" />
  //               </div>
  //               <div>
  //                 <label className="block text-sm font-medium mb-1">Quantity</label>
  //                 <input type="number" className="w-full p-2 border rounded-lg" placeholder="0" />
  //               </div>
  //               <div>
  //                 <label className="block text-sm font-medium mb-1">Unit</label>
  //                 <select className="w-full p-2 border rounded-lg">
  //                   <option>Cubic Feet</option>
  //                   <option>Cubic Meters</option>
  //                   <option>Board Feet</option>
  //                 </select>
  //               </div>
  //               <div>
  //                 <label className="block text-sm font-medium mb-1">Location</label>
  //                 <select className="w-full p-2 border rounded-lg">
  //                   <option>Yard A</option>
  //                   <option>Yard B</option>
  //                   <option>Yard C</option>
  //                   <option>Warehouse 1</option>
  //                 </select>
  //               </div>
  //               <div className="flex space-x-3 pt-4">
  //                 <button 
  //                   type="button" 
  //                   onClick={() => setShowAddForm(false)}
  //                   className="flex-1 px-4 py-2 border rounded-lg hover:bg-gray-50"
  //                 >
  //                   Cancel
  //                 </button>
  //                 <button 
  //                   type="submit" 
  //                   className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
  //                 >
  //                   Add Stock
  //                 </button>
  //               </div>
  //             </form>
  //           </div>
  //         </div>
  //       )}
  //     </div>
  //   );
  // };



  const StockManagement = () => {
    const [showAddForm, setShowAddForm] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredStock = stockData.filter(item =>
      item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.species.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className="stock-container">
        <div className="stock-header">
          <h2>Stock Management</h2>
          <button className="btn green" onClick={() => setShowAddForm(true)}>
            <Plus className="icon" />
            <span>Add Stock</span>
          </button>
        </div>

        <div className="stock-panel">
          <div className="stock-controls">
            <div className="search-box">
              <Search className="search-icon" />
              <input
                type="text"
                placeholder="Search timber type or species..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="btn blue">
              <Download className="icon" />
              <span>Export</span>
            </button>
          </div>

          <div className="stock-table-wrapper">
            <table className="stock-table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Species</th>
                  <th>Quantity</th>
                  <th>Location</th>
                  <th>Status</th>
                  <th>Last Updated</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredStock.map((item) => (
                  <tr key={item.id}>
                    <td>{item.type}</td>
                    <td>{item.species}</td>
                    <td>{item.quantity} {item.unit}</td>
                    <td>{item.location}</td>
                    <td>
                      <span className={`status ${item.status === 'Available' ? 'available' : 'low'}`}>
                        {item.status}
                      </span>
                    </td>
                    <td>{item.lastUpdated}</td>
                    <td>
                      <div className="action-buttons">
                        <button className="blue"><Eye className="icon-sm" /></button>
                        <button className="green"><Edit className="icon-sm" /></button>
                        <button className="red"><Trash2 className="icon-sm" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {showAddForm && (
          <div className="modal-overlay">
            <div className="modal">
              <div className="modal-header">
                <h3>Add New Stock</h3>
                <button onClick={() => setShowAddForm(false)}>
                  <X className="icon-sm" />
                </button>
              </div>
              <form className="modal-form">
                <div>
                  <label>Timber Type</label>
                  <input type="text" placeholder="e.g., Teak" />
                </div>
                <div>
                  <label>Species</label>
                  <input type="text" placeholder="Scientific name" />
                </div>
                <div>
                  <label>Quantity</label>
                  <input type="number" placeholder="0" />
                </div>
                <div>
                  <label>Unit</label>
                  <select>
                    <option>Cubic Feet</option>
                    <option>Cubic Meters</option>
                    <option>Board Feet</option>
                  </select>
                </div>
                <div>
                  <label>Location</label>
                  <select>
                    <option>Yard A</option>
                    <option>Yard B</option>
                    <option>Yard C</option>
                    <option>Warehouse 1</option>
                  </select>
                </div>
                <div className="form-actions">
                  <button type="button" onClick={() => setShowAddForm(false)}>Cancel</button>
                  <button type="submit" className="green">Add Stock</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  };



  // const StockTransfers = () => {
  //   const [showTransferForm, setShowTransferForm] = useState(false);

  //   return (
  //     <div className="space-y-6">
  //       <div className="flex justify-between items-center">
  //         <h2 className="text-2xl font-bold">Stock Transfers</h2>
  //         <button 
  //           onClick={() => setShowTransferForm(true)}
  //           className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700"
  //         >
  //           <Plus className="w-4 h-4" />
  //           <span>New Transfer</span>
  //         </button>
  //       </div>

  //       <div className="bg-white p-6 rounded-lg shadow-sm border">
  //         <div className="overflow-x-auto">
  //           <table className="w-full table-auto">
  //             <thead>
  //               <tr className="border-b">
  //                 <th className="text-left py-3 px-4">Reference</th>
  //                 <th className="text-left py-3 px-4">From</th>
  //                 <th className="text-left py-3 px-4">To</th>
  //                 <th className="text-left py-3 px-4">Timber Type</th>
  //                 <th className="text-left py-3 px-4">Quantity</th>
  //                 <th className="text-left py-3 px-4">Status</th>
  //                 <th className="text-left py-3 px-4">Date</th>
  //                 <th className="text-left py-3 px-4">Actions</th>
  //               </tr>
  //             </thead>
  //             <tbody>
  //               {transferData.map((transfer) => (
  //                 <tr key={transfer.id} className="border-b hover:bg-gray-50">
  //                   <td className="py-3 px-4 font-medium">{transfer.reference}</td>
  //                   <td className="py-3 px-4">{transfer.from}</td>
  //                   <td className="py-3 px-4">{transfer.to}</td>
  //                   <td className="py-3 px-4">{transfer.type}</td>
  //                   <td className="py-3 px-4">{transfer.quantity} CF</td>
  //                   <td className="py-3 px-4">
  //                     <span className={`px-2 py-1 rounded text-xs ${
  //                       transfer.status === 'Completed' ? 'bg-green-100 text-green-800' : 
  //                       transfer.status === 'In Transit' ? 'bg-blue-100 text-blue-800' : 
  //                       'bg-yellow-100 text-yellow-800'
  //                     }`}>
  //                       {transfer.status}
  //                     </span>
  //                   </td>
  //                   <td className="py-3 px-4">{transfer.date}</td>
  //                   <td className="py-3 px-4">
  //                     <div className="flex space-x-2">
  //                       <button className="text-blue-600 hover:text-blue-800">
  //                         <Eye className="w-4 h-4" />
  //                       </button>
  //                       <button className="text-green-600 hover:text-green-800">
  //                         <Edit className="w-4 h-4" />
  //                       </button>
  //                     </div>
  //                   </td>
  //                 </tr>
  //               ))}
  //             </tbody>
  //           </table>
  //         </div>
  //       </div>

  //       {showTransferForm && (
  //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
  //           <div className="bg-white p-6 rounded-lg w-full max-w-md">
  //             <div className="flex justify-between items-center mb-4">
  //               <h3 className="text-lg font-semibold">New Transfer Request</h3>
  //               <button onClick={() => setShowTransferForm(false)}>
  //                 <X className="w-5 h-5" />
  //               </button>
  //             </div>
  //             <form className="space-y-4">
  //               <div>
  //                 <label className="block text-sm font-medium mb-1">From Branch</label>
  //                 <select className="w-full p-2 border rounded-lg">
  //                   <option>Colombo Central</option>
  //                   <option>Kandy Branch</option>
  //                   <option>Galle Branch</option>
  //                   <option>Matara Branch</option>
  //                 </select>
  //               </div>
  //               <div>
  //                 <label className="block text-sm font-medium mb-1">To Branch</label>
  //                 <select className="w-full p-2 border rounded-lg">
  //                   <option>Colombo Central</option>
  //                   <option>Kandy Branch</option>
  //                   <option>Galle Branch</option>
  //                   <option>Matara Branch</option>
  //                 </select>
  //               </div>
  //               <div>
  //                 <label className="block text-sm font-medium mb-1">Timber Type</label>
  //                 <select className="w-full p-2 border rounded-lg">
  //                   <option>Teak</option>
  //                   <option>Mahogany</option>
  //                   <option>Jak</option>
  //                   <option>Pine</option>
  //                 </select>
  //               </div>
  //               <div>
  //                 <label className="block text-sm font-medium mb-1">Quantity (CF)</label>
  //                 <input type="number" className="w-full p-2 border rounded-lg" placeholder="0" />
  //               </div>
  //               <div>
  //                 <label className="block text-sm font-medium mb-1">Reason</label>
  //                 <textarea className="w-full p-2 border rounded-lg" rows={3} placeholder="Transfer reason..."></textarea>
  //               </div>
  //               <div className="flex space-x-3 pt-4">
  //                 <button 
  //                   type="button" 
  //                   onClick={() => setShowTransferForm(false)}
  //                   className="flex-1 px-4 py-2 border rounded-lg hover:bg-gray-50"
  //                 >
  //                   Cancel
  //                 </button>
  //                 <button 
  //                   type="submit" 
  //                   className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
  //                 >
  //                   Create Transfer
  //                 </button>
  //               </div>
  //             </form>
  //           </div>
  //         </div>
  //       )}
  //     </div>
  //   );
  // };


  const StockTransfers = () => {
    const [showTransferForm, setShowTransferForm] = useState(false);

    return (
      <div className="transfers-container">
        <div className="transfers-header">
          <h2>Stock Transfers</h2>
          <button className="btn blue" onClick={() => setShowTransferForm(true)}>
            <Plus className="icon" />
            <span>New Transfer</span>
          </button>
        </div>

        <div className="transfers-panel">
          <div className="table-wrapper">
            <table className="transfers-table">
              <thead>
                <tr>
                  <th>Reference</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Timber Type</th>
                  <th>Quantity</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {transferData.map((transfer) => (
                  <tr key={transfer.id}>
                    <td>{transfer.reference}</td>
                    <td>{transfer.from}</td>
                    <td>{transfer.to}</td>
                    <td>{transfer.type}</td>
                    <td>{transfer.quantity} CF</td>
                    <td>
                      <span
                        className={`status ${
                          transfer.status === "Completed"
                            ? "completed"
                            : transfer.status === "In Transit"
                            ? "in-transit"
                            : "pending"
                        }`}
                      >
                        {transfer.status}
                      </span>
                    </td>
                    <td>{transfer.date}</td>
                    <td>
                      <div className="action-buttons">
                        <button className="blue">
                          <Eye className="icon-sm" />
                        </button>
                        <button className="green">
                          <Edit className="icon-sm" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {showTransferForm && (
          <div className="modal-overlay">
            <div className="modal">
              <div className="modal-header">
                <h3>New Transfer Request</h3>
                <button onClick={() => setShowTransferForm(false)}>
                  <X className="icon-sm" />
                </button>
              </div>
              <form className="modal-form">
                <div>
                  <label>From Branch</label>
                  <select>
                    <option>Colombo Central</option>
                    <option>Kandy Branch</option>
                    <option>Galle Branch</option>
                    <option>Matara Branch</option>
                  </select>
                </div>
                <div>
                  <label>To Branch</label>
                  <select>
                    <option>Colombo Central</option>
                    <option>Kandy Branch</option>
                    <option>Galle Branch</option>
                    <option>Matara Branch</option>
                  </select>
                </div>
                <div>
                  <label>Timber Type</label>
                  <select>
                    <option>Teak</option>
                    <option>Mahogany</option>
                    <option>Jak</option>
                    <option>Pine</option>
                  </select>
                </div>
                <div>
                  <label>Quantity (CF)</label>
                  <input type="number" placeholder="0" />
                </div>
                <div>
                  <label>Reason</label>
                  <textarea rows={3} placeholder="Transfer reason..."></textarea>
                </div>
                <div className="form-actions">
                  <button type="button" onClick={() => setShowTransferForm(false)}>
                    Cancel
                  </button>
                  <button type="submit" className="blue">
                    Create Transfer
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  };




  // const DamageReports = () => {
  //   const [showReportForm, setShowReportForm] = useState(false);

  //   return (
  //     <div className="space-y-6">
  //       <div className="flex justify-between items-center">
  //         <h2 className="text-2xl font-bold">Damage & Loss Reports</h2>
  //         <button 
  //           onClick={() => setShowReportForm(true)}
  //           className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-red-700"
  //         >
  //           <Plus className="w-4 h-4" />
  //           <span>Report Damage</span>
  //         </button>
  //       </div>

  //       <div className="bg-white p-6 rounded-lg shadow-sm border">
  //         <div className="overflow-x-auto">
  //           <table className="w-full table-auto">
  //             <thead>
  //               <tr className="border-b">
  //                 <th className="text-left py-3 px-4">Timber Type</th>
  //                 <th className="text-left py-3 px-4">Quantity</th>
  //                 <th className="text-left py-3 px-4">Reason</th>
  //                 <th className="text-left py-3 px-4">Reported By</th>
  //                 <th className="text-left py-3 px-4">Date</th>
  //                 <th className="text-left py-3 px-4">Status</th>
  //                 <th className="text-left py-3 px-4">Actions</th>
  //               </tr>
  //             </thead>
  //             <tbody>
  //               {damageReports.map((report) => (
  //                 <tr key={report.id} className="border-b hover:bg-gray-50">
  //                   <td className="py-3 px-4 font-medium">{report.type}</td>
  //                   <td className="py-3 px-4">{report.quantity} CF</td>
  //                   <td className="py-3 px-4">{report.reason}</td>
  //                   <td className="py-3 px-4">{report.reportedBy}</td>
  //                   <td className="py-3 px-4">{report.date}</td>
  //                   <td className="py-3 px-4">
  //                     <span className={`px-2 py-1 rounded text-xs ${
  //                       report.status === 'Approved' ? 'bg-green-100 text-green-800' : 
  //                       report.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
  //                       'bg-red-100 text-red-800'
  //                     }`}>
  //                       {report.status}
  //                     </span>
  //                   </td>
  //                   <td className="py-3 px-4">
  //                     <div className="flex space-x-2">
  //                       <button className="text-blue-600 hover:text-blue-800">
  //                         <Eye className="w-4 h-4" />
  //                       </button>
  //                       <button className="text-green-600 hover:text-green-800">
  //                         <Edit className="w-4 h-4" />
  //                       </button>
  //                     </div>
  //                   </td>
  //                 </tr>
  //               ))}
  //             </tbody>
  //           </table>
  //         </div>
  //       </div>

  //       {showReportForm && (
  //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
  //           <div className="bg-white p-6 rounded-lg w-full max-w-md">
  //             <div className="flex justify-between items-center mb-4">
  //               <h3 className="text-lg font-semibold">Report Damage/Loss</h3>
  //               <button onClick={() => setShowReportForm(false)}>
  //                 <X className="w-5 h-5" />
  //               </button>
  //             </div>
  //             <form className="space-y-4">
  //               <div>
  //                 <label className="block text-sm font-medium mb-1">Timber Type</label>
  //                 <select className="w-full p-2 border rounded-lg">
  //                   <option>Teak</option>
  //                   <option>Mahogany</option>
  //                   <option>Jak</option>
  //                   <option>Pine</option>
  //                 </select>
  //               </div>
  //               <div>
  //                 <label className="block text-sm font-medium mb-1">Quantity Lost (CF)</label>
  //                 <input type="number" className="w-full p-2 border rounded-lg" placeholder="0" />
  //               </div>
  //               <div>
  //                 <label className="block text-sm font-medium mb-1">Damage Type</label>
  //                 <select className="w-full p-2 border rounded-lg">
  //                   <option>Water damage</option>
  //                   <option>Insect damage</option>
  //                   <option>Fire damage</option>
  //                   <option>Theft</option>
  //                   <option>Physical damage</option>
  //                   <option>Other</option>
  //                 </select>
  //               </div>
  //               <div>
  //                 <label className="block text-sm font-medium mb-1">Description</label>
  //                 <textarea className="w-full p-2 border rounded-lg" rows={3} placeholder="Detailed description of damage..."></textarea>
  //               </div>
  //               <div>
  //                 <label className="block text-sm font-medium mb-1">Location</label>
  //                 <input type="text" className="w-full p-2 border rounded-lg" placeholder="Yard/Warehouse location" />
  //               </div>
  //               <div className="flex space-x-3 pt-4">
  //                 <button 
  //                   type="button" 
  //                   onClick={() => setShowReportForm(false)}
  //                   className="flex-1 px-4 py-2 border rounded-lg hover:bg-gray-50"
  //                 >
  //                   Cancel
  //                 </button>
  //                 <button 
  //                   type="submit" 
  //                   className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
  //                 >
  //                   Submit Report
  //                 </button>
  //               </div>
  //             </form>
  //           </div>
  //         </div>
  //       )}
  //     </div>
  //   );
  // };



  const DamageReports = () => {
    const [showReportForm, setShowReportForm] = useState(false);

    return (
      <div className="damage-container">
        <div className="damage-header">
          <h2>Damage & Loss Reports</h2>
          <button className="btn red" onClick={() => setShowReportForm(true)}>
            <Plus className="icon" />
            <span>Report Damage</span>
          </button>
        </div>

        <div className="damage-panel">
          <div className="table-wrapper">
            <table className="damage-table">
              <thead>
                <tr>
                  <th>Timber Type</th>
                  <th>Quantity</th>
                  <th>Reason</th>
                  <th>Reported By</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {damageReports.map((report) => (
                  <tr key={report.id}>
                    <td>{report.type}</td>
                    <td>{report.quantity} CF</td>
                    <td>{report.reason}</td>
                    <td>{report.reportedBy}</td>
                    <td>{report.date}</td>
                    <td>
                      <span
                        className={`status ${
                          report.status === "Approved"
                            ? "approved"
                            : report.status === "Pending"
                            ? "pending"
                            : "rejected"
                        }`}
                      >
                        {report.status}
                      </span>
                    </td>
                    <td>
                      <div className="action-buttons">
                        <button className="blue">
                          <Eye className="icon-sm" />
                        </button>
                        <button className="green">
                          <Edit className="icon-sm" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {showReportForm && (
          <div className="modal-overlay">
            <div className="modal">
              <div className="modal-header">
                <h3>Report Damage/Loss</h3>
                <button onClick={() => setShowReportForm(false)}>
                  <X className="icon-sm" />
                </button>
              </div>
              <form className="modal-form">
                <div>
                  <label>Timber Type</label>
                  <select>
                    <option>Teak</option>
                    <option>Mahogany</option>
                    <option>Jak</option>
                    <option>Pine</option>
                  </select>
                </div>
                <div>
                  <label>Quantity Lost (CF)</label>
                  <input type="number" placeholder="0" />
                </div>
                <div>
                  <label>Damage Type</label>
                  <select>
                    <option>Water damage</option>
                    <option>Insect damage</option>
                    <option>Fire damage</option>
                    <option>Theft</option>
                    <option>Physical damage</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label>Description</label>
                  <textarea rows={3} placeholder="Detailed description of damage..."></textarea>
                </div>
                <div>
                  <label>Location</label>
                  <input type="text" placeholder="Yard/Warehouse location" />
                </div>
                <div className="form-actions">
                  <button type="button" onClick={() => setShowReportForm(false)}>
                    Cancel
                  </button>
                  <button type="submit" className="red">
                    Submit Report
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  };




  // const Procurement = () => (
  //   <div className="space-y-6">
  //     <div className="flex justify-between items-center">
  //       <h2 className="text-2xl font-bold">Procurement Records</h2>
  //       <button className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-700">
  //         <Plus className="w-4 h-4" />
  //         <span>New Procurement</span>
  //       </button>
  //     </div>

  //     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  //       <div className="bg-white p-6 rounded-lg shadow-sm border">
  //         <h3 className="font-semibold text-gray-700 mb-2">Pending Orders</h3>
  //         <p className="text-2xl font-bold text-blue-600">8</p>
  //       </div>
  //       <div className="bg-white p-6 rounded-lg shadow-sm border">
  //         <h3 className="font-semibold text-gray-700 mb-2">This Month</h3>
  //         <p className="text-2xl font-bold text-green-600">₨1.2M</p>
  //       </div>
  //       <div className="bg-white p-6 rounded-lg shadow-sm border">
  //         <h3 className="font-semibold text-gray-700 mb-2">Suppliers</h3>
  //         <p className="text-2xl font-bold text-purple-600">15</p>
  //       </div>
  //     </div>

  //     <div className="bg-white p-6 rounded-lg shadow-sm border">
  //       <h3 className="text-lg font-semibold mb-4">Recent Procurement Orders</h3>
  //       <div className="overflow-x-auto">
  //         <table className="w-full table-auto">
  //           <thead>
  //             <tr className="border-b">
  //               <th className="text-left py-3 px-4">Order ID</th>
  //               <th className="text-left py-3 px-4">Supplier</th>
  //               <th className="text-left py-3 px-4">Timber Type</th>
  //               <th className="text-left py-3 px-4">Quantity</th>
  //               <th className="text-left py-3 px-4">Amount</th>
  //               <th className="text-left py-3 px-4">Status</th>
  //               <th className="text-left py-3 px-4">Date</th>
  //               <th className="text-left py-3 px-4">Actions</th>
  //             </tr>
  //           </thead>
  //           <tbody>
  //             <tr className="border-b hover:bg-gray-50">
  //               <td className="py-3 px-4 font-medium">PO001</td>
  //               <td className="py-3 px-4">Lanka Timber Co.</td>
  //               <td className="py-3 px-4">Teak</td>
  //               <td className="py-3 px-4">100 CF</td>
  //               <td className="py-3 px-4">₨250,000</td>
  //               <td className="py-3 px-4">
  //                 <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">Pending</span>
  //               </td>
  //               <td className="py-3 px-4">2024-06-20</td>
  //               <td className="py-3 px-4">
  //                 <div className="flex space-x-2">
  //                   <button className="text-blue-600 hover:text-blue-800">
  //                     <Eye className="w-4 h-4" />
  //                   </button>
  //                   <button className="text-green-600 hover:text-green-800">
  //                     <Edit className="w-4 h-4" />
  //                   </button>
  //                 </div>
  //               </td>
  //             </tr>
  //             <tr className="border-b hover:bg-gray-50">
  //               <td className="py-3 px-4 font-medium">PO002</td>
  //               <td className="py-3 px-4">Forest Products Ltd.</td>
  //               <td className="py-3 px-4">Mahogany</td>
  //               <td className="py-3 px-4">75 CF</td>
  //               <td className="py-3 px-4">₨180,000</td>
  //               <td className="py-3 px-4">
  //                 <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Completed</span>
  //               </td>
  //               <td className="py-3 px-4">2024-06-18</td>
  //               <td className="py-3 px-4">
  //                 <div className="flex space-x-2">
  //                   <button className="text-blue-600 hover:text-blue-800">
  //                     <Eye className="w-4 h-4" />
  //                   </button>
  //                   <button className="text-green-600 hover:text-green-800">
  //                     <FileText className="w-4 h-4" />
  //                   </button>
  //                 </div>
  //               </td>
  //             </tr>
  //           </tbody>
  //         </table>
  //       </div>
  //     </div>
  //   </div>
  // );



  const Procurement = () => (
    <div className="procurement-container">
      <div className="procurement-header">
        <h2>Procurement Records</h2>
        <button className="btn green">
          <Plus className="icon" />
          <span>New Procurement</span>
        </button>
      </div>

      <div className="summary-cards">
        <div className="summary-card">
          <h3>Pending Orders</h3>
          <p className="blue">8</p>
        </div>
        <div className="summary-card">
          <h3>This Month</h3>
          <p className="green">₨1.2M</p>
        </div>
        <div className="summary-card">
          <h3>Suppliers</h3>
          <p className="purple">15</p>
        </div>
      </div>

      <div className="procurement-panel">
        <h3>Recent Procurement Orders</h3>
        <div className="table-wrapper">
          <table className="procurement-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Supplier</th>
                <th>Timber Type</th>
                <th>Quantity</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PO001</td>
                <td>Lanka Timber Co.</td>
                <td>Teak</td>
                <td>100 CF</td>
                <td>₨250,000</td>
                <td>
                  <span className="status yellow">Pending</span>
                </td>
                <td>2024-06-20</td>
                <td>
                  <div className="action-buttons">
                    <button className="blue">
                      <Eye className="icon-sm" />
                    </button>
                    <button className="green">
                      <Edit className="icon-sm" />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>PO002</td>
                <td>Forest Products Ltd.</td>
                <td>Mahogany</td>
                <td>75 CF</td>
                <td>₨180,000</td>
                <td>
                  <span className="status green">Completed</span>
                </td>
                <td>2024-06-18</td>
                <td>
                  <div className="action-buttons">
                    <button className="blue">
                      <Eye className="icon-sm" />
                    </button>
                    <button className="green">
                      <FileText className="icon-sm" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );




  // const Reports = () => {
  //   const [selectedReport, setSelectedReport] = useState('stock');
  //   const [dateRange, setDateRange] = useState('monthly');

  //   return (
  //     <div className="space-y-6">
  //       <div className="flex justify-between items-center">
  //         <h2 className="text-2xl font-bold">Reports & Analytics</h2>
  //         <div className="flex space-x-2">
  //           <select 
  //             value={dateRange} 
  //             onChange={(e) => setDateRange(e.target.value)}
  //             className="px-3 py-2 border rounded-lg"
  //           >
  //             <option value="daily">Daily</option>
  //             <option value="weekly">Weekly</option>
  //             <option value="monthly">Monthly</option>
  //             <option value="yearly">Yearly</option>
  //           </select>
  //           <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700">
  //             <Download className="w-4 h-4" />
  //             <span>Export</span>
  //           </button>
  //         </div>
  //       </div>

  //       <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
  //         <button 
  //           onClick={() => setSelectedReport('stock')}
  //           className={`p-4 rounded-lg border text-left ${selectedReport === 'stock' ? 'bg-blue-50 border-blue-300' : 'bg-white'}`}
  //         >
  //           <Package className="w-6 h-6 mb-2 text-blue-600" />
  //           <h3 className="font-medium">Stock Report</h3>
  //           <p className="text-sm text-gray-600">Current inventory levels</p>
  //         </button>
  //         <button 
  //           onClick={() => setSelectedReport('transfers')}
  //           className={`p-4 rounded-lg border text-left ${selectedReport === 'transfers' ? 'bg-blue-50 border-blue-300' : 'bg-white'}`}
  //         >
  //           <ArrowRightLeft className="w-6 h-6 mb-2 text-green-600" />
  //           <h3 className="font-medium">Transfer Report</h3>
  //           <p className="text-sm text-gray-600">Inter-branch movements</p>
  //         </button>
  //         <button 
  //           onClick={() => setSelectedReport('damage')}
  //           className={`p-4 rounded-lg border text-left ${selectedReport === 'damage' ? 'bg-blue-50 border-blue-300' : 'bg-white'}`}
  //         >
  //           <AlertTriangle className="w-6 h-6 mb-2 text-red-600" />
  //           <h3 className="font-medium">Damage Report</h3>
  //           <p className="text-sm text-gray-600">Loss and damage summary</p>
  //         </button>
  //         <button 
  //           onClick={() => setSelectedReport('financial')}
  //           className={`p-4 rounded-lg border text-left ${selectedReport === 'financial' ? 'bg-blue-50 border-blue-300' : 'bg-white'}`}
  //         >
  //           <BarChart3 className="w-6 h-6 mb-2 text-purple-600" />
  //           <h3 className="font-medium">Financial Report</h3>
  //           <p className="text-sm text-gray-600">Revenue and costs</p>
  //         </button>
  //       </div>

  //       <div className="bg-white p-6 rounded-lg shadow-sm border">
  //         <h3 className="text-lg font-semibold mb-4">
  //           {selectedReport === 'stock' && 'Stock Inventory Report'}
  //           {selectedReport === 'transfers' && 'Transfer Activity Report'}
  //           {selectedReport === 'damage' && 'Damage & Loss Report'}
  //           {selectedReport === 'financial' && 'Financial Summary Report'}
  //         </h3>
          
  //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
  //           <div className="bg-gray-50 p-4 rounded-lg">
  //             <p className="text-sm text-gray-600">Total Items</p>
  //             <p className="text-2xl font-bold">284</p>
  //           </div>
  //           <div className="bg-gray-50 p-4 rounded-lg">
  //             <p className="text-sm text-gray-600">Total Value</p>
  //             <p className="text-2xl font-bold">₨2.5M</p>
  //           </div>
  //           <div className="bg-gray-50 p-4 rounded-lg">
  //             <p className="text-sm text-gray-600">Low Stock Items</p>
  //             <p className="text-2xl font-bold text-red-600">12</p>
  //           </div>
  //           <div className="bg-gray-50 p-4 rounded-lg">
  //             <p className="text-sm text-gray-600">Locations</p>
  //             <p className="text-2xl font-bold">8</p>
  //           </div>
  //         </div>

  //         <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
  //           <div className="text-center">
  //             <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-2" />
  //             <p className="text-gray-500">Chart visualization would appear here</p>
  //             <p className="text-sm text-gray-400">Integration with charting library needed</p>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

 
  const Reports = () => {
    const [selectedReport, setSelectedReport] = useState('stock');
    const [dateRange, setDateRange] = useState('monthly');

    return (
      <div className="reports-container">
        <div className="reports-header">
          <h2>Reports & Analytics</h2>
          <div className="report-actions">
            <select 
              value={dateRange} 
              onChange={(e) => setDateRange(e.target.value)}
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </select>
            <button className="btn blue">
              <Download className="icon" />
              <span>Export</span>
            </button>
          </div>
        </div>

        <div className="report-selection">
          <button 
            onClick={() => setSelectedReport('stock')}
            className={`report-box ${selectedReport === 'stock' ? 'active' : ''}`}
          >
            <Package className="icon-large blue" />
            <h3>Stock Report</h3>
            <p>Current inventory levels</p>
          </button>
          <button 
            onClick={() => setSelectedReport('transfers')}
            className={`report-box ${selectedReport === 'transfers' ? 'active' : ''}`}
          >
            <ArrowRightLeft className="icon-large green" />
            <h3>Transfer Report</h3>
            <p>Inter-branch movements</p>
          </button>
          <button 
            onClick={() => setSelectedReport('damage')}
            className={`report-box ${selectedReport === 'damage' ? 'active' : ''}`}
          >
            <AlertTriangle className="icon-large red" />
            <h3>Damage Report</h3>
            <p>Loss and damage summary</p>
          </button>
          <button 
            onClick={() => setSelectedReport('financial')}
            className={`report-box ${selectedReport === 'financial' ? 'active' : ''}`}
          >
            <BarChart3 className="icon-large purple" />
            <h3>Financial Report</h3>
            <p>Revenue and costs</p>
          </button>
        </div>

        <div className="report-panel">
          <h3>
            {selectedReport === 'stock' && 'Stock Inventory Report'}
            {selectedReport === 'transfers' && 'Transfer Activity Report'}
            {selectedReport === 'damage' && 'Damage & Loss Report'}
            {selectedReport === 'financial' && 'Financial Summary Report'}
          </h3>

          <div className="report-summary">
            <div className="summary-box">
              <p>Total Items</p>
              <strong>284</strong>
            </div>
            <div className="summary-box">
              <p>Total Value</p>
              <strong>₨2.5M</strong>
            </div>
            <div className="summary-box">
              <p>Low Stock Items</p>
              <strong className="red">12</strong>
            </div>
            <div className="summary-box">
              <p>Locations</p>
              <strong>8</strong>
            </div>
          </div>

          <div className="report-chart">
            <div className="chart-placeholder">
              <BarChart3 className="chart-icon" />
              <p>Chart visualization would appear here</p>
              <small>Integration with charting library needed</small>
            </div>
          </div>
        </div>
      </div>
    );
  };




  // const UserManagement = () => {
  //   const [showUserForm, setShowUserForm] = useState(false);
  //   const [users] = useState([
  //     { id: 1, name: 'Sashan Fernando', email: 'sashan@stc.lk', role: 'Admin', branch: 'Colombo Central', status: 'Active', lastLogin: '2024-06-24' },
  //     { id: 2, name: 'Priya Silva', email: 'priya@stc.lk', role: 'Manager', branch: 'Kandy Branch', status: 'Active', lastLogin: '2024-06-23' },
  //     { id: 3, name: 'Kamal Perera', email: 'kamal@stc.lk', role: 'Staff', branch: 'Galle Branch', status: 'Active', lastLogin: '2024-06-22' }
  //   ]);

  //   return (
  //     <div className="space-y-6">
  //       <div className="flex justify-between items-center">
  //         <h2 className="text-2xl font-bold">User Management</h2>
  //         <button 
  //           onClick={() => setShowUserForm(true)}
  //           className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700"
  //         >
  //           <Plus className="w-4 h-4" />
  //           <span>Add User</span>
  //         </button>
  //       </div>

  //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  //         <div className="bg-white p-6 rounded-lg shadow-sm border">
  //           <h3 className="font-semibold text-gray-700 mb-2">Total Users</h3>
  //           <p className="text-2xl font-bold text-blue-600">24</p>
  //         </div>
  //         <div className="bg-white p-6 rounded-lg shadow-sm border">
  //           <h3 className="font-semibold text-gray-700 mb-2">Active Sessions</h3>
  //           <p className="text-2xl font-bold text-green-600">18</p>
  //         </div>
  //         <div className="bg-white p-6 rounded-lg shadow-sm border">
  //           <h3 className="font-semibold text-gray-700 mb-2">Branches</h3>
  //           <p className="text-2xl font-bold text-purple-600">8</p>
  //         </div>
  //       </div>

  //       <div className="bg-white p-6 rounded-lg shadow-sm border">
  //         <div className="overflow-x-auto">
  //           <table className="w-full table-auto">
  //             <thead>
  //               <tr className="border-b">
  //                 <th className="text-left py-3 px-4">Name</th>
  //                 <th className="text-left py-3 px-4">Email</th>
  //                 <th className="text-left py-3 px-4">Role</th>
  //                 <th className="text-left py-3 px-4">Branch</th>
  //                 <th className="text-left py-3 px-4">Status</th>
  //                 <th className="text-left py-3 px-4">Last Login</th>
  //                 <th className="text-left py-3 px-4">Actions</th>
  //               </tr>
  //             </thead>
  //             <tbody>
  //               {users.map((user) => (
  //                 <tr key={user.id} className="border-b hover:bg-gray-50">
  //                   <td className="py-3 px-4 font-medium">{user.name}</td>
  //                   <td className="py-3 px-4">{user.email}</td>
  //                   <td className="py-3 px-4">
  //                     <span className={`px-2 py-1 rounded text-xs ${
  //                       user.role === 'Admin' ? 'bg-red-100 text-red-800' : 
  //                       user.role === 'Manager' ? 'bg-blue-100 text-blue-800' : 
  //                       'bg-green-100 text-green-800'
  //                     }`}>
  //                       {user.role}
  //                     </span>
  //                   </td>
  //                   <td className="py-3 px-4">{user.branch}</td>
  //                   <td className="py-3 px-4">
  //                     <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">
  //                       {user.status}
  //                     </span>
  //                   </td>
  //                   <td className="py-3 px-4">{user.lastLogin}</td>
  //                   <td className="py-3 px-4">
  //                     <div className="flex space-x-2">
  //                       <button className="text-blue-600 hover:text-blue-800">
  //                         <Edit className="w-4 h-4" />
  //                       </button>
  //                       <button className="text-red-600 hover:text-red-800">
  //                         <Trash2 className="w-4 h-4" />
  //                       </button>
  //                     </div>
  //                   </td>
  //                 </tr>
  //               ))}
  //             </tbody>
  //           </table>
  //         </div>
  //       </div>

  //       {showUserForm && (
  //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
  //           <div className="bg-white p-6 rounded-lg w-full max-w-md">
  //             <div className="flex justify-between items-center mb-4">
  //               <h3 className="text-lg font-semibold">Add New User</h3>
  //               <button onClick={() => setShowUserForm(false)}>
  //                 <X className="w-5 h-5" />
  //               </button>
  //             </div>
  //             <form className="space-y-4">
  //               <div>
  //                 <label className="block text-sm font-medium mb-1">Full Name</label>
  //                 <input type="text" className="w-full p-2 border rounded-lg" placeholder="John Doe" />
  //               </div>
  //               <div>
  //                 <label className="block text-sm font-medium mb-1">Email</label>
  //                 <input type="email" className="w-full p-2 border rounded-lg" placeholder="john@stc.lk" />
  //               </div>
  //               <div>
  //                 <label className="block text-sm font-medium mb-1">Role</label>
  //                 <select className="w-full p-2 border rounded-lg">
  //                   <option>Staff</option>
  //                   <option>Manager</option>
  //                   <option>Admin</option>
  //                 </select>
  //               </div>
  //               <div>
  //                 <label className="block text-sm font-medium mb-1">Branch</label>
  //                 <select className="w-full p-2 border rounded-lg">
  //                   <option>Colombo Central</option>
  //                   <option>Kandy Branch</option>
  //                   <option>Galle Branch</option>
  //                   <option>Matara Branch</option>
  //                 </select>
  //               </div>
  //               <div>
  //                 <label className="block text-sm font-medium mb-1">Password</label>
  //                 <input type="password" className="w-full p-2 border rounded-lg" placeholder="••••••••" />
  //               </div>
  //               <div className="flex space-x-3 pt-4">
  //                 <button 
  //                   type="button" 
  //                   onClick={() => setShowUserForm(false)}
  //                   className="flex-1 px-4 py-2 border rounded-lg hover:bg-gray-50"
  //                 >
  //                   Cancel
  //                 </button>
  //                 <button 
  //                   type="submit" 
  //                   className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
  //                 >
  //                   Add User
  //                 </button>
  //               </div>
  //             </form>
  //           </div>
  //         </div>
  //       )}
  //     </div>
  //   );
  // };


  const UserManagement = () => {
    const [showUserForm, setShowUserForm] = useState(false);
    const [users] = useState([
      { id: 1, name: 'Sashan Fernando', email: 'sashan@stc.lk', role: 'Admin', branch: 'Colombo Central', status: 'Active', lastLogin: '2024-06-24' },
      { id: 2, name: 'Priya Silva', email: 'priya@stc.lk', role: 'Manager', branch: 'Kandy Branch', status: 'Active', lastLogin: '2024-06-23' },
      { id: 3, name: 'Kamal Perera', email: 'kamal@stc.lk', role: 'Staff', branch: 'Galle Branch', status: 'Active', lastLogin: '2024-06-22' }
    ]);

    return (
      <div className="user-management-container">
        <div className="user-management-header">
          <h2>User Management</h2>
          <button onClick={() => setShowUserForm(true)} className="btn blue">
            <Plus className="icon" />
            <span>Add User</span>
          </button>
        </div>

        <div className="user-summary">
          <div className="summary-box">
            <h3>Total Users</h3>
            <p className="summary-value blue">24</p>
          </div>
          <div className="summary-box">
            <h3>Active Sessions</h3>
            <p className="summary-value green">18</p>
          </div>
          <div className="summary-box">
            <h3>Branches</h3>
            <p className="summary-value purple">8</p>
          </div>
        </div>

        <div className="user-table-wrapper">
          <table className="user-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Branch</th>
                <th>Status</th>
                <th>Last Login</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <span className={`role-tag ${user.role.toLowerCase()}`}>{user.role}</span>
                  </td>
                  <td>{user.branch}</td>
                  <td>
                    <span className="status-tag active">{user.status}</span>
                  </td>
                  <td>{user.lastLogin}</td>
                  <td>
                    <div className="table-actions">
                      <button className="icon-button blue">
                        <Edit className="icon" />
                      </button>
                      <button className="icon-button red">
                        <Trash2 className="icon" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {showUserForm && (
          <div className="modal-overlay">
            <div className="modal">
              <div className="modal-header">
                <h3>Add New User</h3>
                <button onClick={() => setShowUserForm(false)} className="icon-button">
                  <X className="icon" />
                </button>
              </div>
              <form className="modal-form">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="John Doe" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="john@stc.lk" />
                </div>
                <div className="form-group">
                  <label>Role</label>
                  <select>
                    <option>Staff</option>
                    <option>Manager</option>
                    <option>Admin</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Branch</label>
                  <select>
                    <option>Colombo Central</option>
                    <option>Kandy Branch</option>
                    <option>Galle Branch</option>
                    <option>Matara Branch</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" placeholder="••••••••" />
                </div>
                <div className="form-actions">
                  <button type="button" className="btn gray" onClick={() => setShowUserForm(false)}>
                    Cancel
                  </button>
                  <button type="submit" className="btn blue">
                    Add User
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  };




  // const SystemSettings = () => {
  //   return (
  //     <div className="space-y-6">
  //     <h2 className="text-2xl font-bold">System Settings</h2>
      
  //     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
  //       <div className="bg-white p-6 rounded-lg shadow-sm border">
  //         <h3 className="text-lg font-semibold mb-4">General Settings</h3>
  //         <div className="space-y-4">
  //           <div>
  //             <label className="block text-sm font-medium mb-1">System Language</label>
  //             <select className="w-full p-2 border rounded-lg">
  //               <option>English</option>
  //               <option>Sinhala</option>
  //               <option>Tamil</option>
  //             </select>
  //           </div>
  //           <div>
  //             <label className="block text-sm font-medium mb-1">Date Format</label>
  //             <select className="w-full p-2 border rounded-lg">
  //               <option>DD/MM/YYYY</option>
  //               <option>MM/DD/YYYY</option>
  //               <option>YYYY-MM-DD</option>
  //             </select>
  //           </div>
  //           <div>
  //             <label className="block text-sm font-medium mb-1">Currency</label>
  //             <select className="w-full p-2 border rounded-lg">
  //               <option>LKR (₨)</option>
  //               <option>USD ($)</option>
  //             </select>
  //           </div>
  //         </div>
  //       </div>

  //       <div className="bg-white p-6 rounded-lg shadow-sm border">
  //         <h3 className="text-lg font-semibold mb-4">Notification Settings</h3>
  //         <div className="space-y-4">
  //           <div className="flex items-center justify-between">
  //             <span className="text-sm">Low Stock Alerts</span>
  //             <input type="checkbox" className="toggle" defaultChecked />
  //           </div>
  //           <div className="flex items-center justify-between">
  //             <span className="text-sm">Transfer Notifications</span>
  //             <input type="checkbox" className="toggle" defaultChecked />
  //           </div>
  //           <div className="flex items-center justify-between">
  //             <span className="text-sm">Damage Report Alerts</span>
  //             <input type="checkbox" className="toggle" defaultChecked />
  //           </div>
  //           <div className="flex items-center justify-between">
  //             <span className="text-sm">Email Notifications</span>
  //             <input type="checkbox" className="toggle" />
  //           </div>
  //         </div>
  //       </div>

  //       <div className="bg-white p-6 rounded-lg shadow-sm border">
  //         <h3 className="text-lg font-semibold mb-4">Security Settings</h3>
  //         <div className="space-y-4">
  //           <div>
  //             <label className="block text-sm font-medium mb-1">Session Timeout (minutes)</label>
  //             <input type="number" className="w-full p-2 border rounded-lg" defaultValue="30" />
  //           </div>
  //           <div>
  //             <label className="block text-sm font-medium mb-1">Password Policy</label>
  //             <select className="w-full p-2 border rounded-lg">
  //               <option>Standard (8+ characters)</option>
  //               <option>Strong (12+ characters, mixed case, numbers)</option>
  //               <option>Very Strong (16+ characters, symbols)</option>
  //             </select>
  //           </div>
  //           <div className="flex items-center justify-between">
  //             <span className="text-sm">Two-Factor Authentication</span>
  //             <input type="checkbox" className="toggle" />
  //           </div>
  //         </div>
  //       </div>

  //       <div className="bg-white p-6 rounded-lg shadow-sm border">
  //         <h3 className="text-lg font-semibold mb-4">Backup & Maintenance</h3>
  //         <div className="space-y-4">
  //           <div>
  //             <label className="block text-sm font-medium mb-1">Automatic Backup</label>
  //             <select className="w-full p-2 border rounded-lg">
  //               <option>Daily</option>
  //               <option>Weekly</option>
  //               <option>Monthly</option>
  //               <option>Disabled</option>
  //             </select>
  //           </div>
  //           <div className="flex space-x-2">
  //             <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
  //               Backup Now
  //             </button>
  //             <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
  //               System Check
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  //   );
  // };



  const SystemSettings = () => {
    return (
      <div className="settings-container">
        <h2 className="settings-title">System Settings</h2>

        <div className="settings-grid">
          {/* General Settings */}
          <div className="settings-card">
            <h3 className="settings-card-title">General Settings</h3>
            <div className="settings-group">
              <div className="form-group">
                <label>System Language</label>
                <select>
                  <option>English</option>
                  <option>Sinhala</option>
                  <option>Tamil</option>
                </select>
              </div>
              <div className="form-group">
                <label>Date Format</label>
                <select>
                  <option>DD/MM/YYYY</option>
                  <option>MM/DD/YYYY</option>
                  <option>YYYY-MM-DD</option>
                </select>
              </div>
              <div className="form-group">
                <label>Currency</label>
                <select>
                  <option>LKR (₨)</option>
                  <option>USD ($)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="settings-card">
            <h3 className="settings-card-title">Notification Settings</h3>
            <div className="toggle-group">
              <div className="toggle-row">
                <span>Low Stock Alerts</span>
                <input type="checkbox" defaultChecked />
              </div>
              <div className="toggle-row">
                <span>Transfer Notifications</span>
                <input type="checkbox" defaultChecked />
              </div>
              <div className="toggle-row">
                <span>Damage Report Alerts</span>
                <input type="checkbox" defaultChecked />
              </div>
              <div className="toggle-row">
                <span>Email Notifications</span>
                <input type="checkbox" />
              </div>
            </div>
          </div>

          {/* Security Settings */}
          <div className="settings-card">
            <h3 className="settings-card-title">Security Settings</h3>
            <div className="settings-group">
              <div className="form-group">
                <label>Session Timeout (minutes)</label>
                <input type="number" defaultValue="30" />
              </div>
              <div className="form-group">
                <label>Password Policy</label>
                <select>
                  <option>Standard (8+ characters)</option>
                  <option>Strong (12+ characters, mixed case, numbers)</option>
                  <option>Very Strong (16+ characters, symbols)</option>
                </select>
              </div>
              <div className="toggle-row">
                <span>Two-Factor Authentication</span>
                <input type="checkbox" />
              </div>
            </div>
          </div>

          {/* Backup & Maintenance */}
          <div className="settings-card">
            <h3 className="settings-card-title">Backup & Maintenance</h3>
            <div className="settings-group">
              <div className="form-group">
                <label>Automatic Backup</label>
                <select>
                  <option>Daily</option>
                  <option>Weekly</option>
                  <option>Monthly</option>
                  <option>Disabled</option>
                </select>
              </div>
              <div className="button-row">
                <button className="sbtn blue">Backup Now</button>
                <button className="sbtn green">System Check</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };




  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <Dashboard />;
      case 'stock': return <StockManagement />;
      case 'transfers': return <StockTransfers />;
      case 'damage': return <DamageReports />;
      case 'procurement': return <Procurement />;
      case 'reports': return <Reports />;
      case 'users': return <UserManagement />;
      case 'settings': return <SystemSettings />;
      default: return <Dashboard />;
    }
  };

  // return (
  //   <div className="min-h-screen bg-gray-50 flex">
  //     {/* Sidebar */}
  //     <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
  //       <div className="flex items-center justify-between h-16 px-4 border-b">
  //         <h1 className="text-xl font-bold text-green-600">TimberCorp STC</h1>
  //         <button 
  //           onClick={() => setSidebarOpen(false)}
  //           className="lg:hidden"
  //         >
  //           <X className="w-6 h-6" />
  //         </button>
  //       </div>
        
  //       <nav className="mt-8">
  //         {menuItems.map((item) => {
  //           const Icon = item.icon;
  //           return (
  //             <button
  //               key={item.id}
  //               onClick={() => {
  //                 setActiveTab(item.id);
  //                 setSidebarOpen(false);
  //               }}
  //               className={`w-full flex items-center px-4 py-3 text-left hover:bg-gray-100 ${
  //                 activeTab === item.id ? 'bg-green-50 text-green-600 border-r-2 border-green-600' : 'text-gray-700'
  //               }`}
  //             >
  //               <Icon className="w-5 h-5 mr-3" />
  //               {item.label}
  //             </button>
  //           );
  //         })}
  //       </nav>
  //     </div>

  //     {/* Main Content */}
  //     <div className="flex-1 flex flex-col">
  //       {/* Header */}
  //       <header className="bg-white shadow-sm border-b h-16 flex items-center justify-between px-4">
  //         <div className="flex items-center space-x-4">
  //           <button 
  //             onClick={() => setSidebarOpen(true)}
  //             className="lg:hidden"
  //           >
  //             <Menu className="w-6 h-6" />
  //           </button>
  //           <h2 className="text-xl font-semibold capitalize">
  //             {activeTab === 'damage' ? 'Damage & Loss' : activeTab}
  //           </h2>
  //         </div>
          
  //         <div className="flex items-center space-x-4">
  //           <div className="flex items-center space-x-2">
  //             <Calendar className="w-4 h-4 text-gray-500" />
  //             <span className="text-sm text-gray-600">June 24, 2025</span>
  //           </div>
  //           <div className="flex items-center space-x-2">
  //             <User className="w-8 h-8 bg-green-100 text-green-600 rounded-full p-1" />
  //             <div className="text-sm">
  //               <p className="font-medium">{currentUser.name}</p>
  //               <p className="text-gray-500">{currentUser.role} • {currentUser.branch}</p>
  //             </div>
  //           </div>
  //           <button className="text-gray-500 hover:text-gray-700">
  //             <LogOut className="w-5 h-5" />
  //           </button>
  //         </div>
  //       </header>

  //       {/* Content */}
  //       <main className="flex-1 p-6 overflow-auto">
  //         {renderContent()}
  //       </main>
  //     </div>

  //     {/* Mobile sidebar overlay */}
  //     {sidebarOpen && (
  //       <div 
  //         className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
  //         onClick={() => setSidebarOpen(false)}
  //       />
  //     )}
  //   </div>
  // );

    return (
      <div className="main-layout">
        {/* Sidebar */}
        <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
          <div className="sidebar-header">
            <h1 className="logo">TimberCorp STC</h1>
            <button onClick={() => setSidebarOpen(false)} className="close-btn">
              <X size={24} />
            </button>
          </div>
          <nav className="sidebar-nav">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`sidebar-item ${activeTab === item.id ? 'active' : ''}`}
                >
                  <Icon size={18} className="sidebar-icon" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Overlay for mobile */}
        {sidebarOpen && <div className="overlay" onClick={() => setSidebarOpen(false)} />}

        {/* Main Content */}
        <div className="main-content">
          <header className="header">
            <div className="header-left">
              <button className="menu-btn" onClick={() => setSidebarOpen(true)}>
                <Menu size={24} />
              </button>
              <h2 className="page-title">
                {activeTab === 'damage' ? 'Damage & Loss' : activeTab}
              </h2>
            </div>
            <div className="header-right">
              <div className="date-display">
                <Calendar size={16} />
                <span>June 24, 2025</span>
              </div>
              <div className="user-info">
                <div className="user-avatar">
                  <User size={20} />
                </div>
                <div className="user-details">
                  <p>{currentUser.name}</p>
                  <p className="user-role">{currentUser.role} • {currentUser.branch}</p>
                </div>
              </div>
              <button className="logout-btn">
                <LogOut size={20} />
              </button>
            </div>
          </header>

          <main className="content-area">
            {renderContent()}
          </main>
        </div>
      </div>
    );
};

export default TimberCorpSystem;