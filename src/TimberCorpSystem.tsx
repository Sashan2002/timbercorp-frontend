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

  const Dashboard = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Stock</p>
              <p className="text-2xl font-bold text-green-600">284</p>
            </div>
            <Package className="w-8 h-8 text-green-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Transfers</p>
              <p className="text-2xl font-bold text-blue-600">12</p>
            </div>
            <ArrowRightLeft className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Damage Reports</p>
              <p className="text-2xl font-bold text-red-600">7</p>
            </div>
            <AlertTriangle className="w-8 h-8 text-red-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Monthly Value</p>
              <p className="text-2xl font-bold text-purple-600">₨2.5M</p>
            </div>
            <BarChart3 className="w-8 h-8 text-purple-600" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded">
              <Package className="w-5 h-5 text-green-600" />
              <div>
                <p className="text-sm font-medium">New stock added - Teak (25 CF)</p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded">
              <ArrowRightLeft className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-sm font-medium">Transfer completed - Kandy to Galle</p>
                <p className="text-xs text-gray-500">4 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              <div>
                <p className="text-sm font-medium">Damage reported - Mahogany (3 CF)</p>
                <p className="text-xs text-gray-500">1 day ago</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold mb-4">Low Stock Alerts</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-yellow-50 border border-yellow-200 rounded">
              <div>
                <p className="text-sm font-medium">Jak Wood</p>
                <p className="text-xs text-gray-500">Current: 45 CF | Minimum: 50 CF</p>
              </div>
              <span className="px-2 py-1 bg-yellow-200 text-yellow-800 text-xs rounded">Low</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-red-50 border border-red-200 rounded">
              <div>
                <p className="text-sm font-medium">Pine Wood</p>
                <p className="text-xs text-gray-500">Current: 12 CF | Minimum: 30 CF</p>
              </div>
              <span className="px-2 py-1 bg-red-200 text-red-800 text-xs rounded">Critical</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const StockManagement = () => {
    const [showAddForm, setShowAddForm] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredStock = stockData.filter(item => 
      item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.species.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Stock Management</h2>
          <button 
            onClick={() => setShowAddForm(true)}
            className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-700"
          >
            <Plus className="w-4 h-4" />
            <span>Add Stock</span>
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex justify-between items-center mb-4">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search timber type or species..."
                className="pl-10 pr-4 py-2 border rounded-lg w-64"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700">
              <Download className="w-4 h-4" />
              <span>Export</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Type</th>
                  <th className="text-left py-3 px-4">Species</th>
                  <th className="text-left py-3 px-4">Quantity</th>
                  <th className="text-left py-3 px-4">Location</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-left py-3 px-4">Last Updated</th>
                  <th className="text-left py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredStock.map((item) => (
                  <tr key={item.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{item.type}</td>
                    <td className="py-3 px-4 text-sm text-gray-600">{item.species}</td>
                    <td className="py-3 px-4">{item.quantity} {item.unit}</td>
                    <td className="py-3 px-4">{item.location}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded text-xs ${
                        item.status === 'Available' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">{item.lastUpdated}</td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-800">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="text-green-600 hover:text-green-800">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="text-red-600 hover:text-red-800">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {showAddForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-full max-w-md">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Add New Stock</h3>
                <button onClick={() => setShowAddForm(false)}>
                  <X className="w-5 h-5" />
                </button>
              </div>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Timber Type</label>
                  <input type="text" className="w-full p-2 border rounded-lg" placeholder="e.g., Teak" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Species</label>
                  <input type="text" className="w-full p-2 border rounded-lg" placeholder="Scientific name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Quantity</label>
                  <input type="number" className="w-full p-2 border rounded-lg" placeholder="0" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Unit</label>
                  <select className="w-full p-2 border rounded-lg">
                    <option>Cubic Feet</option>
                    <option>Cubic Meters</option>
                    <option>Board Feet</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Location</label>
                  <select className="w-full p-2 border rounded-lg">
                    <option>Yard A</option>
                    <option>Yard B</option>
                    <option>Yard C</option>
                    <option>Warehouse 1</option>
                  </select>
                </div>
                <div className="flex space-x-3 pt-4">
                  <button 
                    type="button" 
                    onClick={() => setShowAddForm(false)}
                    className="flex-1 px-4 py-2 border rounded-lg hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                  >
                    Add Stock
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  };

  const StockTransfers = () => {
    const [showTransferForm, setShowTransferForm] = useState(false);

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Stock Transfers</h2>
          <button 
            onClick={() => setShowTransferForm(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700"
          >
            <Plus className="w-4 h-4" />
            <span>New Transfer</span>
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Reference</th>
                  <th className="text-left py-3 px-4">From</th>
                  <th className="text-left py-3 px-4">To</th>
                  <th className="text-left py-3 px-4">Timber Type</th>
                  <th className="text-left py-3 px-4">Quantity</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-left py-3 px-4">Date</th>
                  <th className="text-left py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {transferData.map((transfer) => (
                  <tr key={transfer.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{transfer.reference}</td>
                    <td className="py-3 px-4">{transfer.from}</td>
                    <td className="py-3 px-4">{transfer.to}</td>
                    <td className="py-3 px-4">{transfer.type}</td>
                    <td className="py-3 px-4">{transfer.quantity} CF</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded text-xs ${
                        transfer.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                        transfer.status === 'In Transit' ? 'bg-blue-100 text-blue-800' : 
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {transfer.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">{transfer.date}</td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-800">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="text-green-600 hover:text-green-800">
                          <Edit className="w-4 h-4" />
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
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-full max-w-md">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">New Transfer Request</h3>
                <button onClick={() => setShowTransferForm(false)}>
                  <X className="w-5 h-5" />
                </button>
              </div>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">From Branch</label>
                  <select className="w-full p-2 border rounded-lg">
                    <option>Colombo Central</option>
                    <option>Kandy Branch</option>
                    <option>Galle Branch</option>
                    <option>Matara Branch</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">To Branch</label>
                  <select className="w-full p-2 border rounded-lg">
                    <option>Colombo Central</option>
                    <option>Kandy Branch</option>
                    <option>Galle Branch</option>
                    <option>Matara Branch</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Timber Type</label>
                  <select className="w-full p-2 border rounded-lg">
                    <option>Teak</option>
                    <option>Mahogany</option>
                    <option>Jak</option>
                    <option>Pine</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Quantity (CF)</label>
                  <input type="number" className="w-full p-2 border rounded-lg" placeholder="0" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Reason</label>
                  <textarea className="w-full p-2 border rounded-lg" rows={3} placeholder="Transfer reason..."></textarea>
                </div>
                <div className="flex space-x-3 pt-4">
                  <button 
                    type="button" 
                    onClick={() => setShowTransferForm(false)}
                    className="flex-1 px-4 py-2 border rounded-lg hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
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

  const DamageReports = () => {
    const [showReportForm, setShowReportForm] = useState(false);

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Damage & Loss Reports</h2>
          <button 
            onClick={() => setShowReportForm(true)}
            className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-red-700"
          >
            <Plus className="w-4 h-4" />
            <span>Report Damage</span>
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Timber Type</th>
                  <th className="text-left py-3 px-4">Quantity</th>
                  <th className="text-left py-3 px-4">Reason</th>
                  <th className="text-left py-3 px-4">Reported By</th>
                  <th className="text-left py-3 px-4">Date</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-left py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {damageReports.map((report) => (
                  <tr key={report.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{report.type}</td>
                    <td className="py-3 px-4">{report.quantity} CF</td>
                    <td className="py-3 px-4">{report.reason}</td>
                    <td className="py-3 px-4">{report.reportedBy}</td>
                    <td className="py-3 px-4">{report.date}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded text-xs ${
                        report.status === 'Approved' ? 'bg-green-100 text-green-800' : 
                        report.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'
                      }`}>
                        {report.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-800">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="text-green-600 hover:text-green-800">
                          <Edit className="w-4 h-4" />
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
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-full max-w-md">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Report Damage/Loss</h3>
                <button onClick={() => setShowReportForm(false)}>
                  <X className="w-5 h-5" />
                </button>
              </div>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Timber Type</label>
                  <select className="w-full p-2 border rounded-lg">
                    <option>Teak</option>
                    <option>Mahogany</option>
                    <option>Jak</option>
                    <option>Pine</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Quantity Lost (CF)</label>
                  <input type="number" className="w-full p-2 border rounded-lg" placeholder="0" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Damage Type</label>
                  <select className="w-full p-2 border rounded-lg">
                    <option>Water damage</option>
                    <option>Insect damage</option>
                    <option>Fire damage</option>
                    <option>Theft</option>
                    <option>Physical damage</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Description</label>
                  <textarea className="w-full p-2 border rounded-lg" rows={3} placeholder="Detailed description of damage..."></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Location</label>
                  <input type="text" className="w-full p-2 border rounded-lg" placeholder="Yard/Warehouse location" />
                </div>
                <div className="flex space-x-3 pt-4">
                  <button 
                    type="button" 
                    onClick={() => setShowReportForm(false)}
                    className="flex-1 px-4 py-2 border rounded-lg hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                  >
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

  const Procurement = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Procurement Records</h2>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-700">
          <Plus className="w-4 h-4" />
          <span>New Procurement</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="font-semibold text-gray-700 mb-2">Pending Orders</h3>
          <p className="text-2xl font-bold text-blue-600">8</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="font-semibold text-gray-700 mb-2">This Month</h3>
          <p className="text-2xl font-bold text-green-600">₨1.2M</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="font-semibold text-gray-700 mb-2">Suppliers</h3>
          <p className="text-2xl font-bold text-purple-600">15</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-lg font-semibold mb-4">Recent Procurement Orders</h3>
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Order ID</th>
                <th className="text-left py-3 px-4">Supplier</th>
                <th className="text-left py-3 px-4">Timber Type</th>
                <th className="text-left py-3 px-4">Quantity</th>
                <th className="text-left py-3 px-4">Amount</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-left py-3 px-4">Date</th>
                <th className="text-left py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-4 font-medium">PO001</td>
                <td className="py-3 px-4">Lanka Timber Co.</td>
                <td className="py-3 px-4">Teak</td>
                <td className="py-3 px-4">100 CF</td>
                <td className="py-3 px-4">₨250,000</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">Pending</span>
                </td>
                <td className="py-3 px-4">2024-06-20</td>
                <td className="py-3 px-4">
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-800">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="text-green-600 hover:text-green-800">
                      <Edit className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-4 font-medium">PO002</td>
                <td className="py-3 px-4">Forest Products Ltd.</td>
                <td className="py-3 px-4">Mahogany</td>
                <td className="py-3 px-4">75 CF</td>
                <td className="py-3 px-4">₨180,000</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Completed</span>
                </td>
                <td className="py-3 px-4">2024-06-18</td>
                <td className="py-3 px-4">
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-800">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="text-green-600 hover:text-green-800">
                      <FileText className="w-4 h-4" />
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

  const Reports = () => {
    const [selectedReport, setSelectedReport] = useState('stock');
    const [dateRange, setDateRange] = useState('monthly');

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Reports & Analytics</h2>
          <div className="flex space-x-2">
            <select 
              value={dateRange} 
              onChange={(e) => setDateRange(e.target.value)}
              className="px-3 py-2 border rounded-lg"
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </select>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700">
              <Download className="w-4 h-4" />
              <span>Export</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <button 
            onClick={() => setSelectedReport('stock')}
            className={`p-4 rounded-lg border text-left ${selectedReport === 'stock' ? 'bg-blue-50 border-blue-300' : 'bg-white'}`}
          >
            <Package className="w-6 h-6 mb-2 text-blue-600" />
            <h3 className="font-medium">Stock Report</h3>
            <p className="text-sm text-gray-600">Current inventory levels</p>
          </button>
          <button 
            onClick={() => setSelectedReport('transfers')}
            className={`p-4 rounded-lg border text-left ${selectedReport === 'transfers' ? 'bg-blue-50 border-blue-300' : 'bg-white'}`}
          >
            <ArrowRightLeft className="w-6 h-6 mb-2 text-green-600" />
            <h3 className="font-medium">Transfer Report</h3>
            <p className="text-sm text-gray-600">Inter-branch movements</p>
          </button>
          <button 
            onClick={() => setSelectedReport('damage')}
            className={`p-4 rounded-lg border text-left ${selectedReport === 'damage' ? 'bg-blue-50 border-blue-300' : 'bg-white'}`}
          >
            <AlertTriangle className="w-6 h-6 mb-2 text-red-600" />
            <h3 className="font-medium">Damage Report</h3>
            <p className="text-sm text-gray-600">Loss and damage summary</p>
          </button>
          <button 
            onClick={() => setSelectedReport('financial')}
            className={`p-4 rounded-lg border text-left ${selectedReport === 'financial' ? 'bg-blue-50 border-blue-300' : 'bg-white'}`}
          >
            <BarChart3 className="w-6 h-6 mb-2 text-purple-600" />
            <h3 className="font-medium">Financial Report</h3>
            <p className="text-sm text-gray-600">Revenue and costs</p>
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold mb-4">
            {selectedReport === 'stock' && 'Stock Inventory Report'}
            {selectedReport === 'transfers' && 'Transfer Activity Report'}
            {selectedReport === 'damage' && 'Damage & Loss Report'}
            {selectedReport === 'financial' && 'Financial Summary Report'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Total Items</p>
              <p className="text-2xl font-bold">284</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Total Value</p>
              <p className="text-2xl font-bold">₨2.5M</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Low Stock Items</p>
              <p className="text-2xl font-bold text-red-600">12</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Locations</p>
              <p className="text-2xl font-bold">8</p>
            </div>
          </div>

          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Chart visualization would appear here</p>
              <p className="text-sm text-gray-400">Integration with charting library needed</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const UserManagement = () => {
    const [showUserForm, setShowUserForm] = useState(false);
    const [users] = useState([
      { id: 1, name: 'Sashan Fernando', email: 'sashan@stc.lk', role: 'Admin', branch: 'Colombo Central', status: 'Active', lastLogin: '2024-06-24' },
      { id: 2, name: 'Priya Silva', email: 'priya@stc.lk', role: 'Manager', branch: 'Kandy Branch', status: 'Active', lastLogin: '2024-06-23' },
      { id: 3, name: 'Kamal Perera', email: 'kamal@stc.lk', role: 'Staff', branch: 'Galle Branch', status: 'Active', lastLogin: '2024-06-22' }
    ]);

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">User Management</h2>
          <button 
            onClick={() => setShowUserForm(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700"
          >
            <Plus className="w-4 h-4" />
            <span>Add User</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="font-semibold text-gray-700 mb-2">Total Users</h3>
            <p className="text-2xl font-bold text-blue-600">24</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="font-semibold text-gray-700 mb-2">Active Sessions</h3>
            <p className="text-2xl font-bold text-green-600">18</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="font-semibold text-gray-700 mb-2">Branches</h3>
            <p className="text-2xl font-bold text-purple-600">8</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Name</th>
                  <th className="text-left py-3 px-4">Email</th>
                  <th className="text-left py-3 px-4">Role</th>
                  <th className="text-left py-3 px-4">Branch</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-left py-3 px-4">Last Login</th>
                  <th className="text-left py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{user.name}</td>
                    <td className="py-3 px-4">{user.email}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded text-xs ${
                        user.role === 'Admin' ? 'bg-red-100 text-red-800' : 
                        user.role === 'Manager' ? 'bg-blue-100 text-blue-800' : 
                        'bg-green-100 text-green-800'
                      }`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="py-3 px-4">{user.branch}</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">
                        {user.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">{user.lastLogin}</td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-800">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="text-red-600 hover:text-red-800">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {showUserForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-full max-w-md">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Add New User</h3>
                <button onClick={() => setShowUserForm(false)}>
                  <X className="w-5 h-5" />
                </button>
              </div>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Full Name</label>
                  <input type="text" className="w-full p-2 border rounded-lg" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input type="email" className="w-full p-2 border rounded-lg" placeholder="john@stc.lk" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Role</label>
                  <select className="w-full p-2 border rounded-lg">
                    <option>Staff</option>
                    <option>Manager</option>
                    <option>Admin</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Branch</label>
                  <select className="w-full p-2 border rounded-lg">
                    <option>Colombo Central</option>
                    <option>Kandy Branch</option>
                    <option>Galle Branch</option>
                    <option>Matara Branch</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Password</label>
                  <input type="password" className="w-full p-2 border rounded-lg" placeholder="••••••••" />
                </div>
                <div className="flex space-x-3 pt-4">
                  <button 
                    type="button" 
                    onClick={() => setShowUserForm(false)}
                    className="flex-1 px-4 py-2 border rounded-lg hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
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

  const SystemSettings = () => {
    return (
      <div className="space-y-6">
      <h2 className="text-2xl font-bold">System Settings</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold mb-4">General Settings</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">System Language</label>
              <select className="w-full p-2 border rounded-lg">
                <option>English</option>
                <option>Sinhala</option>
                <option>Tamil</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Date Format</label>
              <select className="w-full p-2 border rounded-lg">
                <option>DD/MM/YYYY</option>
                <option>MM/DD/YYYY</option>
                <option>YYYY-MM-DD</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Currency</label>
              <select className="w-full p-2 border rounded-lg">
                <option>LKR (₨)</option>
                <option>USD ($)</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold mb-4">Notification Settings</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">Low Stock Alerts</span>
              <input type="checkbox" className="toggle" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Transfer Notifications</span>
              <input type="checkbox" className="toggle" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Damage Report Alerts</span>
              <input type="checkbox" className="toggle" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Email Notifications</span>
              <input type="checkbox" className="toggle" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold mb-4">Security Settings</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Session Timeout (minutes)</label>
              <input type="number" className="w-full p-2 border rounded-lg" defaultValue="30" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Password Policy</label>
              <select className="w-full p-2 border rounded-lg">
                <option>Standard (8+ characters)</option>
                <option>Strong (12+ characters, mixed case, numbers)</option>
                <option>Very Strong (16+ characters, symbols)</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Two-Factor Authentication</span>
              <input type="checkbox" className="toggle" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold mb-4">Backup & Maintenance</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Automatic Backup</label>
              <select className="w-full p-2 border rounded-lg">
                <option>Daily</option>
                <option>Weekly</option>
                <option>Monthly</option>
                <option>Disabled</option>
              </select>
            </div>
            <div className="flex space-x-2">
              <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Backup Now
              </button>
              <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                System Check
              </button>
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

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between h-16 px-4 border-b">
          <h1 className="text-xl font-bold text-green-600">TimberCorp STC</h1>
          <button 
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <nav className="mt-8">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center px-4 py-3 text-left hover:bg-gray-100 ${
                  activeTab === item.id ? 'bg-green-50 text-green-600 border-r-2 border-green-600' : 'text-gray-700'
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm border-b h-16 flex items-center justify-between px-4">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden"
            >
              <Menu className="w-6 h-6" />
            </button>
            <h2 className="text-xl font-semibold capitalize">
              {activeTab === 'damage' ? 'Damage & Loss' : activeTab}
            </h2>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600">June 24, 2025</span>
            </div>
            <div className="flex items-center space-x-2">
              <User className="w-8 h-8 bg-green-100 text-green-600 rounded-full p-1" />
              <div className="text-sm">
                <p className="font-medium">{currentUser.name}</p>
                <p className="text-gray-500">{currentUser.role} • {currentUser.branch}</p>
              </div>
            </div>
            <button className="text-gray-500 hover:text-gray-700">
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 overflow-auto">
          {renderContent()}
        </main>
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default TimberCorpSystem;